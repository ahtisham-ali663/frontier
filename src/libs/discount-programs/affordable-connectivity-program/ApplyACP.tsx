import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'
import { ArrowCross } from 'src/blitz/assets/react-icons'

const ApplyACP = () => {
  const classes = useStyles()
  const { title, tiles }: any = useAppData('ApplyACP', true)

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.list) {
      const button = {
        text:
          item?.buttonVariant?.value == 'lite' ? (
            <>
              {item?.buttonText?.value}
              <ArrowCross />
            </>
          ) : (
            item.buttonText?.value
          ),
        variant: item.buttonVariant?.value,
        href: item.buttonhref?.url,
        objectID:
          item?.icon?.value === '3' ? 'hero-check-availability' : undefined,
      }
      const payload: any = {
        title: item?.title?.value,
        description: item?.description?.value,
        button: button,
        icon: <Typography styleType="h1">{item?.icon?.value}</Typography>,
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  if (!tiles?.list) {
    return null
  }

  return (
    <div id="special-about-fiber" className={classes.root}>
      <div className={classes.wrapper}>
        {title?.value && (
          <Typography
            tagType="h2"
            color="secondary"
            styleType="h4"
            className={classes.title}
          >
            {title?.value}
          </Typography>
        )}
        <div className={classes.tilesWrapper}>
          <FourTiles
            type="light"
            textAlign="left"
            tiles={list}
            titleStyleType="h5"
            roundedBorders={true}
            cardClassName={classes.cardClassName}
            descriptionClassName={classes.descriptionClassName}
            buttonClassName={classes.buttonClassName}
            isClickable={false}
          />
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.dark,
    marginTop: 80,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    paddingBottom: 80,
    paddingTop: 60,
  },
  title: {
    marginBottom: '2rem',
  },
  buttonClassName: {
    width: 'unset',
    [breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  cardClassName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [breakpoints.down('md')]: {
      padding: '2rem',
    },
  },
  descriptionClassName: {
    flex: '1',
    marginTop: '1rem',
    marginBottom: '2rem',
    [breakpoints.down('md')]: {
      marginTop: '0',
    },
  },
  tilesWrapper: {
    marginTop: 32,
  },
}))

export default ApplyACP
