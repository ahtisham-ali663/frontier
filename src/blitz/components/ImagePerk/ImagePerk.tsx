import React, { useRef } from 'react'
import clx from 'classnames'
import { getBackgroundColor } from 'src/blitz/theme/colors/colors.helper'
import { IImagePerk } from './types'
import css from './ImagePerk.module.scss'
import Stripes, { getStripeColor } from 'src/blitz/components/Stripes'
import Picture from '../Picture'

const ImagePerk: React.FunctionComponent<IImagePerk> = ({
  content,
  tabletBackgroundImage,
  mobileBackgroundImage,
  backgroundColor,
  contentAlign = '',
  backgroundColorContent = 'white',
  stripeColor = 'initial',
  className,
  contentClassName,
  contentBoxBorderRadius = false,
  linesBgColorsClass,
  imageStyleClassName,
  imageClassName,
}: IImagePerk) => {
  const containerRef = useRef(null)

  return (
    <div
      className={clx(
        className,
        css.imagePerk,
        getBackgroundColor(backgroundColor),
        {
          [css.textBoxRight]: contentAlign === 'right',
        },
      )}
      ref={containerRef}
    >
      <Stripes
        className={clx(linesBgColorsClass, getStripeColor(stripeColor))}
      ></Stripes>
      <div className={clx(className, css.imagePerkFlex)} ref={containerRef}>
        <div
          data-testid="test-imageperk-content"
          className={clx(
            css.textBox,
            getBackgroundColor(backgroundColorContent),
            contentClassName,
            {
              [css.borderRadius]: contentBoxBorderRadius == true,
            },
          )}
        >
          {content && content}
        </div>
        <div className={clx(className, imageStyleClassName, css.imageBox)}>
          <Picture
            testId="test-image"
            desktop={{ image: tabletBackgroundImage?.src || '' }}
            mobile={{
              image:
                mobileBackgroundImage?.src || tabletBackgroundImage?.src || '',
            }}
            altText={tabletBackgroundImage?.alt || ''}
            className={imageClassName}
          />
        </div>
      </div>
    </div>
  )
}

export default ImagePerk
