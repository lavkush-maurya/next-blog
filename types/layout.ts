import type React from 'react'
import type { AuthorFrontMatter, BlogFrontMatter, MdxFrontMatter, SnippetFrontMatter } from './mdx'
import type { PaginationType } from './server'

export interface AuthorLayoutProps {
  children: React.ReactNode
  frontMatter: BlogFrontMatter
}

export interface ContactLayoutProps {
  children: React.ReactNode
  frontMatter: MdxFrontMatter
}

export interface ListLayoutProps {
  posts: BlogFrontMatter[]
  title: string
  initialDisplayPosts?: BlogFrontMatter[]
  pagination?: PaginationType
}

export interface PostSimpleLayoutProps {
  frontMatter: BlogFrontMatter
  type: string
  children: React.ReactNode
  authorDetails: AuthorFrontMatter[]
  page: number
}

export interface PostLayoutProps extends PostSimpleLayoutProps {}

export interface SnippetLayoutProps {
  snippets: SnippetFrontMatter[]
  description: string
}

export interface ResumeLayoutProps {
  children: React.ReactNode
  frontMatter: MdxFrontMatter
}
