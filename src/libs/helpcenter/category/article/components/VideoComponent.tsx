import { VideoModal } from 'src/blitz'
import { makeStyles } from '@material-ui/core'

const VideoComponent = ({ data }: any) => {
  const styles = useStyles()
  if (!data || Object.keys(data?.lists?.targetItem || {}).length == 0) {
    return null
  }
  const { thumbnail, videoId, title, description, videoTitle, videoDesc } =
    data?.lists?.targetItem || {}

  return (
    <div className={styles.root} id={data?.id?.value}>
      <VideoModal
        imageSrc={thumbnail?.src}
        videoId={videoId?.value}
        title={title?.value}
        desc={description?.value}
        videoTitle={videoTitle?.value}
        videoDesc={videoDesc?.value}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    marginBottom: 80,
    [breakpoints.down('sm')]: {
      marginBottom: 64,
    },
  },
}))

export default VideoComponent
