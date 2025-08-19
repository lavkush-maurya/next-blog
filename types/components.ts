import type { ImageProps as NextImageProps } from 'next/image'
import type React from 'react'
import type { SocialIconsMap } from '~/components/SocialIcon'
import type { projectsData } from '~/data/projectsData'
import type { ReadingTime } from './mdx'

export interface PageTitleProps {
  children: React.ReactNode
}

export interface ImageLightBoxProps extends Pick<NextImageProps, 'src'> {
  closeLightbox: () => void
}

export interface SocialIconProps {
  name: keyof typeof SocialIconsMap
  href: string
}

export interface ImageProps extends NextImageProps {
  shouldOpenLightbox?: boolean
}

export type ProjectDataType = (typeof projectsData)[0]

export interface ProjectCardProps {
  project: ProjectDataType
}

export interface SocialButtonsProps {
  postUrl: string
  title: string
  fileName: string
}

export type TwemojiProps = {
  emoji: string
  size?: string
  className?: string
}

export interface UnsplashPhotoProps {
  photoURL: string
  author: string
}

export interface VideoInfoProps {
  videoURL: string
  author: string
  title: string
}

export interface MusicInfoProps {
  musicURL: string
  artist: string
  title: string
}

export interface ViewCounterProps {
  slug: string
  className?: string
}

export interface BlogHeaderProps {
  title: string
  date: string
  readingTime: ReadingTime
}

export interface BlogMetaProps {
  date: string
  slug: string
  readingTime: ReadingTime
}
