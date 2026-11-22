import { useEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import { createPortal } from 'react-dom'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import {
  content,
  curriculum,
  lessons,
  subjects,
  tracks,
  type Chapter,
  type Lesson,
  type TrackId,
} from './content/manifest'
import { hrefForRoute, isRootPath, routeFromPath, routeHref, type Route, type View } from './router'
import 'katex/dist/katex.min.css'

type Heading = { id: string; label: string; level: 2 | 3 }
const readingScales = [1, 1.2, 1.35, 1.5] as const
const defaultReadingScale = 1.2

// Internal navigation uses real links; modified clicks keep the browser's own
// new-tab/new-window behaviour.
const followLink = (navigate: () => void) => (event: MouseEvent<HTMLAnchorElement>) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  navigate()
}

const subjectById = new Map(subjects.map((subject) => [subject.id, subject]))
const trackById = new Map(tracks.map((track) => [track.id, track]))

const lessonsByChapter = new Map<string, Lesson[]>()
for (const lesson of lessons) {
  lessonsByChapter.set(lesson.chapter, [...(lessonsByChapter.get(lesson.chapter) ?? []), lesson])
}

const chaptersBySubject = new Map<string, Chapter[]>()
for (const chapter of curriculum) {
  chaptersBySubject.set(chapter.subjectId, [...(chaptersBySubject.get(chapter.subjectId) ?? []), chapter])
}
for (const chapters of chaptersBySubject.values()) chapters.sort((a, b) => a.number - b.number)

const initialRoute = routeFromPath(window.location.pathname)
const initialLesson = initialRoute.view === 'lesson' ? lessons.find((lesson) => lesson.id === initialRoute.lessonId) : undefined
const initialSubject = initialRoute.view === 'subject'
  ? subjectById.get(initialRoute.subjectId)
  : initialLesson ? subjectById.get(initialLesson.subjectId) : undefined
const initialTrackId: TrackId = initialRoute.view === 'path'
  ? initialRoute.trackId
  : initialSubject?.track ?? 'class-11'

const headingId = (value: string) => value
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/[\s-]+/g, '-')

const cleanHeading = (value: string) => value.replace(/^\d+(?:\.\d+)*[.)]?\s+/, '').trim()

type MarkdownNode = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: MarkdownNode[]; value?: string }

const textContent = (node: MarkdownNode): string => {
  if (node.type === 'text') return node.value ?? ''
  const className = node.properties?.className
  const classes = Array.isArray(className) ? className.map(String) : [String(className ?? '')]
  if (classes.some((name) => name.includes('katex') || name.includes('math'))) return ''
  return (node.children ?? []).map(textContent).join('')
}

// Generate heading ids from the rendered text so the lesson TOC and the page agree,
// including headings that begin with a section number.
const rehypeLessonIds = () => (tree: MarkdownNode) => {
  const visit = (node: MarkdownNode) => {
    if (node.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
      node.properties = { ...node.properties, id: headingId(textContent(node)) }
    }
    ;(node.children ?? []).forEach(visit)
  }
  visit(tree)
}

