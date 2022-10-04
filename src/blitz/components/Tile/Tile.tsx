import React from 'react'
import clx from 'classnames'
import { ITile } from './types'
import css from './Tile.module.scss'
import { getBackgroundColor } from 'src/blitz/theme/colors/colors.helper'
import { Typography, InjectHTML, Button } from 'src/blitz'

const Tile: React.FC<ITile> = ({
  className,
  title,
  description,
  ctas,
  backgroundColor = 'white',
  links,
}) => {
  return (
    <div
      className={clx(css.tile, getBackgroundColor(backgroundColor), className)}
    >
      {title && (
        <Typography styleType="h4" {...title}>
          {title?.children}
        </Typography>
      )}
      {description && <InjectHTML styleType="p1" {...description} />}
      {links &&
        links.map((link, i) => (
          <a
            key={`${link?.text?.children}-${i}`}
            {...link}
            className={clx(css.link, link?.className)}
          >
            <Typography {...link.text}>{link?.text?.children}</Typography>
          </a>
        ))}
      {ctas && (
        <div className={css.ctas}>
          {ctas.map((cta, i) => (
            <Button key={`${cta.label}-${i}`} text={cta.label} {...cta} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Tile
