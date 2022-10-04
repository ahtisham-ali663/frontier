import { makeStyles } from '@material-ui/core'
import { useAppData } from 'src/hooks'
import { Button, ImagePerk, Typography, InjectHTML } from 'src/blitz'

const Youtube = () => {
  const compData = useAppData('youtubeTv', true) || {}
  const classes = useStyles()
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = FIBER_2_GIG.replace('{NAME}', compData?.butontText?.value)
  }
  return (
    <div id="youtube" className={classes.container}>
      <ImagePerk
        backgroundColor="gray"
        backgroundColorContent="black"
        stripeColor="primary"
        content={
          <>
            <img
              src={compData?.imageContentBox?.src}
              alt={compData?.imageContentBox?.alt}
            />
            <Typography color="tertiary" tagType="h3" styleType="h3">
              {compData?.heading?.value}
            </Typography>
            <InjectHTML
              color="tertiary"
              tagType="p"
              styleType="p1"
              value={compData?.subHeading?.value}
            />
            <InjectHTML
              className={classes.oldPrice}
              color="tertiary"
              tagType="p"
              styleType="p1"
              value={compData?.price1?.value}
            />
            <div className={classes.price}>
              <Typography
                className={classes.newPrice}
                color="tertiary"
                tagType="p"
                styleType="h2"
              >
                {compData?.price2?.value}
              </Typography>
              <Typography
                className={classes.newPrice}
                color="tertiary"
                tagType="p"
                styleType="h6"
              >
                {compData?.price2Period?.value}
              </Typography>
            </div>
            <Button
              type="link"
              hoverVariant="secondary"
              text={compData?.butontText?.value}
              href={compData?.buttonUrl?.url}
              // className={classes.buttonSize}
              onClick={onButtonClick}
            />
          </>
        }
        tabletBackgroundImage={compData?.tabletBackgroundImage ?? {}}
      />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {},
  price: {
    marginBottom: '32px',
  },
  oldPrice: {
    textDecoration: 'line-through',
    margin: '32px 0 10px 0',
  },
  newPrice: {
    display: 'inline-block',
  },
}))

export default Youtube
