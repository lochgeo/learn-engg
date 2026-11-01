import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { content, lessons, subjects, type Lesson } from './content/manifest'
import 'katex/dist/katex.min.css'

type View = 'home' | 'subject' | 'lesson'
type Heading = { id: string; label: string; level: 2 | 3 }
const readingScales = [1, 1.15, 1.3, 1.45] as const

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

function App() {
  const [view, setView] = useState<View>('home')
  const [activeId, setActiveId] = useState(lessons[0].id)
  const [activeSubject, setActiveSubject] = useState('Physics')
  const [completed, setCompleted] = useState<string[]>(() => saved('studyroom-completed', []))
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchIndex, setSearchIndex] = useState(0)
  const [dark, setDark] = useState(() => localStorage.getItem('studyroom-theme') === 'dark')
  const [fontScale, setFontScale] = useState(() => {
    const savedScale = Number(localStorage.getItem('studyroom-reading-scale'))
    return readingScales.includes(savedScale as typeof readingScales[number]) ? savedScale : 1
  })
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => { localStorage.setItem('studyroom-completed', JSON.stringify(completed)) }, [completed])
  useEffect(() => { localStorage.setItem('studyroom-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { localStorage.setItem('studyroom-reading-scale', String(fontScale)) }, [fontScale])
  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) }
      if (event.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0]
  const chapterGroups = useMemo(() => {
    const groups = new Map<string, { id: string; number: number; title: string; lessons: Lesson[] }>()
    for (const lesson of lessons) {
      const group = groups.get(lesson.chapter) ?? { id: lesson.chapter, number: lesson.chapterNumber, title: lesson.chapterTitle, lessons: [] }
      group.lessons.push(lesson)
      groups.set(lesson.chapter, group)
    }
    return [...groups.values()]
  }, [])
  const filteredLessons = useMemo(() => {
    const term = query.trim().toLowerCase()
    return lessons
      .map((lesson) => {
        const title = `${lesson.title} ${lesson.chapterTitle} ${lesson.subject}`.toLowerCase()
        const body = (content[`./${lesson.file}`] ?? '').replace(/[`*_#>[\]()]/g, ' ').toLowerCase()
        const rank = title.includes(term) ? 0 : body.includes(term) ? 1 : 2
        return { lesson, rank }
      })
      .filter(({ rank }) => !term || rank < 2)
      .sort((a, b) => a.rank - b.rank)
      .map(({ lesson }) => lesson)
  }, [query])
  const markdown = content[`./${activeLesson.file}`] ?? ''

  useEffect(() => { setSearchIndex(0) }, [query, searchOpen])

  function openLesson(lesson: Lesson) { setActiveId(lesson.id); setActiveSubject(lesson.subject); setView('lesson'); setSearchOpen(false); setQuery(''); setMobileMenu(false); window.scrollTo(0, 0) }
  function openSubject(subject: string) { setActiveSubject(subject); setView('subject'); setMobileMenu(false); window.scrollTo(0, 0) }
  function toggleComplete() { setCompleted((items) => items.includes(activeId) ? items.filter((id) => id !== activeId) : [...items, activeId]) }
  function goTo(offset: number) { const index = lessons.findIndex((lesson) => lesson.id === activeId); const next = lessons[index + offset]; if (next) openLesson(next) }
  const readingScaleIndex = readingScales.indexOf(fontScale as typeof readingScales[number])
  function changeReadingSize(direction: -1 | 1) { setFontScale(readingScales[Math.max(0, Math.min(readingScales.length - 1, readingScaleIndex + direction))]) }

  return <div className={`app-shell ${dark ? 'dark' : ''}`} style={{ '--reading-scale': fontScale } as CSSProperties}>
    <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`}>
      <button className="brand" onClick={() => setView('home')} aria-label="Studyroom home"><span className="brand-mark">s.</span><span>studyroom<span className="brand-dot">.</span></span></button>
      <div className="sidebar-label">YOUR CLASSROOM</div>
      <button className={`nav-link ${view === 'home' ? 'selected' : ''}`} onClick={() => setView('home')}><span className="nav-icon">⌂</span> Overview <span className="nav-arrow">⌘ 1</span></button>
      <div className="sidebar-label subject-label">SUBJECTS <button className="plus-button" aria-label="Add subject">＋</button></div>
      <nav className="subject-nav" aria-label="Subjects">
        {subjects.map((subject) => <div className="subject-group" key={subject.name}>
          <button aria-expanded={subject.name === 'Physics' && activeSubject === 'Physics'} onClick={() => { setActiveSubject(subject.name); setView('home'); setMobileMenu(false) }} className={`subject-link ${activeSubject === subject.name ? 'subject-current' : ''}`}>
            <span className={`subject-dot ${subject.color}`}>{subject.icon}</span><span className="subject-name">{subject.name}</span>
            <span className="subject-count">{subject.name === 'Physics' ? String(subject.chapters).padStart(2, '0') : 'Soon'}</span>
            {subject.name === 'Physics' && <span className="subject-caret">{activeSubject === 'Physics' ? '⌄' : '›'}</span>}
          </button>
          {subject.name === 'Physics' && activeSubject === 'Physics' && <div className="chapter-nav" role="group" aria-label="Physics chapters">
            {chapterGroups.map((chapter) => <div key={chapter.id}>
              <button className={`chapter-heading ${activeLesson.chapter === chapter.id && view === 'lesson' ? 'chapter-current' : ''}`} onClick={() => openLesson(chapter.lessons[0])}><span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>{chapter.title}</button>
              {activeLesson.chapter === chapter.id && chapter.lessons.map((lesson) => <button key={lesson.id} className={`chapter-link ${lesson.id === activeId && view === 'lesson' ? 'chapter-active' : ''}`} onClick={() => openLesson(lesson)}><span className="chapter-line" />{lesson.title}</button>)}
            </div>)}
          </div>}
        </div>)}
      </nav>
      <div className="sidebar-bottom"><div className="streak-card"><div className="streak-top"><span>✳</span><span className="streak-days">{completed.length ? '1' : '0'} day streak</span></div><p>A little progress each day adds up.</p><div className="streak-bars">{['M','T','W','T','F','S','S'].map((d,i)=><div key={i} className="streak-day"><span className={i < completed.length ? 'streak-filled' : ''} />{d}</div>)}</div></div><button className="profile-row"><span className="avatar">S</span><span className="profile-name">Student account<small>Class 11 · Learning mode</small></span><span className="profile-menu">···</span></button></div>
    </aside>
    <main className="main-panel">
      <header className="topbar"><button className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">☰</button><div className="breadcrumb"><span>Class 11</span><span className="crumb-divider">/</span><span>{view === 'home' ? activeSubject : view === 'subject' ? activeSubject : activeLesson.subject}</span>{view === 'lesson' && <><span className="crumb-divider">/</span><span className="crumb-current">{activeLesson.chapterTitle}</span></>}</div><div className="top-actions"><button className="search-trigger" onClick={() => setSearchOpen(true)}><span>⌕</span> Search anything <kbd>⌘ K</kbd></button><div className="font-controls" aria-label="Reading size"><button className="font-size-button" onClick={() => changeReadingSize(-1)} disabled={readingScaleIndex === 0} aria-label="Decrease reading size">A−</button><span className="reading-label" aria-live="polite">{Math.round(fontScale * 100)}%</span><button className="font-size-button" onClick={() => changeReadingSize(1)} disabled={readingScaleIndex === readingScales.length - 1} aria-label="Increase reading size">A+</button></div><button className="icon-button" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? '☼' : '◐'}</button><button className="help-button">Help <span>↗</span></button></div></header>
      <div className="page-content">
        {view === 'home' ? <Home activeSubject={activeSubject} completed={completed} openLesson={openLesson} setActiveSubject={setActiveSubject} openSubject={openSubject} /> : view === 'subject' ? <SubjectPage subjectName={activeSubject} completed={completed} openLesson={openLesson} onBack={() => setView('home')} /> : <LessonPage lesson={activeLesson} markdown={markdown} completed={completed.includes(activeId)} onComplete={toggleComplete} onBack={() => setView('subject')} onNavigate={goTo} />}
      </div>
    </main>
    {searchOpen && <div className="search-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}><div className="search-modal" role="dialog" aria-modal="true" aria-label="Search lessons"><div className="search-input-row"><span>⌕</span><input autoFocus placeholder="Search lessons, concepts, chapters..." value={query} aria-activedescendant={filteredLessons[searchIndex] ? `search-${filteredLessons[searchIndex].id}` : undefined} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Escape') setSearchOpen(false); if (e.key === 'ArrowDown') { e.preventDefault(); setSearchIndex((index) => Math.min(index + 1, filteredLessons.length - 1)) }; if (e.key === 'ArrowUp') { e.preventDefault(); setSearchIndex((index) => Math.max(index - 1, 0)) }; if (e.key === 'Enter' && filteredLessons[searchIndex]) openLesson(filteredLessons[searchIndex]) }} /><kbd>ESC</kbd></div><div className="search-caption">{query ? `${filteredLessons.length} RESULT${filteredLessons.length === 1 ? '' : 'S'}` : 'QUICK JUMP'}</div>{filteredLessons.length ? filteredLessons.map((lesson, index) => <button id={`search-${lesson.id}`} key={lesson.id} className={`search-result ${index === searchIndex ? 'search-result-active' : ''}`} onMouseMove={() => setSearchIndex(index)} onClick={() => openLesson(lesson)}><span className="result-icon">{lesson.subject === 'Physics' ? '◉' : '⌕'}</span><span>{lesson.title}<small>{lesson.subject} · {lesson.chapterTitle}</small></span><span className="result-time">{lesson.duration} min ↗</span></button>) : <div className="empty-search">No lessons found. Try a different search.</div>}<div className="search-footer">↑↓ to navigate <span>↵ to open</span></div></div></div>}
  </div>
}

function Home({ activeSubject, completed, openLesson, setActiveSubject, openSubject }: { activeSubject: string; completed: string[]; openLesson: (lesson: Lesson) => void; setActiveSubject: (subject: string) => void; openSubject: (subject: string) => void }) {
  const subject = subjects.find((item) => item.name === activeSubject) ?? subjects[0]
  const list = lessons.filter((lesson) => lesson.subject === activeSubject)
  const progress = list.length ? Math.round(list.filter((lesson) => completed.includes(lesson.id)).length / list.length * 100) : 0
  const active = list.find((lesson) => !completed.includes(lesson.id)) ?? list[0]
  return <div className="home-view">
    <div className="welcome-line"><span className="welcome-pill"><span /> YOUR LEARNING SPACE</span><span className="welcome-date">{new Intl.DateTimeFormat('en-IN', { weekday: 'long', month: 'long', day: '2-digit' }).format(new Date()).toUpperCase()}</span></div>
    <section className="welcome-heading"><div><h1>Make room for<br /><em>big ideas.</em></h1><p>A calmer way to learn the things that matter.<br className="desktop-break" /> Pick up where you left off.</p></div><div className="welcome-illustration" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="illustration-sun">✳</div><div className="illustration-book">∿<small>F = ma</small></div><span className="spark spark-one">✦</span><span className="spark spark-two">·</span><span className="spark spark-three">✳</span></div></section>
    <div className="section-heading"><div><span className="eyebrow">YOUR SUBJECTS</span><h2>Pick up a subject</h2></div><button className="text-link" onClick={() => setActiveSubject('Physics')}>View all subjects <span>↗</span></button></div>
    <div className="subject-cards">{subjects.map((item) => <button key={item.name} className={`course-card card-${item.color} ${activeSubject === item.name ? 'card-selected' : ''}`} onClick={() => openSubject(item.name)}><div className="course-top"><span className="course-icon">{item.icon}</span><span className="course-arrow">↗</span></div><div className="course-name">{item.name}<span className="chapter-total">{item.chapters ? `${item.chapters} chapters` : 'Coming soon'}</span></div><p>{item.description}</p><div className="course-progress"><span className="progress-track"><span style={{ width: item.name === 'Physics' ? `${progress}%` : '0%' }} /></span><span>{item.name === 'Physics' ? `${progress}%` : 'Soon'}</span></div></button>)}</div>
    <div className="learning-grid"><section className="continue-section"><div className="section-heading compact"><div><span className="eyebrow">KEEP THE MOMENTUM</span><h2>Continue learning</h2></div><button className="text-link">Your progress <span>↗</span></button></div><button className="continue-card" onClick={() => active && openLesson(active)}><div className="continue-art"><div className="ring ring-a"/><div className="ring ring-b"/><span className="art-symbol">{subject.icon}</span><span className="art-caption">{subject.short}</span><span className="art-star">✳</span></div><div className="continue-info"><div className="continue-meta"><span className={`mini-dot ${subject.name.toLowerCase()}`} />{subject.name.toUpperCase()}<span className="meta-divider">·</span>{list[0]?.chapterTitle ?? 'Coming soon'}</div><h3>{active?.title ?? 'More lessons coming soon'}</h3><p>{active ? `A ${active.duration}-minute lesson to build your understanding, one idea at a time.` : 'This subject is on its way. Start with Physics while we prepare original lessons.'}</p><div className="continue-bottom"><span className="resume-button">{active ? 'Resume lesson' : 'Explore Physics'} <span>→</span></span><span className="lesson-time">◷ {active?.duration ?? 0} min</span></div></div></button></section><aside className="weekly-card"><div className="weekly-top"><div><span className="eyebrow">YOUR RHYTHM</span><h3>A steady pace<br />goes a long way.</h3></div><span className="weekly-icon">↗</span></div><p>You’ve completed <strong>{completed.length} of {lessons.length}</strong> available lessons. Small steps count.</p><div className="weekly-progress"><div className="weekly-progress-header"><span>OVERALL PROGRESS</span><strong>{lessons.length ? Math.round(completed.length / lessons.length * 100) : 0}%</strong></div><span className="progress-track"><span style={{ width: `${lessons.length ? Math.round(completed.length / lessons.length * 100) : 0}%` }} /></span></div><div className="weekly-note"><span>✳</span> Start with one lesson today.</div></aside></div>
    <div className="library-heading"><div><span className="eyebrow">THE LIBRARY</span><h2>All subjects, one place</h2></div></div><div className="library-list">{subjects.map((item) => <button key={item.name} className="library-row" onClick={() => setActiveSubject(item.name)}><span className={`library-icon ${item.color}`}>{item.icon}</span><span className="library-title">{item.name}<small>{item.name === 'Physics' ? 'Mechanics & measurement' : 'Original lessons in progress'}</small></span><span className="library-count">{item.name === 'Physics' ? `${lessons.filter((l) => l.subject === item.name).length} lessons` : 'Coming soon'}</span><span className="library-arrow">↗</span></button>)}</div>
  </div>
}

function StudyBlock({ type = 'concept', title, children }: { type?: string; title?: string; children?: ReactNode }) {
  const labels: Record<string, string> = { concept: 'Key concept', example: 'Worked example', check: 'Quick check', mistake: 'Common mistake', recap: 'Remember' }
  return <aside className={`learning-block learning-block-${type}`}><span className="learning-block-label">{title || labels[type] || 'Study note'}</span><div>{children}</div></aside>
}

function SubjectPage({ subjectName, completed, openLesson, onBack }: { subjectName: string; completed: string[]; openLesson: (lesson: Lesson) => void; onBack: () => void }) {
  const subject = subjects.find((item) => item.name === subjectName) ?? subjects[0]
  const subjectLessons = lessons.filter((lesson) => lesson.subject === subjectName)
  const groups = new Map<string, Lesson[]>()
  subjectLessons.forEach((lesson) => groups.set(lesson.chapter, [...(groups.get(lesson.chapter) ?? []), lesson]))
  const chapters = [...groups.entries()].map(([id, items]) => ({ id, number: items[0].chapterNumber, title: items[0].chapterTitle, lessons: items }))
  return <div className="subject-page">
    <button className="back-link" onClick={onBack}>← <span>Overview</span></button>
    <div className="subject-page-heading"><span className={`subject-page-icon ${subject.color}`}>{subject.icon}</span><div><span className="eyebrow">CLASS 11 · SUBJECT</span><h1>{subject.name}</h1><p>{subject.description}</p></div></div>
    {subjectLessons.length ? <><div className="subject-progress-summary"><span>{chapters.length} chapters</span><span>{subjectLessons.length} lessons</span><span>{subjectLessons.filter((lesson) => completed.includes(lesson.id)).length} completed</span></div><div className="chapter-catalog">{chapters.map((chapter) => <section className="catalog-chapter" key={chapter.id}><div className="catalog-chapter-heading"><span className="catalog-number">{String(chapter.number).padStart(2, '0')}</span><div><span className="eyebrow">CHAPTER {chapter.number}</span><h2>{chapter.title}</h2><p>{chapter.lessons.length} {chapter.lessons.length === 1 ? 'lesson' : 'lessons'}</p></div></div><div className="catalog-lessons">{chapter.lessons.map((lesson) => <button key={lesson.id} className="catalog-lesson" onClick={() => openLesson(lesson)}><span className="catalog-lesson-status">{completed.includes(lesson.id) ? '✓' : '○'}</span><span className="catalog-lesson-title">{lesson.title}<small>{lesson.duration} min · {completed.includes(lesson.id) ? 'Completed' : 'Ready to study'}</small></span><span className="catalog-lesson-arrow">→</span></button>)}</div></section>)}</div></> : <div className="subject-coming-soon"><h2>Lessons are on the way</h2><p>This subject’s chapter list will appear here as lessons are added.</p></div>}
  </div>
}

function LessonPage({ lesson, markdown, completed, onComplete, onBack, onNavigate }: { lesson: Lesson; markdown: string; completed: boolean; onComplete: () => void; onBack: () => void; onNavigate: (offset: number) => void }) {
  const headings = useMemo(() => headingsFromMarkdown(markdown), [markdown])
  const [activeHeading, setActiveHeading] = useState(headings[0]?.id)

  useEffect(() => {
    setActiveHeading(headings[0]?.id)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setActiveHeading(visible.target.id)
    }, { rootMargin: '-18% 0px -68% 0px' })
    headings.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [headings])

  return <article className="lesson-page"><button className="back-link" onClick={onBack}>← <span>All lessons</span></button><div className="lesson-kicker"><span className="lesson-subject-dot">◉</span>{lesson.subject.toUpperCase()}<span>·</span>{lesson.chapterTitle.toUpperCase()}</div><div className="lesson-title-row"><div><h1>{lesson.title}</h1><p className="lesson-deck">A clear, practical introduction. Learn the idea, see it at work, then try it yourself.</p></div><button className={`complete-button ${completed ? 'is-complete' : ''}`} onClick={onComplete}>{completed ? '✓ Completed' : '○ Mark complete'}</button></div><div className="lesson-meta"><span>◷ {lesson.duration} min read</span><span>·</span><span>Updated for your learning path</span></div><div className="lesson-layout"><aside className="lesson-aside"><nav className="toc-card" aria-label="In this lesson"><span className="eyebrow">IN THIS LESSON</span>{headings.map((heading) => <a key={heading.id} className={`${heading.level === 3 ? 'toc-subheading' : ''} ${activeHeading === heading.id ? 'toc-active' : ''}`} href={`#${heading.id}`} onClick={() => setActiveHeading(heading.id)}>{heading.label}</a>)}</nav><div className="objectives-card"><span className="eyebrow">YOU’LL BE ABLE TO</span>{lesson.objectives.map((objective) => <p key={objective}><span>✓</span>{objective}</p>)}</div></aside><div className="lesson-body"><div className="lesson-prose"><ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeSlug, rehypeKatex, rehypeLessonIds]} components={{ 'learning-block': StudyBlock, h2: ({ children, ...props }: { children?: ReactNode; id?: string; className?: string }) => <h2 {...props}>{cleanHeading(String(children))}</h2>, h3: ({ children, ...props }: { children?: ReactNode; id?: string; className?: string }) => <h3 {...props}>{cleanHeading(String(children))}</h3> } as unknown as Components}>{markdown || '# Lesson coming soon\n\nThis lesson is being prepared.'}</ReactMarkdown></div><div className="lesson-actions"><button className={`complete-button ${completed ? 'is-complete' : ''}`} onClick={onComplete}>{completed ? '✓ Completed' : '✓ Mark lesson complete'}</button><span>Nice work showing up today.</span></div><div className="lesson-pagination"><button onClick={() => onNavigate(-1)}>← <span>Previous lesson</span></button><button onClick={() => onNavigate(1)}><span>Next lesson</span> →</button></div></div></div></article>
}

export default App
