import { useMemo } from 'react'
import { makeStyles, Grid, Zoom } from '@material-ui/core'
import { InjectHTML, Picture, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { Tooltip } from 'src/blitz'
import { QuestionIcon } from 'src/blitz/assets/react-icons'
const ImageBoxText = () => {
  const classes = useStyles()
  const { list } = useAppData('imageBoxData', true)
  const imageList = useMemo(() => {
    return list?.list?.map((item: any) => ({
      backgroundColor: item?.backgroundColor?.Color?.field?.value,
      direction: item?.direction?.direction?.field?.value,
      smDirection: item?.smDirection?.direction?.field?.value,
      textColor: item?.textColor?.Color?.field?.value,
      image: item?.image?.src,
      imagewebp: item?.imagewebp?.src,
      mobileimg: item?.mobileImage?.src,
      imageAlt: item?.image?.alt,
      title: item?.title?.value,
      description: item?.description?.value,
      tooltip: item?.tooltipText?.value,
    }))
  }, [list])
  return (
    <div className={classes.root}>
      {imageList?.map((data: any, index: number) => (
        <ImageBox data={data} key={index} />
      ))}
    </div>
  )
}

const ImageBox = ({ data }: any) => {
  const color = getFontColor(data?.textColor)
  const classes = imageBoxStyles({
    direction: data?.direction,
    smDirection: data?.smDirection,
    color,
  })
  return (
    <div
      style={{
        backgroundColor: getBackGroundColor(data?.backgroundColor),
        color,
      }}
    >
      <Grid
        container
        className={classes.outerContainer}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          md={6}
          sm={12}
          className={`${
            data?.direction === 'row'
              ? classes.leftContainer
              : classes.rightContainer
          }`}
        >
          <div className={classes.imgWrapper}>
            <Zoom timeout={100}>
              <Picture
                testId="cardImage"
                desktop={{
                  image: data?.image,
                  webp: data?.imagewebp,
                }}
                mobile={{
                  image: data?.mobileimg,
                }}
                altText={data?.imageAlt}
                width="100%"
                height="100%"
              />
            </Zoom>
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <InjectHTML
            className={classes.title}
            tagType="h2"
            styleType="h3"
            fontType="regularBandwidthFont"
            value={data?.title}
          />
          <Typography
            tagType="p"
            styleType="h6"
            className={classes.description}
          >
            <>
              {data?.description}
              {data?.tooltip && (
                <span className={classes.tooltip}>
                  <Tooltip
                    tooltipText={data?.tooltip}
                    tooltipIcon={<QuestionIcon />}
                    includeBorder
                    tooltipDirection="bottom"
                    hideBorder
                    dropShadow
                  />
                </span>
              )}
            </>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

const getBackGroundColor = (color: string) => {
  switch (color) {
    case 'red':
      return colors.main.brightRed
    case 'greenish-blue':
      return colors.main.greenishBlue
    default:
      return colors.main.white
  }
}

const getFontColor = (color: string) => {
  switch (color) {
    case 'black':
      return colors.main.midnightExpress
    default:
      return colors.main.white
  }
}
const imageBoxStyles = makeStyles(({ breakpoints, typography }) => ({
  outerContainer: ({ direction, smDirection }: any) => ({
    ...COMPONENT_WRAPPER,
    padding: '32px 128px',
    maxHeight: 364,
    flexDirection: direction,
    [breakpoints.down('sm')]: {
      flexDirection: smDirection,
      padding: 32,
      maxHeight: 'none',
      flexWrap: 'nowrap',
    },
  }),
  imgWrapper: {
    maxWidth: '100%',
    overflow: 'hidden',
    '& img': {
      borderRadius: 32,
    },
  },
  leftContainer: {
    paddingRight: 66,
    [breakpoints.down('sm')]: {
      paddingRight: 0,
      paddingBottom: 32,
    },
  },
  rightContainer: {
    paddingLeft: 66,
    [breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingTop: 32,
    },
  },
  description: {
    margin: 0,
    color: 'inherit',
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  title: {
    marginBottom: typography.pxToRem(32),
    maxWidth: '100%',
    fontSize: '2.25rem',
    fontWeight: 400,
    color: 'inherit',
    [breakpoints.down('sm')]: {
      marginBottom: typography.pxToRem(16),
      fontSize: '1.75rem',
    },
  },
  tooltip: ({ color }: any) => ({
    display: 'inline-flex',
    position: 'relative',
    left: 5,
    top: 5,
    '& path': {
      fill: color,
    },
  }),
}))
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.main.midnightExpress,
  },
}))

export default ImageBoxText
