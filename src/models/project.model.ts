export interface Project {
  name: string
  description: string
  stack: string[]
  imagePath?: string
}

export interface Link {
  name: string
  url: string
  icon: string
}

export interface Content {
  links: Link[]
  screenshots: string[]
}
