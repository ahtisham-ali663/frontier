import React, { useState, useEffect } from 'react'
import clx from 'classnames'
import { useWindowDimensions } from 'src/hooks'
import { Typography } from 'src/blitz'
import { ChevronDownWhite, ChevronDown } from 'src/blitz/assets/react-icons'
import { NavAccordionProps, NavMenuProps } from './index'
import css from './NavAccordion.module.scss'

const NavMenu: React.FunctionComponent<NavMenuProps> = (props) => {
  const { width } = useWindowDimensions()
  const isMobileOrTablet = width <= 1023
  const { menu } = props
  const [currentActiveAccordion, setCurrentActiveAccordion] = useState<{
    [title: string]: boolean
  }>({})
  useEffect(() => {
    if (isMobileOrTablet) {
      const firstItemTitle = menu?.[0].title || ''
      setCurrentActiveAccordion({ [firstItemTitle]: true })
    } else {
      setCurrentActiveAccordion({})
    }
  }, [isMobileOrTablet])

  const onAccorodionDropdownClick = (title: string, isOpen: boolean) => {
    setCurrentActiveAccordion({ [title]: isOpen })
  }
  return (
    <React.Fragment>
      {menu?.map((items: any, index: number) => {
        return (
          <NavAccordion
            {...items}
            isMobileOrTablet={isMobileOrTablet}
            key={`menu-accordion-${index}`}
            index={index}
            onDropdownClick={onAccorodionDropdownClick}
            currentActiveAccordion={currentActiveAccordion}
          />
        )
      })}
    </React.Fragment>
  )
}

const NavAccordion: React.FunctionComponent<NavAccordionProps> = (props) => {
  const {
    title,
    href,
    subItems = [],
    badge,
    isMobileOrTablet,
    currentActiveAccordion,
    onDropdownClick,
  } = props
  const isOpen = (title && currentActiveAccordion?.[title]) || false

  const toggleSubItems = () => {
    onDropdownClick && onDropdownClick(title || '', !isOpen)
  }

  const handleNavigate = () => {
    if (window?.location?.href) {
      //@ts-ignore
      window.location.href = href
    }
  }
  const setMenuOpen = (value: boolean) => {
    onDropdownClick && onDropdownClick(title || '', value)
  }

  return (
    <div className={css.accordion}>
      <div
        className={css.accordionTitle}
        onMouseEnter={() => {
          if (!isMobileOrTablet && subItems?.length > 0) {
            onDropdownClick && onDropdownClick(title || '', true)
          }
        }}
        onMouseLeave={() => {
          if (!isMobileOrTablet && subItems?.length > 0) {
            onDropdownClick && onDropdownClick(title || '', false)
          }
        }}
        onClick={subItems?.length > 0 ? toggleSubItems : handleNavigate}
      >
        {
          <div className={clx(css.accordionLinkTitle, { [css.red]: isOpen })}>
            <Typography
              styleType="p1"
              color={!isMobileOrTablet ? 'tertiary' : 'primary'}
              fontType="boldFont"
              className={clx(css.accordionLinkTitle, {
                [css.red]: isOpen || badge?.length,
              })}
            >
              {title ?? ''}
            </Typography>
            {badge && <div className={css.badge}>{badge}</div>}
          </div>
        }
        {subItems?.length > 0 && (
          <div>
            {!isMobileOrTablet ? (
              <ChevronDownWhite
                className={clx(css.chevronIcon, { [css.spinIcon]: isOpen })}
              />
            ) : (
              <ChevronDown
                className={clx(css.chevronIcon, css.addOpacity, {
                  [css.spinIcon]: isOpen,
                })}
              />
            )}
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => {
          onDropdownClick && onDropdownClick(title || '', true)
        }}
        className={clx(css.menuContainer, { [css.toggleMenuOpen]: isOpen })}
      >
        {isOpen && (
          <Menu
            subItems={subItems}
            setOpen={setMenuOpen}
            isMobileOrTablet={isMobileOrTablet}
          />
        )}
      </div>
    </div>
  )
}

const Menu: React.FunctionComponent<NavAccordionProps> = (props) => {
  const { subItems, isMobileOrTablet } = props
  return (
    <ul
      className={css.accordionNavList}
      onMouseEnter={() => {
        if (props?.setOpen && !isMobileOrTablet) props.setOpen(true)
      }}
      onMouseLeave={() => {
        if (props?.setOpen && !isMobileOrTablet) props.setOpen(false)
      }}
    >
      {subItems?.map((item) => (
        <a href={item.href} key={`nav-${item.title}`}>
          <li className={css.accordionNavListItem} key={item.title}>
            <Typography styleType="p3" className={css.navItemTitle}>
              {item.title}
            </Typography>
            {item.subItems && <Menu {...item} />}
          </li>
        </a>
      ))}
    </ul>
  )
}

export default NavMenu
