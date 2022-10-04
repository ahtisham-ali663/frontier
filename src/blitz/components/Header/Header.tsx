import React, { useState, useEffect, useRef } from 'react'
import clx from 'classnames'
import {
  UtilityNav,
  NavAccordion,
  Typography,
  NotificationBanner,
  Hamburger,
} from 'src/blitz'
import axios from 'axios'
import useWindowDimensions from 'src/hooks/useWindowDimensions'
import {
  Search,
  Cart,
  Logo,
  ChevronUpWhite,
  ChevronDownWhite,
  CloseGray,
} from 'src/blitz/assets/react-icons'
import { API_ROUTES, SIGN_IN_TOP_NAV } from 'src/constants'
import { IHeaderProps } from './types'
import css from './Header.module.scss'

const UTILITY_NAV_HEIGHT = 39
const Header: React.FunctionComponent<IHeaderProps> = (data) => {
  const { utilityNav, menu, secondaryNav } = data
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const isLoggedIn = secondaryNav?.logIn?.isLoggedIn
  const { width } = useWindowDimensions()
  const isMobileOrTablet = width <= 1023
  const [fromTop, setFromTop] = useState(UTILITY_NAV_HEIGHT)
  const [headerHeight, setHeaderHeight] = useState<number>(99)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobileOrTablet) {
      setIsOpen(false)
    }
    setIsProfileDropdownOpen(false)
  }, [isMobileOrTablet])

  function toggleNav() {
    setIsProfileDropdownOpen(false)
    setIsOpen(!isOpen)
  }

  function toggleProfileDropdown(value?: boolean) {
    setIsOpen(false)
    setIsProfileDropdownOpen(
      value !== undefined ? value : !isProfileDropdownOpen,
    )
  }

  const handleSignOut = async () => {
    try {
      await axios.post(API_ROUTES.LOGOUT, {})
      window.location.reload()
    } catch (error) {}
  }
  const renderProfileOptions = (hide = false) => {
    if (hide) {
      return null
    }
    return (
      <div
        className={clx(css.profileDropdown, {
          [css.profileDropdownOpen]: isProfileDropdownOpen,
        })}
      >
        <div className={css.profileDropdownContainer}>
          <span
            className={css.profileCloseIcon}
            onClick={() => setIsProfileDropdownOpen(false)}
          >
            <CloseGray width={10} height={10} />
          </span>
          <ul>
            <li>
              <a href={secondaryNav?.profileNav?.href}>
                <Typography
                  tagType="span"
                  styleType="p2"
                  fontType="boldFont"
                  className={css.profileDropDownlist}
                >
                  {secondaryNav?.profileNav?.title}
                </Typography>
              </a>
            </li>
            {secondaryNav?.profileNav?.items.map((data) => {
              return data?.title.toLowerCase() != 'sign out' ? (
                <li key={`${data?.title} - nav item`}>
                  <a href={data?.href}>
                    <Typography
                      tagType="span"
                      styleType="p2"
                      className={css.profileDropDownlist}
                    >
                      {data?.title}
                    </Typography>
                  </a>
                </li>
              ) : (
                <li
                  onClick={() => handleSignOut()}
                  key={`${data?.title} - nav item`}
                >
                  <Typography
                    tagType="span"
                    styleType="p2"
                    className={css.profileDropDownlist}
                  >
                    {data?.title}
                  </Typography>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (isMobileOrTablet) {
      setFromTop(0)
    } else {
      setFromTop(UTILITY_NAV_HEIGHT)
    }
  }, [isMobileOrTablet])

  const handleScroll = () => {
    if (isMobileOrTablet) {
      setFromTop(0)
      window.removeEventListener('scroll', () => handleScroll)
    } else {
      const top =
        UTILITY_NAV_HEIGHT - window?.pageYOffset < 0
          ? 0
          : UTILITY_NAV_HEIGHT - window?.pageYOffset
      setFromTop(top)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', () => handleScroll)
  }, [isMobileOrTablet])

  useEffect(() => {
    if (bannerRef) {
      const headerHeight = bannerRef?.current?.getBoundingClientRect().height
      setHeaderHeight(headerHeight || 99)
    }
  }, [bannerRef, width])
  const SignInAnalytics = () => {
    //@ts-ignore
    s_objectID = SIGN_IN_TOP_NAV
  }
  return (
    <header id="header" className={css.header} style={{ height: headerHeight }}>
      <UtilityNav
        className={css.hideUtilityNavMobile}
        {...utilityNav}
        showCartLanguageBanner={isMobileOrTablet}
        isReturningUser={data?.isReturningUser}
      />
      <nav className={css.headerNav} style={{ top: fromTop }} ref={bannerRef}>
        <div className={css.headerNavContainer}>
          <a href="/">
            <Logo
              className={clx(css.headerLogo, css.hideLogoMobile)}
              logoColor="white"
            />
          </a>
          <div className={css.headerHamburgerButtonContainer}>
            <button
              className={clx(
                css.headerHamburgerButton,
                css.hideHamburgerButton,
              )}
              onClick={toggleNav}
            >
              <Hamburger isActive={isOpen} />
            </button>
          </div>
          <div className={clx(css.accordionContainer, css.hideMainNavMobile)}>
            <NavAccordion menu={menu} />
          </div>
          <div className={css.headerMobileLogo}>
            <a href="/">
              <Logo
                className={clx(css.headerLogo, css.hideLogoTablet)}
                logoColor="white"
              />
            </a>
          </div>
          {!isLoggedIn ? (
            <a
              href={secondaryNav?.signIn?.href}
              className={css.signInMobile}
              onClick={SignInAnalytics}
              data-testid="profile-sign-in-link"
            >
              <Typography styleType="p2" color="tertiary" fontType="boldFont">
                Sign In
              </Typography>
            </a>
          ) : (
            <div
              className={css.signInMobile}
              onClick={() => toggleProfileDropdown()}
            >
              <Typography
                className={css.profileTitle}
                styleType="p2"
                color="tertiary"
                fontType="boldFont"
              >
                {'Hi, ' + secondaryNav?.logIn.username}
              </Typography>
            </div>
          )}
          <div>{isLoggedIn && renderProfileOptions(!isMobileOrTablet)}</div>
          <div className={css.navSecondary}>
            <a
              className={css.navSecondaryAnchor}
              href={secondaryNav?.search.href}
            >
              <Typography
                className={css.navSecondaryTitle}
                styleType="p2"
                color="tertiary"
                fontType="boldFont"
              >
                {secondaryNav?.search.title}
              </Typography>
              <Search />
            </a>
            <div className={css.buyLinkContainer}>
              {!data?.isReturningUser && (
                <a
                  className={css.navSecondaryAnchor}
                  href={secondaryNav?.cart?.href}
                >
                  <Typography
                    className={css.navSecondaryTitle}
                    styleType="p2"
                    color="tertiary"
                    fontType="boldFont"
                  >
                    {secondaryNav?.cart?.title}
                  </Typography>
                  <Cart />
                </a>
              )}
            </div>
            {!isLoggedIn ? (
              <a
                className={css.navSecondaryAnchor}
                href={`${secondaryNav?.signIn?.href}`}
                data-testid="secondary-profile-sign-in-link"
              >
                <Typography
                  className={css.navSecondaryTitle}
                  styleType="p2"
                  color="tertiary"
                  fontType="boldFont"
                >
                  {secondaryNav?.signIn?.title}
                </Typography>
              </a>
            ) : (
              <div
                className={css.loggedInUserNameWrapper}
                onMouseEnter={() => toggleProfileDropdown()}
                onMouseLeave={() => toggleProfileDropdown()}
              >
                <Typography
                  className={css.navSecondaryTitle}
                  styleType="p2"
                  color="tertiary"
                  fontType="boldFont"
                >
                  {`Hi, ${secondaryNav?.logIn?.username}`}
                </Typography>
                {isProfileDropdownOpen ? (
                  <ChevronUpWhite />
                ) : (
                  <ChevronDownWhite />
                )}
                {renderProfileOptions()}
              </div>
            )}
          </div>
        </div>
        <div
          className={clx(css.navContainer, css.hideMainNavTablet, {
            [css.toggleNavOpen]: isOpen,
            [css.toggleNavClose]: !isOpen,
          })}
        >
          {data?.search && (
            <span
              className={clx({
                [css.showSearch]: isOpen,
                [css.hideSearch]: !isOpen,
              })}
            >
              {data?.search}
            </span>
          )}
          {isOpen && (
            <>
              <div className={css.accordionContainer}>
                <NavAccordion menu={menu} />
              </div>
              <UtilityNav
                {...data.utilityNav}
                showCartLanguageBanner={isMobileOrTablet}
                isReturningUser={data?.isReturningUser}
                className={css.mobileUtilityNav}
              />
            </>
          )}
        </div>
        <NotificationBanner
          showBanner={data?.showBanner}
          notificationBannerText={data?.notificationBannerText}
          buttonLink={data?.buttonLink}
          buttonName={data?.buttonName}
        />
      </nav>
    </header>
  )
}

export default Header
