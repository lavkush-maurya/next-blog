import type { GetServerSideProps, NextPage } from 'next'
import { parseString } from 'xml2js'

interface SitemapProps {
  links: string[]
}

const Sitemap: NextPage<SitemapProps> = ({ links }) => {
  // console.log('linkss===>>>>', links)

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="mb-4 text-xl font-bold leading-normal md:text-2xl">Sitemap</h1>
      <ul className="list-disc pl-4">
        {links.map((link, index) => (
          <li key={index} className="mb-2 md:mb-4">
            <a href={link} className="text-orangered hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SitemapProps> = async () => {
  const sitemapUrl = 'https://lavkushmaurya.me/sitemap.xml'

  try {
    // Fetch XML data from the URL
    const response = await fetch(sitemapUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.statusText}`)
    }

    const sitemapXml = await response.text()

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
  } catch (error) {
    console.error('Error fetching sitemap:', error)

    return {
      props: {
        links: [],
      },
    }
  }
}

export default Sitemap
