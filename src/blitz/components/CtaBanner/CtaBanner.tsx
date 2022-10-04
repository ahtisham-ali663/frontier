import { Typography, Button } from 'src/blitz'
import { ICtaBannerProps } from './index'
import css from './CtaBanner.module.scss'

const CtaBanner = (props: ICtaBannerProps) => {
  const {
    secondaryButton = false,
    hoverVariant = 'primary',
    text = 'Check Availability',
    heading = `What's available with Frontier?`,
    buttonURL = '/order-online',
    domain = '',
  } = props

  return (
    <div className={css.ctaBanner}>
      <Typography
        className={css.heading}
        tagType="h2"
        styleType="h4"
        color="secondary"
      >
        {heading}
      </Typography>
      {!secondaryButton && (
        <Button
          variant="primary"
          hoverVariant={hoverVariant}
          type="link"
          className={css.ctaButton}
          href={`${domain}${buttonURL}`}
          {...{ text }}
        />
      )}
      {secondaryButton && (
        <Button
          variant="secondary"
          hoverVariant={hoverVariant}
          type="link"
          className={css.ctaButton}
          href={`${domain}${buttonURL}`}
          {...{ text }}
        />
      )}
    </div>
  )
}

export default CtaBanner
