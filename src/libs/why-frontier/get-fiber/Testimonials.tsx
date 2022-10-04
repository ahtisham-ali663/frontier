import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
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
      creditClassName={classes.authorTitle}
      paginationPreviousButtonClass={classes.slidePreviousButtons}
      paginationNextButtonClass={classes.slideNextButtons}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
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
    fontWeight: 400,
  },
  authorTitle: {
    color: colors.main.white,
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  quoteClassName: {
    color: colors.main.greenishBlue,
    maxWidth: '910px !important',
    fontSize: '1.875rem',
    lineHeight: '2.375rem',
    [breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },
  slidePreviousButtons: {
    [breakpoints.down('sm')]: {
      right: '35%',
      left: '0 !important',
      top: 'calc(100% + 10px) !important',
      zIndex: '2!important',
    },
  },
  slideNextButtons: {
    [breakpoints.down('sm')]: {
      left: '35%',
      top: 'calc(100% + 10px) !important',
      right: '0 !important',
      zIndex: '2!important',
    },
  },
}))

export default Testimonials
