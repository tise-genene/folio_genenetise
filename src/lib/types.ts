export interface Project {
  priority: number
  title: string
  shortDescription: string
  cover?: string
  type?: string
  siteAge?: string
  associatedWith?: string
  skills?: string
  livePreview?: string
  githubLink?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  feedback: string
  stars: number
  createdAt: string
}

export interface HeadingItem {
  id: string
  title: string
}

export interface Heading {
  id: string
  title: string
  items: HeadingItem[]
}
