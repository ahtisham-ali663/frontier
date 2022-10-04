import { useMemo } from 'react'
import { SwiperQuotes } from 'src/blitz'
import { useAppData } from 'src/hooks'

const Testimonials = () => {
  const { list, title } = useAppData('testimonials', true)
  const slides = useMemo(() => {
    if (!list?.targetItems) {
      return []
    }
    return list?.targetItems?.map(({ testimony, author }: any) => ({
      quote: testimony?.value,
      credit: author?.value,
    }))
  }, [list])
  return <SwiperQuotes heading={title?.value} slides={slides} />
}

export default Testimonials
