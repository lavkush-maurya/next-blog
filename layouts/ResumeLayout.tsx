import { PageSeo } from 'components/SEO'
import { ScrollTopButton } from '~/components/ScrollTopButton'
import ToC from '~/components/ToC'

import { siteMetadata } from '~/data/siteMetadata'

export function ResumeLayout({ children, toc }) {
  let description = 'My professional career, experience, and skills.'

  return (
    <>
      <PageSeo
        title={`Resume - ${siteMetadata.fullName} - ${description}`}
        description={`Resume - ${siteMetadata.fullName} - ${description}`}
      />
      <ScrollTopButton />
      <div className="resume">
        <header className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            {description}
          </p>
        </header>
        <div className="border border-t border-gray-200 dark:border-gray-700" />
        <main className="mx-auto my-12 max-w-screen-xl gap-12 space-y-12 rounded-md bg-gray-100 p-3 md:flex md:space-y-0 md:p-8">
          <ToC />
          <div className="hidden border-l border-gray-300 md:block" />
          <div className="prose prose-slate grow table-auto border-collapse space-y-5 leading-6 text-gray-900">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default ResumeLayout
