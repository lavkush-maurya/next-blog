import React, { useEffect, useState } from 'react'

const ToC: React.FC = () => {
  const [activeLinkId, setActiveLinkId] = useState<string | null>(null)
  const [headings, setHeadings] = useState<NodeListOf<HTMLHeadingElement> | null>(null)

  useEffect(() => {
    const headingsList = document.querySelectorAll<HTMLHeadingElement>('h2')
    setHeadings(headingsList)

    const handleScroll = () => {
      const scrollPosition = window.scrollY

      headingsList.forEach((heading) => {
        const id = heading.id
        const offsetTop = heading.offsetTop
        const offsetHeight = heading.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveLinkId(id)
        }
      })
    }

    // Listen for scroll events to update active link
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToElement = (id: string) => {
    const targetElement = document.getElementById(id)

    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        })
      }, 0)
    }
  }

  return (
    <nav>
      <ul id="toc-list" className="top-24 self-start pl-0 md:sticky">
        {headings &&
          Array.from(headings).map((heading) => {
            const id = heading.id
            const text = heading.textContent

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={id === activeLinkId ? 'active' : ''}
                  onClick={() => scrollToElement(id)}
                >
                  {text}
                </a>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default ToC
