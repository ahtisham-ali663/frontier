import React, { useRef, useEffect } from 'react'
import clx from 'classnames'
import { Typography, InjectHTML, Button } from 'src/blitz'
import { IHeroProps, ITitleProps } from './types'
import css from './Hero.module.scss'

const Hero: React.FunctionComponent<IHeroProps> = ({
  subHeader,
  primaryButton,
  secondaryButton,
  backgroundImage,
  mobileBackgroundImage,
  title1,
  title1Color,
  title2,
  title2Color,
  titleTagType = 'h1',
  className,
  contentClassName,
  legalText,
}: IHeroProps) => {
  const containerRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      const targetElement: any = containerRef?.current
      if (targetElement?.style?.setProperty) {
        targetElement.style.setProperty(
          '--bg-desktop',
          `url(${backgroundImage})`,
        )
        targetElement.style.setProperty(
          '--bg-mobile',
          `url(${mobileBackgroundImage})`,
        )
      }
    }, 200)
  }, [containerRef])

  return (
    <div id="hero" className={clx(css.hero, className)} ref={containerRef}>
      <div className={clx(css.heroContainer, contentClassName)}>
        <div className={css.heroLeft}>
          {title1 &&
            title2 &&
            (titleTagType === 'h2' ? (
              <h2 className={css.h1Hero}>
                <Title
                  title1={title1}
                  title2={title2}
                  title1Color={title1Color}
                  title2Color={title2Color}
                />
              </h2>
            ) : (
              <h1 className={css.h1Hero}>
                <Title
                  title1={title1}
                  title2={title2}
                  title1Color={title1Color}
                  title2Color={title2Color}
                />
              </h1>
            ))}
          {subHeader && (
            <InjectHTML
              className={css.subHeader}
              styleType="h5"
              tagType="p"
              value={subHeader as string}
            />
          )}
          {(primaryButton || secondaryButton) && (
            <div className={css.buttonsContainer}>
              {primaryButton && (
                <Button
                  {...primaryButton}
                  hoverVariant="secondary"
                  className={clx(primaryButton.className, css.primaryButton)}
                />
              )}
              {secondaryButton && (
                <Button
                  {...secondaryButton}
                  hoverVariant="secondary"
                  className={clx(
                    secondaryButton.className,
                    css.secondaryButton,
                  )}
                />
              )}
            </div>
          )}
          {legalText && (
            <InjectHTML
              className={css.legalText}
              tagType="p"
              data-testid="caption"
              styleType="legal"
              value={legalText as string}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const Title = (props: ITitleProps) => {
  return (
    <>
      {props?.title1 && (
        <InjectHTML
          color={props?.title1Color || 'tertiary'}
          styleType="h1"
          className={css.h1MainTitle}
          value={props?.title1 as string}
        />
      )}
      {props?.title2 && (
        <Typography
          styleType="h1"
          color={props?.title2Color || 'secondary'}
          className={css.h1MainTitle}
        >
          {props?.title2}
        </Typography>
      )}
    </>
  )
}

export default Hero
