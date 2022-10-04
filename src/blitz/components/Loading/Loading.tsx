import React from 'react'
import { ILoading } from './types'
import css from './Loading.module.scss'
import clx from 'classnames'
import { getDotColor } from './Loading.helper'

const Loading: React.FunctionComponent<ILoading> = ({
  dotColor = 'primary',
  className,
}: ILoading) => {
  return (
    <div className={clx(css.loading, getDotColor(dotColor), className)}>
      <span className={clx(css.loading__dot)}></span>
      <span className={clx(css.loading__dot)}></span>
      <span className={clx(css.loading__dot)}></span>
    </div>
  )
}

export default Loading
