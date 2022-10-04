import React from 'react'
import clx from 'classnames'
import { Typography } from 'src/blitz'
import css from './UtilityNav.module.scss'
import { IUtilityNavProps } from './index'

const UtilityNav: React.FunctionComponent<IUtilityNavProps> = ({
  sites,
  className,
  showCartLanguageBanner,
  cart,
  isReturningUser,
}) => {
  return (
    <nav className={clx(css.utilityNav, className)}>
      <div>
        {showCartLanguageBanner && !isReturningUser && (
          <div className={css.utilityNavRow}>
            <ul className={css.utilityNavList}>
              <li
                className={clx(css.utilityNavListItem)}
                key={'cartHref' + cart?.href}
              >
                <a href={cart?.href} data-testid="card-link">
                  <Typography
                    styleType="p2"
                    color="tertiary"
                    fontType="boldFont"
                  >
                    {cart?.title || ''}
                  </Typography>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={css.utilityNavRow}>
        <ul className={css.utilityNavList}>
          {sites?.map((item: any, i: number) => {
            const { href, site } = item
            return (
              <li
                className={clx(css.utilityNavListItem, {
                  [css.linkActive]: i === 0,
                })}
                key={site + i}
              >
                <a href={href} data-testid="nav-link">
                  <Typography
                    styleType="p3"
                    color="tertiary"
                    className={clx(css.utilityNavListItems, {
                      [css.linkActive]: i === 0,
                    })}
                  >
                    {site}
                  </Typography>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default UtilityNav
