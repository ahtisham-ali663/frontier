import { useMemo } from 'react'
import clx from 'classnames'
import { makeStyles } from '@material-ui/core'
import { useAppData } from 'src/hooks'
import { Typography, FourTiles, Button, InjectHTML } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'

const ExploreFrontierSecureServices = () => {
  const classes = useStyles()
  const { title, tiles }: any = useAppData('frontierSecureServicesData', true)
  const list = useMemo(() => {
    if (!tiles?.targetItems) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.targetItems) {
      const payload: any = {
        icon: <InjectHTML value={item?.icon?.rendered} />,
        title: item?.title?.value,
        description: item?.description?.value,
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  const renderData = (itemIndex: number) => {
    const targetItem = tiles?.targetItems?.[itemIndex]
    return (
      <div className={classes.renderContentWrapper}>
        <div className={classes.priceTagContainer}>
          <Typography styleType="h3" className={'price'}>
            {targetItem?.price?.value}
          </Typography>
          {targetItem?.period?.value && (
            <Typography
              className={'period'}
            >{`/${targetItem?.period?.value}`}</Typography>
          )}
        </div>
        <Button
          type="link"
          href={targetItem?.primaryButtonUrl?.url}
          text={targetItem?.primaryButtonText?.value}
          variant="secondary"
          hoverVariant="secondary"
          className={classes.cta}
        />
        <InjectHTML
          styleType="p3"
          className={clx(classes.addOnText, 'addOnText')}
          color="primary"
          fontType="boldFont"
          value={targetItem?.addOnText?.value}
        />
      </div>
    )
  }

  return (
    <div className={classes.wrapper} id="more">
      <Typography tagType="h3" styleType="h3" className={classes.title}>
        {title?.value}
      </Typography>
      <FourTiles
        type="red"
        textAlign="left"
        cardClassName={classes.tileCard}
        tiles={list}
        titleClassName={classes.tileTitle}
        isClickable={false}
        hoverStyle="primary"
        renderData={renderData}
        mobileOneCol
        tabletTwoCol
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: '48px 16px',
  },
  title: {
    marginTop: '16px',
    marginBottom: '32px',
    maxWidth: 540,
  },
  tileTitle: {
    minHeight: 'unset',
    marginBottom: 8,
    [breakpoints.down('sm')]: {
      paddingRight: 0,
    },
    color: colors.main.dark,
  },
  tileCard: {
    padding: `24px 20px`,
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${colors.main.borderGrey}`,
    '&:last-child': {
      border: `1px solid ${colors.main.borderGrey}`,
    },
    '&:nth-child(2)': {
      border: `1px solid ${colors.main.borderGrey}`,
    },
    '&:hover': {
      '& .addOnText': {
        color: colors.main.white,
      },
      '& .price': {
        color: colors.main.greenishBlue,
        [breakpoints.down('sm')]: {
          fontSize: typography.pxToRem(42),
        },
      },
      '& .period': {
        color: colors.main.white,
      },
    },
  },
  priceTagContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    margin: '24px 0px',
    minHeight: 50,
  },
  addOnText: {
    marginTop: 12,
  },
  renderContentWrapper: {
    marginTop: 'auto',
  },
  cta: {
    padding: '0.625rem 0',
  },
}))

export default ExploreFrontierSecureServices
