import { siteMetadata } from '~/data/siteMetadata'
import { DevIcon } from './DevIcon'
import { Link } from './Link'

export function BuiltWith() {
  return (
    <div className="flex items-center space-x-1">
      <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
      <div className="flex space-x-1.5">
        <Link href="https://nextjs.org?ref=https://github.com/lavkush-maurya/next-blog">
          <DevIcon type="NextJS" className="h-5 w-5" />
        </Link>
        <Link href="https://tailwindcss.com?ref=.https://github.com/lavkush-maurya/next-blog">
          <DevIcon type="TailwindCSS" className="h-5 w-5" />
        </Link>
        <Link href="https://www.prisma.io?ref=.https://github.com/lavkush-maurya/next-blog">
          <DevIcon type="Prisma" className="h-5 w-5" />
        </Link>
        <Link href="https://www.typescriptlang.org?ref=.https://github.com/lavkush-maurya/next-blog">
          <DevIcon type="Typescript" className="h-5 w-5" />
        </Link>
      </div>
      <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
    </div>
  )
}
