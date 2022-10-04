import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles, Button, InjectHTML } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER, OUR_FRONTIER_PROMISE } from 'src/constants'

const OurFrontierPromise = () => {
  const classes = useStyles()
  const { title, subTitle, tiles, primaryButtonText, primaryButtonValue }: any =
    useAppData('ourFrontierPromise', true)

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.list) {
      const payload: any = {
        title: item?.title?.value,
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
    s_objectID = OUR_FRONTIER_PROMISE.replace(
      '{NAME}',
      primaryButtonText?.value,
    )
  }

  return (
    <div id="frontier-promise" className={classes.root}>
      <div className={classes.wrapper}>
        <Typography
          tagType="h2"
          styleType="h3"
          color="tertiary"
          className={classes.title}
        >
          {title?.value}
        </Typography>
        <Typography
          tagType="p"
          styleType="h5"
          fontType="boldFont"
          className={classes.title}
          color="tertiary"
        >
          {subTitle?.value}
        </Typography>
        <div className={classes.tilesWrapper}>
          <FourTiles
            type="light"
            textAlign="center"
            tiles={list}
            titleClassName={classes.cardTitle}
            cardClassName={classes.card}
            titleStyleType="h4"
            isClickable={false}
          />
        </div>
        <Button
          className={classes.primaryBtn}
          type="link"
          variant="secondary"
          hoverVariant="secondary"
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
    background: colors.main.brightRed,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: '60px 16px',
    [breakpoints.up('md')]: {
      paddingBottom: 74,
    },
  },
  title: {
    textAlign: 'center',
    maxWidth: 995,
    margin: 'auto',
    marginBottom: 16,
  },
  tilesWrapper: {
    marginTop: 32,
  },
  card: {
    padding: '41px 32px 20px',
    [breakpoints.up('md')]: {
      padding: '41px 32px 36px',
    },
  },
  cardTitle: {
    [breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  primaryBtn: {
    display: 'block',
    maxWidth: 400,
    margin: 'auto',
    marginTop: 48,
    [breakpoints.down('xs')]: {
      marginTop: 56,
      maxWidth: '100%',
    },
  },
}))

export default OurFrontierPromise
