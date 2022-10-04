import { Button, ImagePerk, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { FRONTIER_EERO } from 'src/constants'
import colors from 'src/styles/theme/colors'
import clx from 'classnames'

const FrontierEero = ({ data }: any) => {
  const classes = useStyles()
  const origin = '' //window?.location?.origin || ''
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = FRONTIER_EERO.replace('{NAME}', compData?.butontText?.value)
  }

  return (
    <div className={classes.container}>
      <ImagePerk
        backgroundColor={data?.backgroundColor?.value}
        backgroundColorContent={data?.backgroundContentColor?.value}
        contentAlign={data?.contentAlign?.value}
        stripeColor={data?.stripeColor?.value}
        content={
          <>
            <Typography tagType="h3" styleType="h3">
              <span
                style={{
                  color:
                    data?.backgroundColor?.value === 'white'
                      ? colors.main.greenishBlue
                      : colors.main.dark,
                }}
              >
                {' '}
                {data?.heading?.value}
              </span>
            </Typography>
            <Typography
              className={classes.paragraphStyle}
              tagType="p"
              styleType="p1"
            >
              <span
                style={{
                  color:
                    data?.backgroundContentColor?.value === 'black'
                      ? colors.main.white
                      : colors.main.dark,
                }}
              >
                {data?.subHeading?.value}
              </span>
            </Typography>
            <Button
              type="link"
              text={data?.butontText?.value}
              className={classes.buttonSize}
              variant={
                data?.backgroundContentColor?.value === 'black'
                  ? 'primary'
                  : 'secondary'
              }
              hoverVariant={
                data?.backgroundContentColor?.value === 'black'
                  ? 'secondary'
                  : 'primary'
              }
              href={`${origin}${data?.buttonUrl?.url}`}
              onClick={onButtonClick}
            />
          </>
        }
        tabletBackgroundImage={data?.desktopBackgroundImage ?? {}}
        className={clx(
          data?.contentAlign?.value === 'right'
            ? classes.contentRightBox
            : classes.contentLeftBox,
        )}
      />
    </div>
  )
}

export default FrontierEero

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    margin: '0 auto',
    '& .ImagePerk_imageBox__awcLd': {
      alignSelf: 'flex-end',
    },
  },
  imageContentLogo: {
    marginBottom: 40,
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  paragraphStyle: {
    marginBottom: '32px',
  },
  buttonSize: {
    [breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  contentLeftBox: {
    '& p': {
      [breakpoints.up('lg')]: {
        paddingRight: '6rem',
      },
    },
  },
  contentRightBox: {
    '& h3, p': {
      [breakpoints.up('lg')]: {
        paddingRight: '10rem',
      },
    },
  },
}))
