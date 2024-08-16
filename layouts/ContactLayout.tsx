import React from 'react'
import { PageSeo } from '~/components/SEO'
import { siteMetadata } from '~/data/siteMetadata'
import type { ContactLayoutProps } from '~/types/layout'

export function ContactLayout({ children, frontMatter }: ContactLayoutProps) {
  const title = frontMatter.title || 'Default Page Title'
  const description = frontMatter.summary || 'Default page description'

  return (
    <>
      <PageSeo title={`${title} - ${siteMetadata.title}`} description={description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <header className="py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {title}
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none dark:prose-dark">{children}</div>
        </main>
      </div>
    </>
  )
}

export default ContactLayout
