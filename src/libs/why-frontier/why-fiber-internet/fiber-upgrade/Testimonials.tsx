import { useMemo } from 'react'
import { SwiperQuotes } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { makeStyles } from '@material-ui/core'
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
      className={classes.containerClassName}
      heading={title?.value}
      titleClassName={classes.titleClassName}
      slides={slides}
      quoteClassName={classes.quoteClassName}
      creditClassName={classes.creditClassName}
    />
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  containerClassName: {
    [breakpoints.down('sm')]: {
      padding: '4rem 0',
    },
  },
  titleClassName: {
    [breakpoints.down('sm')]: {
      marginBottom: '1.125rem !important',
    },
  },
  creditClassName: {
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  quoteClassName: {
    maxWidth: '910px !important',
    fontSize: '1.875rem',
    lineHeight: '2.375rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },
}))
export default Testimonials
