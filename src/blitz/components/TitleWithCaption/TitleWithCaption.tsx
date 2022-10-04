import React from 'react'
import clx from 'classnames'
import { Typography } from 'src/blitz'
import { ITitleWithCaptionProps } from './index'
import {
  getBackgroundColor,
  getFontColor,
} from 'src/blitz/theme/colors/colors.helper'
import css from './TitleWithCaption.module.scss'

const TitleWithCaption: React.FunctionComponent<ITitleWithCaptionProps> = (
  props,
) => {
  const { buttonText, title, backgroundColor, fontColor = 'initial' } = props
  return (
    <div className={clx(css.root, getBackgroundColor(backgroundColor))}>
      <Typography
        tagType="h3"
        styleType="h3"
        testId="test-title"
        className={clx(getFontColor(fontColor))}
      >
        {title}
      </Typography>
      <Typography
        tagType="div"
        styleType="p1"
        className={clx(css.caption, getFontColor(fontColor))}
        testId="test-caption"
      >
        {buttonText}
      </Typography>
    </div>
  )
}

export default TitleWithCaption
