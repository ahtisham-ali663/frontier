import { Typography } from 'src/blitz'
import { ChevronRight } from 'src/blitz/assets/react-icons'
import clx from 'classnames'
import { IBreadcrumb } from './types'
import css from './Breadcrumb.module.scss'

const Breadcrumb = ({
  variant = 'primary',
  links,
  hoverEffect = false,
}: IBreadcrumb) => {
  return (
    <div data-testid="breadcrumb" className={css.container}>
      {links?.map(({ pageName, href, isCurrent }, index) => {
        return (
          <span
            key={`breadcrumb-${pageName}`}
            className={clx(css.navElement, {
              [css.secondaryNavLink]: variant === 'secondary',
            })}
          >
            {isCurrent ? (
              <Typography
                color={variant === 'primary' ? 'default' : 'tertiary'}
                className={css.linkText}
              >
                {pageName}
              </Typography>
            ) : (
              <a href={href}>
                <Typography
                  className={clx(css.linkText, {
                    [css.hoverEffect]: hoverEffect,
                  })}
                  fontType="mediumFont"
                  color={variant === 'primary' ? 'default' : 'tertiary'}
                >
                  {pageName}
                </Typography>
              </a>
            )}
            {links?.length !== index + 1 && <ChevronRight />}
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb
