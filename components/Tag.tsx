import Link from 'next/link'
import { kebabCase } from '~/utils/kebab-case'

export function Tag({ text }: { text: string }) {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium text-lime-700 hover:text-lime-600 dark:text-primary-400 dark:hover:text-primary-300 md:text-base"
    >
      <span>#{text.split(' ').join('-')}</span>
    </Link>
  )
}
