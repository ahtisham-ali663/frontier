import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles, Button, InjectHTML } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER, SPECIAL_ABOUT_FIBER } from 'src/constants'

const SpecialAboutFiber = () => {
  const classes = useStyles()
  const { title, subTitle, tiles, primaryButtonText, primaryButtonValue }: any =
    useAppData('specialAboutFiber', true)

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.list) {
      const payload: any = {
        title: item?.title?.value,
        description: item?.description?.rendered,
        icon: <InjectHTML value={item?.icon?.rendered} />,
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  if (!tiles?.list) {
    return null
  }
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = SPECIAL_ABOUT_FIBER.replace('{NAME}', primaryButtonText?.value)
  }
  return (
    <div id="special-about-fiber" className={classes.root}>
      <div className={classes.wrapper}>
        <Typography tagType="h2" styleType="h3" className={classes.title}>
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
            isClickable={false}
          />
        </div>
        <Button
          className={classes.primaryBtn}
          type="link"
          text={primaryButtonText?.value}
          href={primaryButtonValue?.value}
          onClick={onButtonClick}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.lightGray,
    marginTop: 80,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    paddingBottom: 80,
    paddingTop: 60,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  tileCard: {
    paddingBottom: 60,
  },
  tilesWrapper: {
    marginTop: 32,
  },
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
}))

export default SpecialAboutFiber
