import { useAppData } from 'src/hooks'
import { Button, ImagePerk, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { FRONTIER_EERO } from 'src/constants'

const FrontierEero = () => {
  const compData = useAppData('frontierEroo', true) || {}
  const classes = useStyles()
  const origin = window?.location?.origin || ''
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = FRONTIER_EERO.replace('{NAME}', compData?.butontText?.value)
  }

  return (
    <div id="frontier-eero" className={classes.container}>
      <ImagePerk
        backgroundColor="primary"
        stripeColor="secondary"
        content={
          <>
            <img
              src={compData?.imageContentBox?.src}
              alt={compData?.imageContentBox?.alt}
              className={classes.imageContentLogo}
            />
            <Typography tagType="h2" styleType="h3">
              {compData?.heading?.value}
            </Typography>
            <Typography
              className={classes.paragraphStyle}
              tagType="p"
              styleType="p1"
            >
              {compData?.subHeading?.value}
            </Typography>
            <Button
              type="link"
              text={compData?.butontText?.value}
              href={`${origin}${compData?.buttonUrl?.url}`}
              onClick={onButtonClick}
            />
          </>
        }
        tabletBackgroundImage={compData?.tabletBackgroundImage ?? {}}
      />
    </div>
  )
}

export default FrontierEero

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {},
  imageContentLogo: {
    marginBottom: 40,
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  paragraphStyle: {
    marginBottom: '32px',
  },
}))
