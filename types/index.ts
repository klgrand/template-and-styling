export interface AuthorProps {
  id: number
  name: string
  role: string
  place: string
  avatar_url: string
}

export interface AuthorDetailProps {
  author_id: number
  created_at: string
}

export interface PostProps {
  id: number
  author_id: number
  title: string
  body: string
  image_url: string
  created_at: string
}

export interface AvatarProps {
  image_url: string | undefined
}