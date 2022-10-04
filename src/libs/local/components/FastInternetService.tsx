import { makeStyles } from '@material-ui/core'
import { CardAndImage } from 'src/blitz'
import colors from 'src/styles/theme/colors'

const FastInternetService = (data: any) => {
  const { heading, copy, imageMobile, imageTablet, altText }: any =
    data?.data || {}
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <CardAndImage
          heading={heading?.value}
          copy={copy?.value}
          imageMobile={imageMobile?.src}
          imageTablet={imageTablet?.src}
          altText={altText?.value}
          className={classes.content}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: colors.main.white,
    padding: '1.5rem 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '5.75rem 1rem',
    },
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: 1100,
  },
  content: {
    '& sup': {
      lineHeight: 0,
    },
  },
}))

export default FastInternetService
