import { useMemo, useState, useRef, useEffect } from 'react'
import { useAppData } from 'src/hooks'
import { Typography, Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import colors from 'src/styles/theme/colors'
import SwiperTabs from './SwiperTabs'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import { CheckMarkBlack } from 'src/blitz/assets/react-icons'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import { TAB_CLICK, SITE_INTERACTION } from 'src/constants'
SwiperCore.use([Navigation])

const SwiperContent = () => {
  const classes = useStyles()
  const { title, subTitle, list } = useAppData('carouselWithPerks', true)
  const items = list?.targetItems || []
  const [selectedTab, setSelectedTab] = useState(0)
  const [swiper, setSwiper] = useState<any>(null)
  const [containerHeight, setContainerHeight] = useState(600)
  const containerRef = useRef(null)

  const tabs = useMemo(() => {
    return items?.map(({ title }: any) => title?.value) || []
  }, [items])

  const onTabChange = (newTabIndex: number) => {
    DTMClient.triggerEvent(
      {
        events: 'event14',
        eVar14: TAB_CLICK.replace('{NAME}', tabs[newTabIndex].toLowerCase()),
      },
      'tl_o',
      SITE_INTERACTION,
    )
    setSelectedTab(newTabIndex)
    if (swiper) {
      swiper?.slideTo?.(newTabIndex + 1)
    }
  }

  const onNavigateLeft = () => {
    const newTabIndex = selectedTab === 0 ? items.length - 1 : selectedTab - 1
    onTabChange(newTabIndex)
  }

  const onNavigateRight = () => {
    const newTabIndex = selectedTab === items.length - 1 ? 0 : selectedTab + 1
    onTabChange(newTabIndex)
  }

  const onSlideChange = ({ snapIndex }: any) => {
    if (selectedTab - 1 !== selectedTab) {
      let newSnapIndex = 0
      if (snapIndex === 0 || snapIndex - 1 > items.length - 1) {
        newSnapIndex = 0
      } else {
        newSnapIndex = snapIndex - 1
      }
      setSelectedTab(newSnapIndex)
    }
  }

  const handleResize = () => {
    setContainerHeight(600)
    //@ts-ignore
    setContainerHeight(containerRef?.current?.offsetHeight || 600)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    handleResize()
  }, [tabs])

  if (!tabs || tabs?.length === 0) {
    return null
  }

  return (
    <div className={classes.root} id="more">
      <Typography tagType="h2" styleType="h3" className={classes.title}>
        {title?.value}
      </Typography>
      <Typography styleType="p2" className={classes.desc}>
        {subTitle?.value}
      </Typography>
      <SwiperTabs
        tabs={tabs}
        selectedTabIndex={selectedTab}
        setSelectedTab={onTabChange}
      />

      <div className={classes.leftArrow} onClick={onNavigateLeft}>
        <KeyboardArrowLeftIcon />
      </div>
      <div className={classes.rightArrow} onClick={onNavigateRight}>
        <KeyboardArrowRightIcon />
      </div>
      <div ref={containerRef}>
        <Swiper
          onSwiper={setSwiper}
          className={classes.swiper}
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={onSlideChange}
          loop={true}
          simulateTouch={false}
        >
          {items?.map((slideContent: any, index: number) => {
            return (
              <SwiperSlide key={`swiper-slide-${index}`}>
                <Grid
                  container
                  style={{ minHeight: containerHeight }}
                  className={classes.gridContainer}
                >
                  <Grid item md={6} sm={12} className={classes.leftContainer}>
                    <img
                      src={slideContent?.image?.src}
                      alt={slideContent?.title?.value}
                      className={classes.slideImage}
                    />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <div className={classes.slideTextWrapper}>
                      <div className={classes.contentWrapper}>
                        <InjectHTML
                          className={classes.subTitle}
                          tagType="h3"
                          styleType="h4"
                          color="secondary"
                          value={slideContent?.heading?.value}
                        />
                        <InjectHTML
                          tagType="p"
                          styleType="p1"
                          color="tertiary"
                          className={classes.subTitleText}
                          value={slideContent?.subTitle?.value}
                        />
                        <ul className={classes.perksList}>
                          {slideContent?.perks?.targetItems?.map(
                            (perk: any, index: number) => {
                              return (
                                <li
                                  key={`perk-${title?.value}-${index}`}
                                  className={classes.bullets}
                                >
                                  <div className={classes.iconWrapper}>
                                    <CheckMarkBlack height={16} width={16} />
                                  </div>
                                  <InjectHTML
                                    styleType="p1"
                                    color="tertiary"
                                    value={perk?.title?.value}
                                  />
                                </li>
                              )
                            },
                          )}
                        </ul>
                        <Button
                          type="link"
                          hoverVariant="secondary"
                          href={slideContent?.primaryButtonLink?.url}
                          text={slideContent?.primaryButtonText?.value}
                          className={classes.primaryBtn}
                        />
                        {slideContent?.disclaimer?.value && (
                          <InjectHTML
                            styleType="legal"
                            color="tertiary"
                            className={classes.disclaimer}
                            value={slideContent?.disclaimer?.value}
                          />
                        )}
                      </div>
                      {slideContent?.description?.value && (
                        <InjectHTML
                          className={classes.description}
                          value={slideContent?.description?.value}
                        />
                      )}
                    </div>
                  </Grid>
                </Grid>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1200,
    padding: '0px 60px',
    margin: 'auto',
    position: 'relative',
    [breakpoints.down('sm')]: {
      padding: 10,
    },
  },
  swiper: {
    height: '100%',
    display: 'block',
    margin: 'auto',
    position: 'relative',
    '& swiper-wrapper': {
      display: 'flex',
    },
    '& .swiper-slide': {
      alignSelf: 'stretch',
      alignContent: 'stretch',
    },
  },
  leftArrow: {
    position: 'absolute',
    top: '50%',
    height: 50,
    width: 50,
    left: 0,
    cursor: 'pointer',
    display: 'block',
    '& svg': {
      height: 50,
      width: 50,
      '&:hover': {
        fill: colors.main.brightRed,
      },
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    height: 50,
    width: 50,
    right: 0,
    cursor: 'pointer',
    display: 'block',
    '& svg': {
      height: 50,
      width: 50,
      '&:hover': {
        fill: colors.main.brightRed,
      },
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  subTitle: {
    marginBottom: 8,
  },
  subTitleText: {
    lineHeight: '26px',
  },
  description: {
    background: colors.main.greenishBlue,
    marginBottom: 32,
    padding: '8px 80px',
    paddingRight: 0,
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: `" "`,
      left: 0,
      right: 0,
      top: '-6px',
      width: '100%',
      height: 2,
      backgroundColor: colors.main.greenishBlue,
    },
    '&::after': {
      position: 'absolute',
      content: `" "`,
      left: 0,
      right: 0,
      bottom: '-6px',
      width: '100%',
      height: 2,
      backgroundColor: colors.main.greenishBlue,
    },
    [breakpoints.down('sm')]: {
      padding: 8,
    },
    '& > span > div > p': {
      lineHeight: 1.5,
      margin: 'auto',
    },
    '& small': {
      fontSize: 10,
      lineHeight: '14px',
      display: 'block',
      marginTop: 6,
    },
    '& strong': {
      fontSize: '16px !important',
      lineHeight: '24px !important',
      [breakpoints.down('sm')]: {
        fontSize: '14px !important',
        lineHeight: '20px !important',
      },
    },
    '& img': {
      height: '120px !important',
      width: '120px !important',
      marginTop: 'auto !important',
      marginBottom: 'auto !important',
    },
  },
  slideTextWrapper: {
    background: colors.main.dark,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    [breakpoints.down('sm')]: {
      maxHeight: 450,
    },
  },
  title: {
    marginTop: 80,
    marginBottom: 16,
    textAlign: 'center',
  },
  desc: {
    marginBottom: 16,
    textAlign: 'center',
  },
  perksList: {
    listStyle: 'none',
    padding: 0,
    marginTop: 16,
  },
  disclaimer: {
    marginTop: 52,
  },
  primaryBtn: {
    marginTop: 32,
    maxWidth: 278,
    display: 'block',
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  contentWrapper: {
    margin: 80,
    marginBottom: 16,
    [breakpoints.down('sm')]: {
      margin: 32,
    },
  },
  bullets: {
    display: 'flex',
    minHeight: 24,
    marginBottom: 8,
    '& sup': {
      lineHeight: 0,
    },
  },
  iconWrapper: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginTop: 2,
    '& path': {
      stroke: colors.main.greenishBlue,
    },
  },
  leftContainer: {
    width: '100%',
  },
  gridContainer: {
    background: colors.main.dark,
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

export default SwiperContent