const headingsFromMarkdown = (markdown: string): Heading[] => markdown
  .split('\n')
  .flatMap((line) => {
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) return []
    const raw = match[2].replace(/[*_`]/g, '').trim()
    const idSource = raw.replace(/\$[^$]*\$/g, '')
    return [{ id: headingId(idSource), label: cleanHeading(raw.replace(/\$+/g, '')), level: match[1].length as 2 | 3 }]
  })

const saved = (key: string, fallback: string[]) => {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}

// Layout switches that need different markup rather than different CSS
// (collapsible vs always-open panels).
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const list = window.matchMedia(query)
    const update = () => setMatches(list.matches)
    update()
    list.addEventListener('change', update)
    return () => list.removeEventListener('change', update)
  }, [query])
  return matches
}

function App() {
  const [view, setView] = useState<View>(initialRoute.view)
  const [activeId, setActiveId] = useState(initialLesson?.id ?? lessons[0].id)
  const [activeTrackId, setActiveTrackId] = useState<TrackId>(initialTrackId)
  const [activeSubjectId, setActiveSubjectId] = useState(initialSubject?.id ?? 'class-11-physics')
  const [lastLessonId, setLastLessonId] = useState(() => initialLesson?.id ?? localStorage.getItem('studyroom-last-lesson') ?? '')
  const [completed, setCompleted] = useState<string[]>(() => saved('studyroom-completed', []))
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchIndex, setSearchIndex] = useState(0)
  const [searchTrack, setSearchTrack] = useState<TrackId | 'all'>('all')
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('studyroom-theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [fontScale, setFontScale] = useState(() => {
    const savedScale = Number(localStorage.getItem('studyroom-reading-scale'))
    if (!readingScales.includes(savedScale as typeof readingScales[number])) return defaultReadingScale
    // One-time upgrade: anyone still on the old 100% default moves to the new larger default.
    if (savedScale === 1 && localStorage.getItem('studyroom-reading-scale-v2') !== 'done') {
      localStorage.setItem('studyroom-reading-scale-v2', 'done')
      return defaultReadingScale
    }
    return savedScale
  })
  const [mobileMenu, setMobileMenu] = useState(false)
  // Below the drawer breakpoint the sidebar is off-canvas, so it must leave the tab order.
  const drawerMode = useMediaQuery('(max-width: 1024px)')
  const searchTriggerRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const currentPath = useRef(window.location.pathname)

  useEffect(() => { localStorage.setItem('studyroom-completed', JSON.stringify(completed)) }, [completed])
  useEffect(() => {
    localStorage.setItem('studyroom-theme', dark ? 'dark' : 'light')
    // Theme lives on <html> so native UI (scrollbars, controls) follows it too.
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101719' : '#f7f7f4')
  }, [dark])
  useEffect(() => { localStorage.setItem('studyroom-reading-scale', String(fontScale)) }, [fontScale])
  // Closing the drawer returns focus to the menu button instead of leaving it off-canvas.
  useEffect(() => {
    if (!drawerMode || mobileMenu) return
    const active = document.activeElement
    if (active && document.querySelector('.sidebar')?.contains(active)) menuButtonRef.current?.focus()
  }, [mobileMenu, drawerMode])
  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchTrack('all')
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        if (document.querySelector('.search-modal')) {
          setSearchOpen(false)
          searchTriggerRef.current?.focus()
        }
        setMobileMenu(false)
      }
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0]
  const activeSubject = subjectById.get(activeSubjectId) ?? subjects[0]
  const activeTrack = trackById.get(activeTrackId) ?? tracks[0]

  // Browser back/forward moves between routes. Same-path hash changes are left
  // alone so in-page heading anchors keep native scroll restoration.
  useEffect(() => {
    const handlePop = () => {
      if (window.location.pathname === currentPath.current) return
      applyRoute(routeFromPath(window.location.pathname))
      currentPath.current = window.location.pathname
      setSearchOpen(false)
      setMobileMenu(false)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  // Unknown entry URLs fall back to home; a deep-linked heading is restored
  // once the lesson has rendered.
  useEffect(() => {
    if (initialRoute.view === 'home' && !isRootPath(window.location.pathname)) {
      history.replaceState(null, '', routeHref.home)
      currentPath.current = window.location.pathname
    }
    const hash = window.location.hash.slice(1)
    if (!hash) return
    // Fonts can shift the page after first paint; reveal once layout settles.
    const reveal = () => document.getElementById(hash)?.scrollIntoView()
    requestAnimationFrame(reveal)
    document.fonts?.ready.then(reveal)
  }, [])

  useEffect(() => {
    document.title = view === 'lesson'
      ? `${activeLesson.title} · ${activeSubject.name} · Studyroom`
      : view === 'subject'
        ? `${activeSubject.name} · ${activeTrack.name} · Studyroom`
        : view === 'path'
          ? `${activeTrack.name} · Studyroom`
          : 'Studyroom - Class 11, Class 12 and Certification'
  }, [view, activeId, activeSubjectId, activeTrackId])

  const filteredLessons = useMemo(() => {
    const term = query.trim().toLowerCase()
    return lessons
      .map((lesson) => {
        const subject = subjectById.get(lesson.subjectId)
        const track = trackById.get(lesson.track)
        const title = `${lesson.title} ${lesson.chapterTitle} ${lesson.subject} ${subject?.name ?? ''} ${track?.name ?? ''}`.toLowerCase()
        const body = (content[`./${lesson.file}`] ?? '').replace(/[`*_#>[\]()]/g, ' ').toLowerCase()
        const rank = title.includes(term) ? 0 : body.includes(term) ? 1 : 2
        return { lesson, rank }
      })
      .filter(({ lesson, rank }) => (searchTrack === 'all' || lesson.track === searchTrack) && (!term || rank < 2))
      .sort((a, b) => a.rank - b.rank)
      .map(({ lesson }) => lesson)
  }, [query, searchTrack])

  const markdown = content[`./${activeLesson.file}`] ?? ''

  useEffect(() => { setSearchIndex(0) }, [query, searchOpen, searchTrack])

  // Keep the keyboard cursor visible while arrowing through a long result list.
  useEffect(() => {
    if (!searchOpen) return
    const id = filteredLessons[searchIndex]?.id
    if (id) document.getElementById(`search-${id}`)?.scrollIntoView({ block: 'nearest' })
  }, [searchOpen, searchIndex, filteredLessons])

  function applyRoute(route: Route) {
    setView(route.view)
    if (route.view === 'lesson') {
      const lesson = lessons.find((item) => item.id === route.lessonId)
      if (!lesson) return
      setActiveId(lesson.id)
      setActiveSubjectId(lesson.subjectId)
      setActiveTrackId(lesson.track)
      setLastLessonId(lesson.id)
      localStorage.setItem('studyroom-last-lesson', lesson.id)
    } else if (route.view === 'subject') {
      const subject = subjectById.get(route.subjectId)
      if (!subject) return
      setActiveSubjectId(subject.id)
      setActiveTrackId(subject.track)
    } else if (route.view === 'path') {
      setActiveTrackId(route.trackId)
      const first = subjects.find((subject) => subject.track === route.trackId)
      if (first) setActiveSubjectId(first.id)
    }
  }

  function go(route: Route, replace = false) {
    applyRoute(route)
    const href = hrefForRoute(route)
    if (replace) history.replaceState(null, '', href)
    else history.pushState(null, '', href)
    currentPath.current = window.location.pathname
    setMobileMenu(false)
    window.scrollTo(0, 0)
  }

  function openLesson(lesson: Lesson) {
    go({ view: 'lesson', lessonId: lesson.id })
    setSearchOpen(false)
    setQuery('')
  }
  function openPath(trackId: TrackId) { go({ view: 'path', trackId }) }
  function openSubject(subjectId: string) { if (subjectById.has(subjectId)) go({ view: 'subject', subjectId }) }
  function goHome() { go({ view: 'home' }) }
  function toggleComplete() { setCompleted((items) => items.includes(activeId) ? items.filter((id) => id !== activeId) : [...items, activeId]) }
  function goTo(offset: number) {
    const siblings = lessons.filter((lesson) => lesson.subjectId === activeLesson.subjectId)
    const index = siblings.findIndex((lesson) => lesson.id === activeId)
    const next = siblings[index + offset]
    if (next) openLesson(next)
  }
  function openSearch() {
    setSearchTrack('all')
    setSearchOpen(true)
  }
  function closeSearch() {
    setSearchOpen(false)
    searchTriggerRef.current?.focus()
  }
  const readingScaleIndex = readingScales.indexOf(fontScale as typeof readingScales[number])
  function changeReadingSize(direction: -1 | 1) { setFontScale(readingScales[Math.max(0, Math.min(readingScales.length - 1, readingScaleIndex + direction))]) }

  return <div className="app-shell" style={{ '--reading-scale': fontScale } as CSSProperties}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    {mobileMenu && <div className="sidebar-backdrop" onClick={() => setMobileMenu(false)} aria-hidden="true" />}
    <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`} inert={drawerMode && !mobileMenu}>
      <a className="brand" href={routeHref.home} onClick={followLink(goHome)} aria-label="Studyroom home">
        <span className="brand-mark">s.</span>
        <span>studyroom<span className="brand-dot">.</span></span>
      </a>
      <div className="sidebar-label">YOUR CLASSROOM</div>
      <a className={`nav-link ${view === 'home' ? 'selected' : ''}`} href={routeHref.home} onClick={followLink(goHome)}>
        <span className="nav-icon">⌂</span> Overview <span className="nav-arrow">⌘ 1</span>
      </a>
      <nav className="subject-nav" aria-label="Paths and subjects">
        {tracks.map((track) => <div className="track-group" key={track.id}>
          <div className="sidebar-label track-label">{track.label}</div>
          {subjects.filter((subject) => subject.track === track.id).map((subject) => {
            const subjectChapters = chaptersBySubject.get(subject.id) ?? []
            const subjectLessons = lessons.filter((lesson) => lesson.subjectId === subject.id)
            const liveIds = new Set(subjectLessons.map((lesson) => lesson.chapter))
            const liveChapters = subjectChapters.filter((chapter) => liveIds.has(chapter.id))
            const isCurrent = activeSubjectId === subject.id
            const chapter = isCurrent
              ? liveChapters.find((item) => item.id === activeLesson.chapter) ?? liveChapters[0] ?? subjectChapters[0]
              : undefined
            const chapterLessons = chapter ? lessonsByChapter.get(chapter.id) ?? [] : []
            return <div className="subject-group" key={subject.id}>
              <a
                aria-expanded={isCurrent && subjectChapters.length > 0}
                href={routeHref.subject(subject.id)}
                onClick={followLink(() => openSubject(subject.id))}
                className={`subject-link ${isCurrent ? 'subject-current' : ''}`}
              >
                <span className={`subject-dot ${subject.color}`}>{subject.icon}</span>
                <span className="subject-name">{subject.name}</span>
                <span className={`subject-count ${liveChapters.length === 0 ? 'subject-planned' : ''}`}>{subject.plannedChapters ? String(subject.plannedChapters).padStart(2, '0') : 'Soon'}</span>
                {subjectChapters.length > 0 && <span className="subject-caret">{isCurrent ? '⌄' : '›'}</span>}
              </a>
              {isCurrent && chapter && <div className="chapter-nav" role="group" aria-label={`${subject.name} chapters`}>
                <a
                  className={`chapter-heading ${view === 'lesson' && activeLesson.chapter === chapter.id ? 'chapter-current' : ''}`}
                  href={chapterLessons[0] ? routeHref.lesson(chapterLessons[0].id) : routeHref.subject(subject.id)}
                  onClick={followLink(() => {
                    const first = chapterLessons[0]
                    if (first) openLesson(first)
                    else openSubject(subject.id)
                  })}
                >
                  <span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>
                  {chapter.title}
                </a>
                {view === 'lesson' && activeLesson.chapter === chapter.id && chapterLessons.map((lesson) => <a
                  key={lesson.id}
                  className={`chapter-link ${lesson.id === activeId ? 'chapter-active' : ''}`}
                  href={routeHref.lesson(lesson.id)}
                  onClick={followLink(() => openLesson(lesson))}
                >
                  <span className="chapter-line" />{lesson.title}
                </a>)}
                <a className="chapter-more" href={routeHref.subject(subject.id)} onClick={followLink(() => openSubject(subject.id))}>
                  All chapters <span>→</span>
                </a>
              </div>}
            </div>
          })}
        </div>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="streak-card">
          <div className="streak-top"><span>✳</span><span className="streak-days">{completed.length ? '1' : '0'} day streak</span></div>
          <p>A little progress each day adds up.</p>
          <div className="streak-bars">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <div key={index} className="streak-day"><span className={index < completed.length ? 'streak-filled' : ''} />{day}</div>)}</div>
        </div>
        <div className="profile-row">
          <span className="avatar">S</span>
          <span className="profile-name">Learner account<small>{activeTrack.name} · {activeTrack.id === 'certification' ? 'Developer track' : 'Science'}</small></span>
          <span className="profile-menu" aria-hidden="true">···</span>
        </div>
      </div>
    </aside>
    <main className="main-panel" id="main-content" tabIndex={-1}>
      <header className="topbar">
        <button
          ref={menuButtonRef}
          className="mobile-menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenu}
        >☰</button>
        <div className="breadcrumb">
          {view === 'home'
            ? <span className="crumb-root">All paths</span>
            : <>
              <a className="crumb-root" href={routeHref.path(activeTrack.id)} onClick={followLink(() => openPath(activeTrack.id))}>{activeTrack.name}</a>
              {view !== 'path' && <>
                <span className="crumb-divider">/</span>
                <span>{activeSubject.name}</span>
              </>}
              {view === 'lesson' && <>
                <span className="crumb-divider">/</span>
                <span className="crumb-current">{activeLesson.chapterTitle}</span>
              </>}
            </>}
        </div>
        <div className="top-actions">
          <button ref={searchTriggerRef} className="search-trigger" onClick={openSearch}>
            <span>⌕</span> Search anything <kbd>⌘ K</kbd>
          </button>
          <div className="font-controls" aria-label="Reading size">
            <button className="font-size-button" onClick={() => changeReadingSize(-1)} disabled={readingScaleIndex === 0} aria-label="Decrease reading size">A−</button>
            <span className="reading-label" aria-live="polite">{Math.round(fontScale * 100)}%</span>
            <button className="font-size-button" onClick={() => changeReadingSize(1)} disabled={readingScaleIndex === readingScales.length - 1} aria-label="Increase reading size">A+</button>
          </div>
          <button className="icon-button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setDark(!dark)}>{dark ? '☼' : '◐'}</button>
        </div>
      </header>
      <div className="page-content">
        {view === 'home'
          ? <Home activeTrackId={activeTrackId} lastLessonId={lastLessonId} completed={completed} openPath={openPath} openLesson={openLesson} />
          : view === 'path'
            ? <PathPage trackId={activeTrackId} completed={completed} openSubject={openSubject} onBack={goHome} />
            : view === 'subject'
              ? <SubjectPage subjectId={activeSubjectId} completed={completed} openLesson={openLesson} onBack={() => openPath(activeTrackId)} />
              : <LessonPage lesson={activeLesson} markdown={markdown} completed={completed.includes(activeId)} onComplete={toggleComplete} onBack={() => openSubject(activeLesson.subjectId)} onNavigate={goTo} />}
      </div>
    </main>
    {searchOpen && createPortal(<div className="search-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) closeSearch() }}>
      <div
        className="search-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Search lessons"
        onKeyDown={(e) => {
          if (e.key !== 'Tab') return
          const items = e.currentTarget.querySelectorAll<HTMLElement>('input, button:not([disabled]), [href]')
          if (!items.length) return
          const first = items[0]
          const last = items[items.length - 1]
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
        }}
      >
        <div className="search-input-row">
          <span>⌕</span>
          <input
            autoFocus
            placeholder="Search all paths, subjects and chapters..."
            value={query}
            aria-activedescendant={filteredLessons[searchIndex] ? `search-${filteredLessons[searchIndex].id}` : undefined}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeSearch()
              if (e.key === 'ArrowDown') { e.preventDefault(); setSearchIndex((index) => Math.min(index + 1, filteredLessons.length - 1)) }
              if (e.key === 'ArrowUp') { e.preventDefault(); setSearchIndex((index) => Math.max(index - 1, 0)) }
              if (e.key === 'Enter' && filteredLessons[searchIndex]) openLesson(filteredLessons[searchIndex])
            }}
          />
          <kbd>ESC</kbd>
        </div>
        <div className="search-filters" aria-label="Filter by path">
          <button className={`search-filter ${searchTrack === 'all' ? 'search-filter-active' : ''}`} onClick={() => setSearchTrack('all')}>All paths</button>
          {tracks.map((track) => <button
            key={track.id}
            className={`search-filter ${searchTrack === track.id ? 'search-filter-active' : ''}`}
            onClick={() => setSearchTrack(track.id)}
          >{track.name}</button>)}
        </div>
        <div className="search-caption">{query ? `${filteredLessons.length} RESULT${filteredLessons.length === 1 ? '' : 'S'}` : 'QUICK JUMP'}</div>
        <div className="search-results">
          {filteredLessons.length ? filteredLessons.map((lesson, index) => {
            const subject = subjectById.get(lesson.subjectId)
            const track = trackById.get(lesson.track)
            return <a
              id={`search-${lesson.id}`}
              key={lesson.id}
              href={routeHref.lesson(lesson.id)}
              className={`search-result ${index === searchIndex ? 'search-result-active' : ''}`}
              onMouseMove={() => setSearchIndex(index)}
              onClick={followLink(() => openLesson(lesson))}
            >
              <span className="result-icon">{subject?.icon ?? '◉'}</span>
              <span>{lesson.title}<small>{track?.name} · {subject?.name} · {lesson.chapterTitle}</small></span>
              <span className="result-time">{lesson.duration} min ↗</span>
            </a>
          }) : <div className="empty-search">No lessons found. Try a different search or path.</div>}
        </div>
        <div className="search-footer">↑↓ to navigate <span>↵ to open</span></div>
      </div>
    </div>, document.body)}
  </div>
}

function Home({ activeTrackId, lastLessonId, completed, openPath, openLesson }: {
  activeTrackId: TrackId
  lastLessonId: string
  completed: string[]
  openPath: (trackId: TrackId) => void
  openLesson: (lesson: Lesson) => void
}) {
  const activeTrack = trackById.get(activeTrackId) ?? tracks[0]
  const activePathLessons = lessons.filter((lesson) => lesson.track === activeTrackId)
  const lastLesson = lastLessonId ? lessons.find((lesson) => lesson.id === lastLessonId) : undefined
  const continueLesson = lastLesson ?? activePathLessons.find((lesson) => !completed.includes(lesson.id)) ?? activePathLessons[0]
  const continueSubject = continueLesson ? subjectById.get(continueLesson.subjectId) : undefined
  const continueTrack = continueLesson ? trackById.get(continueLesson.track) : undefined
  const completedInPath = activePathLessons.filter((lesson) => completed.includes(lesson.id)).length
  const pathProgress = activePathLessons.length ? Math.round(completedInPath / activePathLessons.length * 100) : 0
  const nextLesson = activePathLessons.find((lesson) => !completed.includes(lesson.id))

  return <div className="home-view">
    <div className="welcome-line">
      <span className="welcome-pill"><span /> YOUR LEARNING SPACE</span>
      <span className="welcome-date">{new Intl.DateTimeFormat('en-IN', { weekday: 'long', month: 'long', day: '2-digit' }).format(new Date()).toUpperCase()}</span>
    </div>
    <section className="welcome-heading">
      <div>
        <h1>Make room for<br /><em>big ideas.</em></h1>
        <p>Class 11, Class 12, and a professional certification.<br className="desktop-break" /> One calm place to learn. Pick up where you left off.</p>
      </div>
      <div className="welcome-illustration" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="illustration-sun">✳</div>
        <div className="illustration-book">∿<small>F = ma</small></div>
        <span className="spark spark-one">✦</span><span className="spark spark-two">·</span><span className="spark spark-three">✳</span>
      </div>
    </section>

    <div className="learning-grid">
      <section className="continue-section">
        <div className="section-heading compact"><div><span className="eyebrow">KEEP THE MOMENTUM</span><h2>Continue learning</h2></div></div>
        <a
          className="continue-card"
          href={continueLesson ? routeHref.lesson(continueLesson.id) : routeHref.path(activeTrackId)}
          onClick={followLink(() => continueLesson ? openLesson(continueLesson) : openPath(activeTrackId))}
        >
          <div className="continue-art">
            <div className="ring ring-a" /><div className="ring ring-b" />
            <span className="art-symbol">{continueSubject?.icon ?? activeTrack.icon}</span>
            <span className="art-caption">{continueSubject?.short ?? activeTrack.short}</span>
            <span className="art-star">✳</span>
          </div>
          <div className="continue-info">
            <div className="continue-meta">
              <span className={`mini-dot ${continueSubject?.name.toLowerCase() ?? 'ccdv-f'}`} />
              {continueLesson && continueTrack && continueSubject
                ? <>{continueTrack.name.toUpperCase()} <span className="meta-divider">·</span> {continueSubject.name.toUpperCase()}</>
                : <>{activeTrack.name.toUpperCase()} <span className="meta-divider">·</span> IN PRODUCTION</>}
            </div>
            <h3>{continueLesson ? continueLesson.title : `${activeTrack.name} is taking shape`}</h3>
            <p>{continueLesson
              ? `A ${continueLesson.duration}-minute lesson to build your understanding, one idea at a time.`
              : 'The chapter map is ready. Lessons will appear here as they are written.'}</p>
            <div className="continue-bottom">
              <span className="resume-button">{continueLesson ? (lastLesson ? 'Resume lesson' : 'Start lesson') : 'Preview syllabus'} <span>→</span></span>
              <span className="lesson-time">{continueLesson ? <>◷ {continueLesson.duration} min</> : 'Chapter by chapter'}</span>
            </div>
          </div>
        </a>
      </section>
      <aside className="weekly-card">
        <div className="weekly-top">
          <div><span className="eyebrow">YOUR RHYTHM</span><h3>A steady pace<br />goes a long way.</h3></div>
          <span className="weekly-icon">↗</span>
        </div>
        <p>{activePathLessons.length
          ? <>You’ve completed <strong>{completedInPath} of {activePathLessons.length}</strong> live lessons in {activeTrack.name}.</>
          : <>{activeTrack.name} is being written chapter by chapter. The chapter map is ready.</>}</p>
        <div className="weekly-progress">
          <div className="weekly-progress-header"><span>PATH PROGRESS</span><strong>{activePathLessons.length ? `${pathProgress}%` : 'Soon'}</strong></div>
          <span className="progress-track"><span style={{ width: `${pathProgress}%` }} /></span>
        </div>
        <div className="weekly-note"><span>✳</span> {nextLesson ? `Next up: ${nextLesson.title}` : activePathLessons.length ? 'Start with one lesson today.' : 'First chapter in production.'}</div>
      </aside>
    </div>

    <div className="section-heading"><div><span className="eyebrow">YOUR PATHS</span><h2>Choose a path</h2></div></div>
    <div className="subject-cards">
      {tracks.map((track) => {
        const pathChapters = curriculum.filter((chapter) => chapter.track === track.id)
        const pathLessons = lessons.filter((lesson) => lesson.track === track.id)
        const liveChapters = pathChapters.filter((chapter) => pathLessons.some((lesson) => lesson.chapter === chapter.id))
        const completedCount = pathLessons.filter((lesson) => completed.includes(lesson.id)).length
        const progress = pathLessons.length ? Math.round(completedCount / pathLessons.length * 100) : null
        const pathSubjects = subjects.filter((subject) => subject.track === track.id)
        const liveSubjects = pathSubjects.filter((subject) => lessons.some((lesson) => lesson.subjectId === subject.id)).length
        const subjectLine = pathSubjects
          .map((subject) => (liveSubjects > 0 && !lessons.some((lesson) => lesson.subjectId === subject.id) ? `${subject.name} (soon)` : subject.name))
          .join(' · ')
        return <a
          key={track.id}
          href={routeHref.path(track.id)}
          className={`course-card path-card card-${track.color} ${activeTrackId === track.id ? 'card-selected' : ''}`}
          onClick={followLink(() => openPath(track.id))}
        >
          <div className="course-top"><span className="course-icon">{track.icon}</span><span className="course-arrow">↗</span></div>
          <div className="course-name">
            <span className="course-title">{track.name}</span>
            <span className="chapter-total">{liveChapters.length ? `${liveChapters.length} of ${pathChapters.length} live` : `${pathChapters.length} planned`}</span>
          </div>
          <p>{track.description}</p>
          <div className="path-subject-line">{subjectLine}</div>
          <div className="course-progress">
            <span className="progress-track"><span style={{ width: `${progress ?? 0}%` }} /></span>
            <span>{progress === null ? 'In production' : `${progress}%`}</span>
          </div>
        </a>
      })}
    </div>
  </div>
}

function PathPage({ trackId, completed, openSubject, onBack }: {
  trackId: TrackId
  completed: string[]
  openSubject: (subjectId: string) => void
  onBack: () => void
}) {
  const track = trackById.get(trackId) ?? tracks[0]
  const pathChapters = curriculum.filter((chapter) => chapter.track === trackId)
  const pathLessons = lessons.filter((lesson) => lesson.track === trackId)
  const liveChapters = pathChapters.filter((chapter) => pathLessons.some((lesson) => lesson.chapter === chapter.id))
  const completedCount = pathLessons.filter((lesson) => completed.includes(lesson.id)).length
  const pathSubjects = subjects.filter((subject) => subject.track === trackId)

  return <div className="subject-page path-page">
    <a className="back-link" href={routeHref.home} onClick={followLink(onBack)}>← <span>All paths</span></a>
    <div className="subject-page-heading">
      <span className={`subject-page-icon ${track.color}`}>{track.icon}</span>
      <div><span className="eyebrow">{track.label} · PATH</span><h1>{track.name}</h1><p>{track.description}</p></div>
    </div>
    <div className="subject-progress-summary">
      <span>{liveChapters.length} of {pathChapters.length} chapters live</span>
      <span>{pathLessons.length} lessons</span>
      <span>{completedCount} completed</span>
    </div>
    <div className={`subject-cards path-subject-cards ${pathSubjects.length === 1 ? 'path-subject-cards-single' : ''}`}>
      {pathSubjects.map((subject) => {
        const chapters = chaptersBySubject.get(subject.id) ?? []
        const subjectLessons = lessons.filter((lesson) => lesson.subjectId === subject.id)
        const liveIds = new Set(subjectLessons.map((lesson) => lesson.chapter))
        const subjectLive = chapters.filter((chapter) => liveIds.has(chapter.id))
        const subjectCompleted = subjectLessons.filter((lesson) => completed.includes(lesson.id)).length
        const progress = subjectLessons.length ? Math.round(subjectCompleted / subjectLessons.length * 100) : null
        return <a
          key={subject.id}
          href={routeHref.subject(subject.id)}
          className={`course-card card-${subject.color}`}
          onClick={followLink(() => openSubject(subject.id))}
        >
          <div className="course-top"><span className="course-icon">{subject.icon}</span><span className="course-arrow">↗</span></div>
          <div className="course-name">
            <span className="course-title">{subject.name}</span>
            <span className="chapter-total">{subjectLive.length ? `${subjectLive.length} of ${chapters.length} live` : `${chapters.length} planned`}</span>
          </div>
          <p>{subject.description}</p>
          <div className="course-progress">
            <span className="progress-track"><span style={{ width: `${progress ?? 0}%` }} /></span>
            <span>{progress === null ? 'In production' : `${progress}%`}</span>
          </div>
        </a>
      })}
    </div>
  </div>
}

function StudyBlock({ type = 'concept', title, children }: { type?: string; title?: string; children?: ReactNode }) {
  const labels: Record<string, string> = { concept: 'Key concept', example: 'Worked example', check: 'Quick check', mistake: 'Common mistake', recap: 'Remember' }
  return <aside className={`learning-block learning-block-${type}`}><span className="learning-block-label">{title || labels[type] || 'Study note'}</span><div>{children}</div></aside>
}

function SubjectPage({ subjectId, completed, openLesson, onBack }: {
  subjectId: string
  completed: string[]
  openLesson: (lesson: Lesson) => void
  onBack: () => void
}) {
  const subject = subjectById.get(subjectId) ?? subjects[0]
  const track = trackById.get(subject.track) ?? tracks[0]
  const chapters = chaptersBySubject.get(subjectId) ?? []
  const subjectLessons = lessons.filter((lesson) => lesson.subjectId === subjectId)
  const liveIds = new Set(subjectLessons.map((lesson) => lesson.chapter))
  const liveChapters = chapters.filter((chapter) => liveIds.has(chapter.id))
  const completedCount = subjectLessons.filter((lesson) => completed.includes(lesson.id)).length

  return <div className="subject-page">
    <a className="back-link" href={routeHref.path(track.id)} onClick={followLink(onBack)}>← <span>{track.name}</span></a>
    <div className="subject-page-heading">
      <span className={`subject-page-icon ${subject.color}`}>{subject.icon}</span>
      <div><span className="eyebrow">{track.label} · SUBJECT</span><h1>{subject.name}</h1><p>{subject.description}</p></div>
    </div>
    {chapters.length ? <>
      <div className="subject-progress-summary">
        <span>{liveChapters.length} of {chapters.length} chapters live</span>
        <span>{subjectLessons.length} lessons</span>
        <span>{completedCount} completed</span>
      </div>
      <div className="chapter-catalog">{chapters.map((chapter) => {
        const chapterLessons = subjectLessons.filter((lesson) => lesson.chapter === chapter.id)
        const isLive = chapterLessons.length > 0
        return <section className={`catalog-chapter ${isLive ? '' : 'catalog-chapter-planned'}`} key={chapter.id}>
          <div className="catalog-chapter-heading">
            <span className="catalog-number">{String(chapter.number).padStart(2, '0')}</span>
            <div>
              <span className="eyebrow">CHAPTER {chapter.number}{isLive ? '' : ' · PLANNED'}</span>
              <h2>{chapter.title}</h2>
              <p>{isLive ? `${chapterLessons.length} ${chapterLessons.length === 1 ? 'lesson' : 'lessons'} live` : `${chapter.plannedLessons} lessons planned`}</p>
            </div>
          </div>
          {isLive
            ? <div className="catalog-lessons">{chapterLessons.map((lesson) => <a key={lesson.id} className="catalog-lesson" href={routeHref.lesson(lesson.id)} onClick={followLink(() => openLesson(lesson))}>
              <span className="catalog-lesson-status">{completed.includes(lesson.id) ? '✓' : '○'}</span>
              <span className="catalog-lesson-title">{lesson.title}<small>{lesson.duration} min · {completed.includes(lesson.id) ? 'Completed' : 'Ready to study'}</small></span>
              <span className="catalog-lesson-arrow">→</span>
            </a>)}</div>
            : <div className="catalog-planned-note">Lessons for this chapter are being written.</div>}
        </section>
      })}</div>
    </> : <div className="subject-coming-soon"><h2>Lessons are on the way</h2><p>This subject’s chapter list will appear here as lessons are added.</p></div>}
  </div>
}

function LessonPage({ lesson, markdown, completed, onComplete, onBack, onNavigate }: { lesson: Lesson; markdown: string; completed: boolean; onComplete: () => void; onBack: () => void; onNavigate: (offset: number) => void }) {
  const headings = useMemo(() => headingsFromMarkdown(markdown), [markdown])
  const [activeHeading, setActiveHeading] = useState(headings[0]?.id)
  // On phones the study rail becomes two collapsed rows so the prose starts near the top.
  const compactRail = useMediaQuery('(max-width: 680px)')
  const [tocOpen, setTocOpen] = useState(false)
  const [objectivesOpen, setObjectivesOpen] = useState(false)
  const track = trackById.get(lesson.track)
  const siblings = lessons.filter((item) => item.subjectId === lesson.subjectId)
  const siblingIndex = siblings.findIndex((item) => item.id === lesson.id)
  const previousLesson = siblings[siblingIndex - 1]
  const nextLesson = siblings[siblingIndex + 1]

  useEffect(() => {
    setActiveHeading(headings[0]?.id)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setActiveHeading(visible.target.id)
    }, { rootMargin: '-18% 0px -68% 0px' })
    headings.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [headings])

  return <article className="lesson-page">
    <a className="back-link" href={routeHref.subject(lesson.subjectId)} onClick={followLink(onBack)}>← <span>All lessons</span></a>
    <div className="lesson-kicker">
      <span className="lesson-subject-dot">◉</span>
      <span>{track?.name.toUpperCase()}</span>
      <span aria-hidden="true">·</span>
      <span>{lesson.subject.toUpperCase()}</span>
      <span aria-hidden="true">·</span>
      <span>{lesson.chapterTitle.toUpperCase()}</span>
    </div>
    <div className="lesson-title-row">
      <div>
        <h1>{lesson.title}</h1>
        <p className="lesson-deck">A clear, practical introduction. Learn the idea, see it at work, then try it yourself.</p>
      </div>
      <button className={`complete-button ${completed ? 'is-complete' : ''}`} onClick={onComplete}>{completed ? '✓ Completed' : '○ Mark complete'}</button>
    </div>
    <div className="lesson-meta"><span>◷ {lesson.duration} min read</span><span>·</span><span>Updated for your learning path</span></div>
    <div className="lesson-layout">
      <aside className="lesson-aside">
        <nav className={`toc-card ${compactRail && tocOpen ? 'is-open' : ''}`} aria-label="In this lesson">
          {compactRail
            ? <button className="rail-toggle" aria-expanded={tocOpen} onClick={() => setTocOpen(!tocOpen)}>
              <span className="eyebrow">IN THIS LESSON</span>
              <span className="rail-meta">
                <span className="rail-count">{headings.length}</span>
                <span className="rail-chevron" aria-hidden="true">⌄</span>
              </span>
            </button>
            : <span className="eyebrow">IN THIS LESSON</span>}
          <div className="rail-body">
            {headings.map((heading) => <a
              key={heading.id}
              className={`${heading.level === 3 ? 'toc-subheading' : ''} ${activeHeading === heading.id ? 'toc-active' : ''}`}
              href={`#${heading.id}`}
              onClick={() => { setActiveHeading(heading.id); setTocOpen(false) }}
            >{heading.label}</a>)}
          </div>
        </nav>
        <div className={`objectives-card ${compactRail && objectivesOpen ? 'is-open' : ''}`}>
          {compactRail
            ? <button className="rail-toggle" aria-expanded={objectivesOpen} onClick={() => setObjectivesOpen(!objectivesOpen)}>
              <span className="eyebrow">YOU’LL BE ABLE TO</span>
              <span className="rail-meta"><span className="rail-chevron" aria-hidden="true">⌄</span></span>
            </button>
            : <span className="eyebrow">YOU’LL BE ABLE TO</span>}
          <div className="rail-body">
            {lesson.objectives.map((objective) => <p key={objective}><span>✓</span>{objective}</p>)}
          </div>
        </div>
      </aside>
      <div className="lesson-body">
        <div className="lesson-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeKatex, rehypeLessonIds]}
            components={{
              'learning-block': StudyBlock,
              h2: ({ children, ...props }: { children?: ReactNode; id?: string; className?: string }) => <h2 {...props}>{cleanHeading(String(children))}</h2>,
              h3: ({ children, ...props }: { children?: ReactNode; id?: string; className?: string }) => <h3 {...props}>{cleanHeading(String(children))}</h3>,
            } as unknown as Components}
          >{markdown || '# Lesson coming soon\n\nThis lesson is being prepared.'}</ReactMarkdown>
        </div>
        <div className="lesson-actions">
          <button className={`complete-button ${completed ? 'is-complete' : ''}`} onClick={onComplete}>{completed ? '✓ Completed' : '✓ Mark lesson complete'}</button>
          <span>Nice work showing up today.</span>
        </div>
        <div className="lesson-pagination">
          {previousLesson
            ? <a href={routeHref.lesson(previousLesson.id)} onClick={followLink(() => onNavigate(-1))}>← <span>Previous lesson</span></a>
            : <span />}
          {nextLesson
            ? <a href={routeHref.lesson(nextLesson.id)} onClick={followLink(() => onNavigate(1))}><span>Next lesson</span> →</a>
            : <span />}
        </div>
      </div>
    </div>
  </article>
}

export default App
