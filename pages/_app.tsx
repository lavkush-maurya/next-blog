import 'css/tailwind.css'
import 'css/twemoji.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { LayoutWrapper } from '~/components/LayoutWrapper'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}
