import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
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
import 'katex/dist/katex.min.css'

type View = 'home' | 'path' | 'subject' | 'lesson'
type Heading = { id: string; label: string; level: 2 | 3 }
const readingScales = [1, 1.2, 1.35, 1.5] as const
const defaultReadingScale = 1.2

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
  const [view, setView] = useState<View>('home')
  const [activeId, setActiveId] = useState(lessons[0].id)
  const [activeTrackId, setActiveTrackId] = useState<TrackId>('class-11')
  const [activeSubjectId, setActiveSubjectId] = useState('class-11-physics')
  const [lastLessonId, setLastLessonId] = useState(() => localStorage.getItem('studyroom-last-lesson') ?? '')
  const [completed, setCompleted] = useState<string[]>(() => saved('studyroom-completed', []))
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchIndex, setSearchIndex] = useState(0)
  const [searchTrack, setSearchTrack] = useState<TrackId | 'all'>('all')
  const [dark, setDark] = useState(() => localStorage.getItem('studyroom-theme') === 'dark')
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

  useEffect(() => { localStorage.setItem('studyroom-completed', JSON.stringify(completed)) }, [completed])
  useEffect(() => { localStorage.setItem('studyroom-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { localStorage.setItem('studyroom-reading-scale', String(fontScale)) }, [fontScale])
  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchTrack('all')
        setSearchOpen(true)
      }
      if (event.key === 'Escape') { setSearchOpen(false); setMobileMenu(false) }
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0]
  const activeSubject = subjectById.get(activeSubjectId) ?? subjects[0]
  const activeTrack = trackById.get(activeTrackId) ?? tracks[0]

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

  function openLesson(lesson: Lesson) {
    setActiveId(lesson.id)
    setActiveSubjectId(lesson.subjectId)
    setActiveTrackId(lesson.track)
    setLastLessonId(lesson.id)
    localStorage.setItem('studyroom-last-lesson', lesson.id)
    setView('lesson')
    setSearchOpen(false)
    setQuery('')
    setMobileMenu(false)
    window.scrollTo(0, 0)
  }
  function openPath(trackId: TrackId) {
    const first = subjects.find((subject) => subject.track === trackId)
    setActiveTrackId(trackId)
    if (first) setActiveSubjectId(first.id)
    setView('path')
    setMobileMenu(false)
    window.scrollTo(0, 0)
  }
  function openSubject(subjectId: string) {
    const subject = subjectById.get(subjectId)
    if (!subject) return
    setActiveSubjectId(subjectId)
    setActiveTrackId(subject.track)
    setView('subject')
    setMobileMenu(false)
    window.scrollTo(0, 0)
  }
  function goHome() { setView('home'); setMobileMenu(false); window.scrollTo(0, 0) }
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
  const readingScaleIndex = readingScales.indexOf(fontScale as typeof readingScales[number])
  function changeReadingSize(direction: -1 | 1) { setFontScale(readingScales[Math.max(0, Math.min(readingScales.length - 1, readingScaleIndex + direction))]) }

  return <div className={`app-shell ${dark ? 'dark' : ''}`} style={{ '--reading-scale': fontScale } as CSSProperties}>
    {mobileMenu && <div className="sidebar-backdrop" onClick={() => setMobileMenu(false)} aria-hidden="true" />}
    <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`} inert={drawerMode && !mobileMenu}>
      <button className="brand" onClick={goHome} aria-label="Studyroom home">
        <span className="brand-mark">s.</span>
        <span>studyroom<span className="brand-dot">.</span></span>
      </button>
      <div className="sidebar-label">YOUR CLASSROOM</div>
      <button className={`nav-link ${view === 'home' ? 'selected' : ''}`} onClick={goHome}>
        <span className="nav-icon">⌂</span> Overview <span className="nav-arrow">⌘ 1</span>
      </button>
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
              <button
                aria-expanded={isCurrent && subjectChapters.length > 0}
                onClick={() => openSubject(subject.id)}
                className={`subject-link ${isCurrent ? 'subject-current' : ''}`}
              >
                <span className={`subject-dot ${subject.color}`}>{subject.icon}</span>
                <span className="subject-name">{subject.name}</span>
                <span className={`subject-count ${liveChapters.length === 0 ? 'subject-planned' : ''}`}>{subject.plannedChapters ? String(subject.plannedChapters).padStart(2, '0') : 'Soon'}</span>
                {subjectChapters.length > 0 && <span className="subject-caret">{isCurrent ? '⌄' : '›'}</span>}
              </button>
              {isCurrent && chapter && <div className="chapter-nav" role="group" aria-label={`${subject.name} chapters`}>
                <button
                  className={`chapter-heading ${view === 'lesson' && activeLesson.chapter === chapter.id ? 'chapter-current' : ''}`}
                  onClick={() => {
                    const first = chapterLessons[0]
                    if (first) openLesson(first)
                    else openSubject(subject.id)
                  }}
                >
                  <span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>
                  {chapter.title}
                </button>
                {view === 'lesson' && activeLesson.chapter === chapter.id && chapterLessons.map((lesson) => <button
                  key={lesson.id}
                  className={`chapter-link ${lesson.id === activeId ? 'chapter-active' : ''}`}
                  onClick={() => openLesson(lesson)}
                >
                  <span className="chapter-line" />{lesson.title}
                </button>)}
                <button className="chapter-more" onClick={() => openSubject(subject.id)}>
                  All chapters <span>→</span>
                </button>
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
    <main className="main-panel">
      <header className="topbar">
        <button
          className="mobile-menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenu}
        >☰</button>
        <div className="breadcrumb">
          {view === 'home'
            ? <span className="crumb-root">All paths</span>
            : <>
              <span className="crumb-root">{activeTrack.name}</span>
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
          <button className="search-trigger" onClick={openSearch}>
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
    {searchOpen && <div className="search-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}>
      <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search lessons">
        <div className="search-input-row">
          <span>⌕</span>
          <input
            autoFocus
            placeholder="Search all paths, subjects and chapters..."
            value={query}
            aria-activedescendant={filteredLessons[searchIndex] ? `search-${filteredLessons[searchIndex].id}` : undefined}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setSearchOpen(false)
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
        {filteredLessons.length ? filteredLessons.map((lesson, index) => {
          const subject = subjectById.get(lesson.subjectId)
          const track = trackById.get(lesson.track)
          return <button
            id={`search-${lesson.id}`}
            key={lesson.id}
            className={`search-result ${index === searchIndex ? 'search-result-active' : ''}`}
            onMouseMove={() => setSearchIndex(index)}
            onClick={() => openLesson(lesson)}
          >
            <span className="result-icon">{subject?.icon ?? '◉'}</span>
            <span>{lesson.title}<small>{track?.name} · {subject?.name} · {lesson.chapterTitle}</small></span>
            <span className="result-time">{lesson.duration} min ↗</span>
          </button>
        }) : <div className="empty-search">No lessons found. Try a different search or path.</div>}
        <div className="search-footer">↑↓ to navigate <span>↵ to open</span></div>
      </div>
    </div>}
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
        <button className="continue-card" onClick={() => continueLesson ? openLesson(continueLesson) : openPath(activeTrackId)}>
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
        </button>
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
        return <button
          key={track.id}
          className={`course-card path-card card-${track.color} ${activeTrackId === track.id ? 'card-selected' : ''}`}
          onClick={() => openPath(track.id)}
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
        </button>
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
    <button className="back-link" onClick={onBack}>← <span>All paths</span></button>
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
        return <button
          key={subject.id}
          className={`course-card card-${subject.color}`}
          onClick={() => openSubject(subject.id)}
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
        </button>
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
    <button className="back-link" onClick={onBack}>← <span>{track.name}</span></button>
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
            ? <div className="catalog-lessons">{chapterLessons.map((lesson) => <button key={lesson.id} className="catalog-lesson" onClick={() => openLesson(lesson)}>
              <span className="catalog-lesson-status">{completed.includes(lesson.id) ? '✓' : '○'}</span>
              <span className="catalog-lesson-title">{lesson.title}<small>{lesson.duration} min · {completed.includes(lesson.id) ? 'Completed' : 'Ready to study'}</small></span>
              <span className="catalog-lesson-arrow">→</span>
            </button>)}</div>
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
    <button className="back-link" onClick={onBack}>← <span>All lessons</span></button>
    <div className="lesson-kicker"><span className="lesson-subject-dot">◉</span>{track?.name.toUpperCase()} · {lesson.subject.toUpperCase()}<span>·</span>{lesson.chapterTitle.toUpperCase()}</div>
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
          <button onClick={() => onNavigate(-1)}>← <span>Previous lesson</span></button>
          <button onClick={() => onNavigate(1)}><span>Next lesson</span> →</button>
        </div>
      </div>
    </div>
  </article>
}

export default App
