import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'Sparkle Infotech - On-demand software solution',
    description: `Sparkle infotech is a leading web development company specializing in custom web applications and providing end-to-end services to its client globally. `,
    imgSrc: '/static/images/sparkle-infotech.png',
    url: 'https://sparkleinfotech.com/',
    builtWith: ['Nextjs', 'Strapi', 'ChakraUi', 'GraphQl'],
  },
  {
    type: 'work',
    title: 'Bear Analytics - Leading Event Analytics Platform',
    description: `Bear IQ is a no-code event analytics platform. Our customers utilize the data they are already collecting to grow their audience, increase revenue, and market .`,
    imgSrc: '/static/images/bear-analytics.png',
    url: 'https://www.bearanalytics.com/',
    builtWith: ['Webflow', 'Javascript'],
  },
  {
    type: 'work',
    title: 'paradigmresear.ch - Blog Wesbsite',
    description:
      'Paradigm is an ecosystem that incorporates a venture fund, a research agency & an accelerator focused on science & tech.',
    imgSrc: '/static/images/pardigm.png',
    repo: 'weaverse/pilot',
    url: 'https://paradigmresear.ch/',
    builtWith: ['NextJs', 'NodeJs', 'Tailwind', 'MongoDB'],
  },
  {
    type: 'work',
    title: 'Sixty Seconds - Personalised Video Campaigns',
    description: `Sixty Seconds is a video creation software that makes it easy to create professional videos on-demand.`,
    imgSrc: '/static/images/sixty-seconds.png',
    url: 'https://www.sixtyseconds.video/',
    builtWith: ['React', 'Redux', 'GraphQl', 'ChartJs'],
  },
  {
    type: 'work',
    title: 'Zync AI - Leading Event Analytics Platform',
    description: `Zync is your AI enabled production studio · Create a new episode in minutes with AI assistance · Get instant promo material like poster, registration page, & more.`,
    imgSrc: '/static/images/zync.png',
    url: 'https://zync.ai/',
    builtWith: ['Webflow', 'Javascript'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/lavkush.png',
    repo: 'github.com/lavkush-maurya/next-blog/',
    url:'https://lavv-blog.vercel.app/',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'MDX'],
  },
  {
    type: 'self',
    title: 'Personal Html Portfolio',
    imgSrc: '/static/images/resume-banner.png',
    repo: 'Html Portfolio',
    url:'https://lavkush-maurya.github.io/Portfolio/',
    builtWith: ['Html', 'Css', 'Jquery', 'Javscript', 'Github'],
  },
]
