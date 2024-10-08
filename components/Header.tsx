import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { headerNavLinks } from 'data/headerNavLinks'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  const [profile, setProfile] = useState(null)
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/link.mp3'))
  }, [])
  useEffect(() => {
    setProfile(new Audio('/profile.wav'))
  }, [])
  const handleProfile = () => {
    profile.currentTime = 0
    profile.play()
  }
  const handleClick = () => {
    audio.currentTime = 0
    audio.play()
  }
  let router = useRouter()
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 overflow-x-hidden bg-white/25 py-3  dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label="Lav's Blog">
            <div className="flex items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <NextImage
                  src="/static/images/logo.jpg"
                  alt="Lavv's Blog logo"
                  width={45}
                  height={45}
                  className="rounded-full"
                  onClick={handleProfile}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-2 sm:block">
            {headerNavLinks.map((link) => {
              return (
                <Link key={link.title} href={link.href} onClick={handleClick}>
                  <span
                    className={clsx(
                      'inline-block rounded px-2 py-1 font-medium text-gray-900 dark:text-gray-100 sm:px-3 sm:py-2',
                      router.pathname.startsWith(link.href)
                        ? 'animate-pulse bg-gray-200 shadow-md shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800'
                        : 'shadow-sm shadow-gray-300 hover:bg-gray-200 dark:shadow-gray-600 dark:hover:bg-gray-700'
                    )}
                  >
                    {link.title}
                  </span>
                </Link>
              )
            })}
          </div>

          <ThemeSwitcher />
          <button
            className="ml-2 mr-1 h-8 w-8 animate-pulse rounded shadow-md shadow-gray-400 dark:shadow-gray-800 sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
