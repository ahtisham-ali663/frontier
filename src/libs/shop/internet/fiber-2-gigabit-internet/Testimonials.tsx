import { makeStyles } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import 'swiper/bundle'
SwiperCore.use([Pagination])

const Testimonials = () => {
  const { list } = useAppData('testimonials', true)

  const classes = useStyles()
  if (!list?.targetItems?.length) {
    return null
  }

  return (
    <div className={`${classes.root} testimonials`}>
      <Swiper
        className={`${classes.swiper}`}
        pagination={{ clickable: true }}
        allowSlideNext={true}
        allowSlidePrev={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={'auto'}
        width={330}
        autoplay={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            width: 330,
          },
          999: {
            slidesPerView: 1,
          },
        }}
      >
        {list.targetItems &&
          list.targetItems.map(
            ({ testimony, author }: any, i: number) =>
              testimony?.value &&
              author?.value && (
                <SwiperSlide
                  key={`testimony_${i}`}
                  className={classes.swiperCard}
                  data-testid="testimony"
                >
                  <p
                    data-testid="testimonyDescription"
                    className={classes.testimony}
                  >
                    {testimony?.value || ''}
                  </p>
                  <div data-testid="testimonyAuthor" className={classes.author}>
                    {author?.value || ''}
                  </div>
                </SwiperSlide>
              ),
          )}
      </Swiper>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: colors.main.midnightExpress,
    fontFamily: 'PP Object Sans',
    padding: '50px 20px',
    margin: '40px auto',

    '& .swiper-container': {
      maxWidth: '1200px',
      margin: 'auto',
      overflow: 'visible',
    },
    [theme.breakpoints.down('sm')]: {
      '& .swiper-container': {
        position: 'relative',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
      },
      '& .swiper-pagination': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        order: 1,
        marginTop: 20,
      },
      '& .swiper-pagination-bullet': {
        width: 9,
        height: 9,
        zIndex: 9,
        borderRadius: 5,
        backgroundColor: colors.main.lightGray,
        marginRight: 10,
        cursor: 'pointer',
      },
      '& .swiper-pagination-bullet-active': {
        backgroundColor: colors.main.brightRed,
      },
    },
    '& .swiper-wrapper': {
      position: 'relative',
      alignItems: 'stretch',
      [theme.breakpoints.up('md')]: {
        transform: 'none !important',
      },
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
      },
    },
  },
  testimony: {
    color: colors.main.midnightExpress,
    fontSize: 18,
    lineHeight: '1.4em',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  author: {
    textAlign: 'right',
    margin: 'auto 0 0 auto',
    fontWeight: 700,
    fontSize: 18,
    fontFamily: 'PP Object Sans Bold',
  },
  swiper: {
    height: '100%',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'space-between',
  },
  swiperSlide: {
    textAlign: 'center',
    height: '100%',
    fontSize: 16,
    background: colors.main.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
  },
  swiperCard: {
    backgroundColor: colors.main.white,
    padding: '30px',
    height: 'auto',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    [theme.breakpoints.up('md')]: {
      flex: '0 1 32%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      margin: '0 10px 0 0',
    },
  },
  slide: {
    padding: '60px 40px',
    maxWidth: 350,
    width: 290,
    [theme.breakpoints.up('lg')]: {
      padding: '50px 30px',
      minHeight: 400,
      width: 350,
    },
    [theme.breakpoints.down('lg')]: {
      padding: '50px 30px',
      minHeight: 400,
      width: 350,
      marginRight: 16,
    },
    [theme.breakpoints.down('md')]: {
      padding: '50px 30px',
      minHeight: 400,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
      minHeight: 350,
    },
  },
}))

export default Testimonials
