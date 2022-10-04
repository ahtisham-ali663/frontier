import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles, Button, InjectHTML } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER, SPECIAL_ABOUT_FIBER } from 'src/constants'
import { useAppData } from 'src/hooks'

const SpecialAboutFiber = () => {
  const classes = useStyles()
  const {
    title,
    subTitle,
    list: tiles,
    primaryButtonText,
    primaryButtonValue,
  }: any = useAppData('specialAboutFiber', true)

  const list = useMemo(() => {
    if (!tiles?.targetItems) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.targetItems) {
      const payload: any = {
        title: item?.title?.value,
        description: item?.description?.value,
        icon: <InjectHTML value={item?.icon?.value} />,
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  if (!tiles?.targetItems) {
    return null
  }
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = SPECIAL_ABOUT_FIBER.replace('{NAME}', primaryButtonText?.value)
  }
  return (
    <div id="special-about-fiber" className={classes.root}>
      <div className={classes.wrapper}>
        <Typography tagType="h2" styleType="h3" className={classes.h2Title}>
          {title?.value}
        </Typography>
        <Typography className={classes.title} styleType="p1">
          {subTitle?.value}
        </Typography>
        <div className={classes.tilesWrapper}>
          <FourTiles
            type="dark"
            textAlign="left"
            tiles={list}
            titleStyleType="h5"
            titleClassName={classes.tileTitle}
            descriptionClassName={classes.description}
            isClickable={false}
            cardClassName={classes.cardStyles}
          />
        </div>
        {primaryButtonText?.value && primaryButtonValue?.url && (
          <Button
            className={classes.primaryBtn}
            type="link"
            text={primaryButtonText?.value}
            href={primaryButtonValue?.url}
            onClick={onButtonClick}
          />
        )}
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.lightGray,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    paddingBottom: 80,
    paddingTop: 60,
    [breakpoints.down('xs')]: {
      padding: '60px 0px 0px 0px',
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
    [breakpoints.down('xs')]: {
      fontSize: '1.125rem',
      lineHeight: '26px',
      width: '81.5%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  h2Title: {
    textAlign: 'center',
    marginBottom: 16,
    [breakpoints.down('sm')]: {
      fontSize: '2.625rem',
      lineHeight: '50px',
    },
    [breakpoints.down('xs')]: {
      width: '81.5%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  tileCard: {
    paddingBottom: 60,
  },
  tilesWrapper: {
    marginTop: 32,
  },
  tileTitle: {
    [breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  description: { fontSize: '1.125rem', lineHeight: '1.625rem' },
  primaryBtn: {
    display: 'block',
    maxWidth: 278,
    margin: 'auto',
    marginTop: 48,
    marginBottom: 0,
    [breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  cardStyles: {
    [breakpoints.down('xs')]: {
      paddingLeft: '40px',
      paddingRight: '46px',
    },
  },
}))

export default SpecialAboutFiber
