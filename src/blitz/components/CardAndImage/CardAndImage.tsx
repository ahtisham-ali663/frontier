import { useEffect, useRef } from 'react'
import { InjectHTML } from 'src/blitz'
import { ICardAndImageProps } from './index'
import css from './CardAndImage.module.scss'
import { useWindowDimensions } from 'src/hooks'
import clx from 'classnames'

const CardAndImage = (props: ICardAndImageProps) => {
  const { width } = useWindowDimensions()
  const {
    heading,
    copy = '',
    imageMobile,
    imageTablet,
    altText,
    className = 'copyClassName',
  } = props
  const containerRef = useRef(null)
  const isMobile = width <= 768
  useEffect(() => {
    const targetElement: any = containerRef?.current
    if (isMobile) {
      targetElement.style.setProperty('--bg-mobile', `url(${imageMobile})`)
    } else {
      targetElement.style.setProperty('--bg-tablet', `url(${imageTablet})`)
    }
  }, [width, isMobile])

  return (
    <div className={css.cardAndImage}>
      <div className={css.contentLeft}>
        <InjectHTML
          className={css.heading}
          tagType="h2"
          styleType="h4"
          testId="test-heading"
          value={heading}
        />
        <InjectHTML
          className={clx(css.copy, className)}
          tagType="p"
          styleType="p1"
          testId="test-copy"
          value={copy}
        />
      </div>
      <div
        className={css.contentRight}
        data-testid="card-and-image-background"
        aria-label={altText}
        ref={containerRef}
      >
        &nbsp;
      </div>
    </div>
  )
}

export default CardAndImage
