import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FRONTIER_SECURE_BANNER, YOUTUBE_TV_BANNER } from 'src/constants'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Hero } from 'src/blitz'
import { useAppData } from 'src/hooks'
SwiperCore.use([Pagination, Autoplay])
const FIRST_BANNER_INDEX = 0
const BannerCarousal = () => {
  const classes = useStyles()
  const { list } = useAppData('carousel', true)
  const banners = useMemo(() => {
    if (!list?.targetItems) {
      return []
    }
    const bannerList = list?.targetItems?.map((item: any, index: number) => ({
      ...item,
      titleTagType: index === FIRST_BANNER_INDEX ? 'h1' : 'h2',
      objectID:
        index === FIRST_BANNER_INDEX
          ? YOUTUBE_TV_BANNER
          : FRONTIER_SECURE_BANNER,
    }))
    return bannerList
  }, [list])
  return (
    <div id="swiper">
      <Swiper
        className={classes.swiper}
        pagination={{
          clickable: true,
        }}
        allowSlideNext={true}
        allowSlidePrev={true}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {banners?.map((row: any, key: number) => (
          <SwiperSlide id={`slide-${key}`} key={`carousal-${key}`}>
            <Hero
              title1={row?.title?.value}
              title2={row?.title2?.value}
              subHeader={row?.subTitle?.value}
              primaryButton={{
                type: 'link',
                href: row?.primaryButtonLink?.url,
                text: row?.primaryButtonText?.value,
                objectID: row?.objectID,
                className: classes.learnMoreBtn,
              }}
              backgroundImage={row?.image?.src}
              mobileBackgroundImage={row?.mobileImage?.src}
              titleTagType={row?.titleTagType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    margin: 'auto',
    paddingLeft: 20,
    paddingTop: 20,
    width: '100vw',
    [breakpoints.down('sm')]: {
      paddingBottom: 40,
    },
  },
  saveDealsImage: {
    objectFit: 'contain',
    width: '100%',
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // maxWidth: 500,
    height: '100%',
    margin: 'auto',
    [breakpoints.down('sm')]: {
      paddingLeft: 30,
      marginBottom: 50,
    },
  },
  learnMoreBtn: {
    display: 'block',
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  title: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 48,
    [breakpoints.down('md')]: {
      fontSize: 28,
    },
  },
  description: {
    fontSize: 30,
    lineHeight: '38px',
    [breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '22px',
    },
  },
  swiper: {
    height: '100%',
    display: 'block',
    margin: 'auto',
    position: 'relative',
    '& .swiper-wrapper': {
      display: 'flex',
    },
    '& .swiper-horizontal': {
      display: 'flex',
    },
    '& .swiper-pagination': {
      position: 'absolute',
      bottom: 20,
      height: 20,
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& .swiper-pagination-horizontal': {
      bottom: 30,
    },
    '& .swiper-pagination-bullet': {
      width: 9,
      height: 9,
      zIndex: 9,
      borderRadius: 5,
      backgroundColor: colors.main.grey,
      marginRight: 10,
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: colors.main.primaryRed,
    },
  },
}))

export default BannerCarousal
