import React from 'react'
import clx from 'classnames'
import { Button, InjectHTML } from 'src/blitz'
import { FOUR_TILES } from 'src/constants'
import { getFontColor } from 'src/blitz/theme/colors/colors.helper'
import { IFourTiles, IFourTileItem } from './types'
import css from './FourTiles.module.scss'
import * as ReactDOMServer from 'react-dom/server'
const FourTiles: React.FunctionComponent<IFourTiles> = ({
  tiles = [],
  type = 'light',
  textAlign = 'center',
  mobileOneCol = false,
  tabletTwoCol = false,
  tabletOneCol = false,
  titleClassName = '',
  titleStyleType = 'h6',
  descriptionClassName = '',
  cardClassName = '',
  isClickable = true,
  disableHover = false,
  hoverStyle = '',
  roundedBorders = false,
  buttonClassName = '',
  renderData,
}: IFourTiles) => {
  return (
    <div
      className={clx(css.fourTiles, {
        [css.threeTiles]: tiles?.length === 3,
        [css.mobileOneCol]: mobileOneCol,
        [css.tabletTwoCol]: tabletTwoCol,
        [css.tabletOneCol]: tabletOneCol,
      })}
    >
      {tiles.map((tile: IFourTileItem, i: number) => (
        <TileWrapper
          key={i}
          isClickable={isClickable}
          href={tile.href}
          objectID={tile.objectID}
          title={tile.title}
          className={clx(
            css.tile,
            css.light,
            cardClassName,
            {
              [css.roundedBorders]: roundedBorders,
            },
            {
              [css.alignRight]: textAlign === 'right',
              [css.alignLeft]: textAlign === 'left',
              [css.alignCenter]: textAlign !== 'right' && textAlign !== 'left',
              [css.dark]: type === 'dark',
              [css.red]: type === 'red',
              [css.hoverRed]:
                ((tile.href && type === 'light') || hoverStyle === 'red') &&
                !disableHover,
              [css.hoverPrimary]:
                ((tile.href && type === 'dark') || hoverStyle === 'primary') &&
                !disableHover,
            },
          )}
        >
          {tile?.icon && (
            <div className={clx(css.icon, 'tile-icon')}>{tile?.icon}</div>
          )}
          {tile.title && (
            <InjectHTML
              testId="test-title"
              styleType={titleStyleType}
              tagType="h3"
              className={clx(css.title, titleClassName, 'title', {
                [css.lightFont]: type === 'dark',
                [getFontColor('primary')]: type === 'red',
              })}
              value={tile.title}
            />
          )}
          {tile.description && (
            <InjectHTML
              testId="test-description"
              color={type === 'red' ? 'default' : 'default'}
              className={clx(css.description, descriptionClassName, {
                [css.lightFont]: type === 'dark',
              })}
              value={tile.description}
            />
          )}
          {renderData && renderData(i)}
          {tile?.button && (
            <Button
              type="link"
              variant={tile?.button?.variant}
              text={tile?.button?.text}
              disabled={true}
              href={tile?.button?.href}
              className={(clx(css.tileButton), buttonClassName)}
              objectID={tile?.button?.objectID}
            />
          )}
        </TileWrapper>
      ))}
    </div>
  )
}

const TileWrapper = ({
  isClickable,
  href,
  children,
  className,
  title,
  objectID,
}: any) => {
  const markup = ReactDOMServer.renderToStaticMarkup(children)
  return isClickable ? (
    <InjectHTML
      testId="test-tile-description"
      enableClick
      className={className}
      value={`<a href="${href}" onclick="s_objectID='${
        objectID ? objectID : FOUR_TILES.replace('{NAME}', title.toLowerCase())
      }'"
      } >${markup}</a>`}
    />
  ) : (
    <div className={className}>{children}</div>
  )
}

export default FourTiles
