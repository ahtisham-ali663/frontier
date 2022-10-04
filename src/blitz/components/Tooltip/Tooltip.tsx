import React, { useState, useRef } from 'react'
import { InjectHTML } from 'src/blitz'
import { ITooltip } from './types'
import clx from 'classnames'
import css from './Tooltip.module.scss'
import { useWindowDimensions } from 'src/hooks'

const Tooltip: React.FunctionComponent<ITooltip> = ({
  tooltipText,
  tooltipIcon,
  includeBorder = false,
  tooltipDirection = 'top',
  hideBorder = false,
  dropShadow = false,
}) => {
  const LEFT = -140
  const RIGHT = 140
  const [showPopover, setShowPopover] = useState(false)
  const tooltipRef: any = useRef(null)
  const { width } = useWindowDimensions()

  const windowWidth = width < window?.outerWidth ? width : window?.outerWidth
  const { left } = tooltipRef?.current?.getBoundingClientRect?.() || {}
  const offsetLeft = left ?? 0
  let TOOLTIP_LEFT = offsetLeft > Math.abs(LEFT) ? LEFT : -20
  let TOOLTIP_RIGHT =
    windowWidth - 25 - offsetLeft > RIGHT
      ? RIGHT
      : windowWidth - 25 - offsetLeft

  if (TOOLTIP_RIGHT < RIGHT) {
    const difference = RIGHT - TOOLTIP_RIGHT
    TOOLTIP_LEFT = TOOLTIP_LEFT - difference
  }

  if (TOOLTIP_LEFT > LEFT) {
    const difference = Math.abs(TOOLTIP_LEFT) - Math.abs(LEFT)
    TOOLTIP_RIGHT = TOOLTIP_RIGHT + difference
  }

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
      className={css.tooltipContainer}
    >
      {tooltipIcon}

      {showPopover && (
        <>
          <div
            className={clx(css.tooltipCloud, {
              [css.cloudBorder]: includeBorder,
              [css.bottomCloud]: tooltipDirection === 'bottom',
              [css.hideBorder]: hideBorder,
              [css.dropShadow]: dropShadow,
            })}
            style={{ left: TOOLTIP_LEFT, right: TOOLTIP_RIGHT }}
          >
            <InjectHTML
              className={css.tooltipText}
              styleType="p3"
              value={tooltipText}
            />
          </div>
          <div
            className={clx(css.tooltipCarrot, {
              [css.bottomTooltipCarrot]: tooltipDirection === 'bottom',
              [css.carrotDropShadow]: dropShadow,
              [css.hideBorder]: hideBorder,
            })}
          >
            &nbsp;
          </div>
        </>
      )}
    </div>
  )
}

export default Tooltip
