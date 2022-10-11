import React from 'react'
import { ITextIcon } from './types'
import { getBackgroundColor } from 'src/blitz/theme/colors/colors.helper'
import { Typography } from 'src/blitz'
import { Location } from 'src/blitz/assets/react-icons'
import css from './TextIcon.module.scss'
import clx from 'classnames'

const TextIcon: React.FC<ITextIcon> = ({
  iconColor,
  title,
  backgroundColor = 'white',
  fontType,
}) => {
  return (
    <div
      className={clx(
        css.iconText,
        getBackgroundColor(backgroundColor),
        'iconText',
      )}
    >
      <Location color={iconColor} />
      <Typography
        tagType="p"
        styleType="p3"
        color="default"
        fontType={fontType}
      >
        {title}
      </Typography>
    </div>
  )
}
export default TextIcon
