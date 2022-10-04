import React from 'react'
import clx from 'classnames'
import { Typography, Button, InjectHTML } from 'src/blitz'
import { ITitleWithButtonProps } from './index'
import {
  getBackgroundColor,
  getFontColor,
} from 'src/blitz/theme/colors/colors.helper'
import css from './TitleWithButton.module.scss'
const getButtonColor = (color: any = 'initial') => {
  switch (color) {
    case 'white':
      return css.whiteBtn
    default:
      return ''
  }
}
const TitleWithButton: React.FunctionComponent<ITitleWithButtonProps> = (
  props,
) => {
  const {
    buttonText,
    buttonURL,
    title,
    backgroundColor,
    disclaimerNote,
    titleFontColor = 'initial',
    hoverVariant,
    buttonVariant,
    buttonColor,
    buttonType,
    className,
  } = props
  return (
    <div
      className={clx(css.root, getBackgroundColor(backgroundColor), className)}
    >
      <Typography
        tagType="h4"
        styleType="h4"
        testId="test-title"
        className={clx(getFontColor(titleFontColor))}
      >
        {title}
      </Typography>

      <Button
        variant={buttonVariant}
        hoverVariant={hoverVariant}
        className={clx(css.button, getButtonColor(buttonColor))}
        text={buttonText}
        type={buttonType}
        href={`${buttonURL}`}
      />
      {disclaimerNote && (
        <InjectHTML tagType="p" styleType="p4" value={disclaimerNote} />
      )}
    </div>
  )
}

export default TitleWithButton
