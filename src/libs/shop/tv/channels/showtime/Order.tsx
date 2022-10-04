import { makeStyles } from '@material-ui/core'
import { InjectHTML, Picture, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'
const OrderSection = () => {
  const { title, content, image, mobileImage } = useAppData('howToOrder', true)

  const classes = useStyles()
  return (
    <div id="how-to-order" className={classes.container}>
      <div className={classes.content}>
        <Typography tagType="h2" styleType="h3">
          {title?.value}
        </Typography>
        <InjectHTML tagType="p" styleType="p1" value={content?.value} />
      </div>

      <div className={classes.orderImg}>
        <Picture
          altText={image?.alt}
          desktop={{
            image: `${image?.src}`,
          }}
          tablet={{
            image: `${image?.src}`,
          }}
          mobile={{
            image: `${mobileImage?.src}`,
          }}
          className={classes.w100}
        />
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints, typography }) => ({
  container: {
    ...COMPONENT_WRAPPER,
    display: 'flex',
    padding: ` ${typography.pxToRem(80)} 0`,
    [breakpoints.down('sm')]: {
      padding: ` ${typography.pxToRem(48)} ${typography.pxToRem(16)}`,
      flexDirection: 'column',
    },
  },
  content: {
    flexBasis: '40%',
    padding: `${typography.pxToRem(48)}`,
    background: `${colors.main.newBackgroundGray}`,
    [breakpoints.down('sm')]: {
      padding: `${typography.pxToRem(32)}`,
    },
  },
  orderImg: {
    flexBasis: '60%',
    width: '100%',
    [breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
  },
  w100: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))
export default OrderSection
