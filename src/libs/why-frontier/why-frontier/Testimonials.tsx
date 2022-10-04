import { useMemo } from 'react'
import { makeStyles } from '@material-ui/styles'
import { SwiperQuotes } from 'src/blitz'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const Testimonials = () => {
  const { list, title } = useAppData('testimonials', true)
  const classes = useStyles()
  const slides = useMemo(() => {
    if (!list?.targetItems) {
      return []
    }
    return list?.targetItems?.map(({ testimony, author }: any) => ({
      quote: testimony?.value,
      credit: author?.value,
    }))
  }, [list])

  return (
    <SwiperQuotes
      heading={title?.value}
      slides={slides}
      className={classes.root}
      titleClassName={classes.titleHeader}
      quoteClassName={classes.quoteClassName}
      pagination
    />
  )
}

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.main.dark,
    '& path': {
      stroke: colors.main.white,
    },
    '& svg': {
      '&:hover': {
        '& path': {
          stroke: colors.main.greenishBlue,
        },
      },
    },
    '& .swiper-container': {
      paddingBottom: 75,
    },
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
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& .swiper-pagination-horizontal': {
      bottom: 30,
    },
    '& .swiper-pagination-bullet': {
      width: 12,
      height: 12,
      zIndex: 9,
      borderRadius: 6,
      backgroundColor: colors.main.opaqueWhite,
      marginRight: 16,
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: colors.main.primaryRed,
    },
  },
  titleHeader: {
    color: colors.main.white,
  },
  quoteClassName: {
    color: colors.main.greenishBlue,
  },
})

export default Testimonials
