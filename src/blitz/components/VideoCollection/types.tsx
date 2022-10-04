export interface IVideoCollectionProps
  extends React.HTMLAttributes<HTMLElement> {
  videos: {
    title: string
    subtitle: string
    thumbnail: string
    videoId: string
  }[]
  title: string
  subtext?: string
  maxCap?: number
  shouldTruncate?: boolean
  showLessText?: string
  showMoreText?: string
}
