import type { AuthorFrontMatter, BlogFrontMatter, MdxFileData } from './mdx'
import type { PaginationType } from './server'

export interface SnippetProps {
  snippet: MdxFileData
}

export interface BlogListProps {
  posts: BlogFrontMatter[]
  initialDisplayPosts: BlogFrontMatter[]
  pagination: PaginationType
}

export interface BlogProps {
  post: MdxFileData
  authorDetails: AuthorFrontMatter[]
  prev: BlogFrontMatter
  next: BlogFrontMatter
  page: number
}
