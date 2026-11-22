import { lessons, subjects, tracks, type TrackId } from './content/manifest'

export type View = 'home' | 'path' | 'subject' | 'lesson'

export type Route =
  | { view: 'home' }
  | { view: 'path'; trackId: TrackId }
  | { view: 'subject'; subjectId: string }
  | { view: 'lesson'; lessonId: string }

const base = import.meta.env.BASE_URL

// Strip the deploy base (e.g. /learn-engg/) so route parsing is host-agnostic.
const withoutBase = (pathname: string) => {
  if (base === '/') return pathname
  const root = base.slice(0, -1)
  if (pathname === root) return '/'
  return pathname.startsWith(base) ? pathname.slice(root.length) : pathname
}

const trackIds = new Set<string>(tracks.map((track) => track.id))
const subjectIds = new Set(subjects.map((subject) => subject.id))
const lessonIds = new Set(lessons.map((lesson) => lesson.id))

export const routeFromPath = (pathname: string): Route => {
  const [segment, value] = withoutBase(pathname).split('/').filter(Boolean)
  if (segment === 'path' && value && trackIds.has(value)) return { view: 'path', trackId: value as TrackId }
  if (segment === 'subject' && value && subjectIds.has(value)) return { view: 'subject', subjectId: value }
  if (segment === 'lesson' && value && lessonIds.has(value)) return { view: 'lesson', lessonId: value }
  return { view: 'home' }
}

export const routeHref = {
  home: base,
  path: (trackId: TrackId) => `${base}path/${trackId}`,
  subject: (subjectId: string) => `${base}subject/${subjectId}`,
  lesson: (lessonId: string) => `${base}lesson/${lessonId}`,
}

export const hrefForRoute = (route: Route) =>
  route.view === 'home'
    ? routeHref.home
    : route.view === 'path'
      ? routeHref.path(route.trackId)
      : route.view === 'subject'
        ? routeHref.subject(route.subjectId)
        : routeHref.lesson(route.lessonId)

export const isRootPath = (pathname: string) => withoutBase(pathname) === '/'
