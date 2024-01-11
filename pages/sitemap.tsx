import type { GetServerSideProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import { parseString } from 'xml2js'

interface SitemapProps {
  links: string[]
}

const Sitemap: NextPage<SitemapProps> = ({ links }) => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="mb-4 text-xl font-bold leading-normal md:text-2xl">Sitemap</h1>
      <ul className="list-disc pl-4">
        {links.map((link, index) => (
          <li key={index} className="mb-2 md:mb-4">
            <a href={link} className="text-red-500 hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SitemapProps> = async () => {
  // Or method if this- 'public/sitemap.xml' or this -'sitemap.xml'
  const sitemapPath = fs.existsSync(path.join(process.cwd(), 'sitemap.xml'))
    ? path.join(process.cwd(), 'sitemap.xml')
    : path.join(process.cwd(), 'public/sitemap.xml')
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8')

  let links: string[] = []

  // Parse XML and extract links
  await parseString(sitemapXml, (err: any, result: { urlset: { url: any[] } }) => {
    if (err) {
      console.error('Error parsing XML:', err)
      return
    }

    if (result && result.urlset && result.urlset.url) {
      links = result.urlset.url.map((url: any) => url.loc[0])
    }
  })

  return {
    props: {
      links,
    },
  }
}

export default Sitemap
