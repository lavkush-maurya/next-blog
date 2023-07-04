import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Lavv</b> at work.
        </li>
        <li>I'm a learner, developer, and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Surat, India</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">JavaScript</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce software.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>
          I'm a dog-person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="cricket" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
          .
        </li>
        <li>I love watching football.</li>
        <li>
          I love playing <Twemoji emoji="musical-keyboard" /> & <Twemoji emoji="guitar" />.
        </li>
        <li>I love rock music.</li>
        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, GTA-5 is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
