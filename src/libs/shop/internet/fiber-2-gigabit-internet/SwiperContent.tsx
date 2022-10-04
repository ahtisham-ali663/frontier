import { useMemo, useState } from 'react'
import { useAppData } from 'src/hooks'
import { InjectHTML, Picture } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import colors from 'src/styles/theme/colors'
import SwiperTabs from './SwiperTabs'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import { TAB_CLICK, SITE_INTERACTION } from 'src/constants'
SwiperCore.use([Navigation])

const SwiperContent = () => {
  const classes = useStyles()
  const { list } = useAppData('carousel', true)
  const items = list?.targetItems || []
  const [selectedTab, setSelectedTab] = useState(0)
  const [swiper, setSwiper] = useState<any>(null)

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

  return (
    <div className={classes.root} id="more">
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
              <div>
                <Picture
                  data-testid="cardImage"
                  desktop={{
                    image: slideContent?.image?.src,
                    webp: slideContent?.imagewebp?.src,
                  }}
                  altText={slideContent?.image?.value}
                  className={classes.slideImage}
                />
                <div className={classes.slideTextWrapper}>
                  <InjectHTML
                    className={classes.subTitle}
                    tagType="p"
                    testId={`subTitle-${index}`}
                    styleType="p1"
                    value={slideContent?.subTitle?.value}
                  />
                  <InjectHTML
                    className={classes.description}
                    tagType="p"
                    data-testid={`subTitle-${index}`}
                    styleType="p1"
                    value={slideContent?.description?.value}
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1050,
    padding: '0px 60px',
    margin: 'auto',
    position: 'relative',
    '& .swiper-button-disabled': {
      opacity: 0.3,
    },
    [breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  swiper: {
    height: '100%',
    display: 'block',
    margin: 'auto',
    position: 'relative',
    marginTop: 30,
    '& .swiper-wrapper': {
      display: 'flex',
    },
    '& .swiper-horizontal': {
      display: 'flex',
    },
  },
  leftArrow: {
    position: 'absolute',
    top: 300,
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
    [breakpoints.down('md')]: {
      height: 50,
      width: 50,
      top: 250,
      '& svg': {
        height: 50,
        width: 50,
      },
    },
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rightArrow: {
    position: 'absolute',
    top: 300,
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
    [breakpoints.down('md')]: {
      height: 50,
      width: 50,
      top: 250,
      '& svg': {
        height: 50,
        width: 50,
      },
    },
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  subTitle: {
    fontFamily: 'PP Object Sans Bold',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '1.4',
    color: colors.main.brightRed,
    margin: 0,
    marginTop: 30,
  },
  description: {
    fontSize: 18,
    marginLeft: 200,
    maxWidth: 510,
    flex: '1',
    marginTop: 30,
    '& strong': {
      fontFamily: 'PP Object Sans Bold',
    },
    '& p': {
      margin: 0,
    },
    [breakpoints.down('md')]: {
      marginLeft: 0,
      maxWidth: 'unset',
      marginTop: 10,
      fontSize: 16,
    },
  },
  slideTextWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('md')]: {
      display: 'block',
    },
  },
  slideImage: {
    width: '100%',
  },
}))

export default SwiperContent
