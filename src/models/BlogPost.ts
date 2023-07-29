export type BlogPost = {
  title: string
  description: string
  date: string
  tags?: string[]
  image: string
  slug: string
  readingTime: number
  body: {
    raw: string
    code: string
  }
}
