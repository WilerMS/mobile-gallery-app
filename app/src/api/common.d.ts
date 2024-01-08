export interface Photo {
  id: number
  type: string
  tags: string[]
  preview: string
  url: string
  width: number
  height: number
  size: number
  views: number
  downloads: number
  collections: number
  likes: number
  comments: number
  user: string
  userImage: string
}
