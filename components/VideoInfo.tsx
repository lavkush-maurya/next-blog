import type { VideoInfoProps } from '~/types'

export function VideoInfo({ videoURL, author, title }: VideoInfoProps) {
  return (
    <div className="mb-8 mt-4 text-center text-sm italic">
      <p>
        Video: <strong>{title}</strong>
      </p>
      <p>
        By{' '}
        <a href={videoURL} rel="noreferrer" className="!no-underline">
          {author}
        </a>
      </p>
      <video src={videoURL} controls className="mx-auto mt-2 max-w-full" preload="metadata">
        <track kind="captions" src="" label="English captions" />
        Sorry, your browser does not support embedded videos.
      </video>
    </div>
  )
}

export default VideoInfo
