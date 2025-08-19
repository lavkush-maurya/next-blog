import type { MusicInfoProps } from '~/types'

export function MusicInfo({ musicURL, artist, title }: MusicInfoProps) {
  return (
    <div className="mb-8 mt-4 text-center text-sm italic">
      <p>
        <strong>{title}</strong>
      </p>
      <p>
        By <span className="!no-underline">{artist}</span>
      </p>
      <audio src={musicURL} controls className="mx-auto mt-2 max-w-full" preload="metadata">
        <track kind="captions" src="" label="No captions available" />
        Sorry, your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default MusicInfo
