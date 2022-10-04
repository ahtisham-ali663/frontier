import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import Image from 'src/components/ImageWithPlaceholder'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import { Typography } from 'src/blitz'
import Menu from '@material-ui/icons/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Drawer from '@material-ui/core/Drawer'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Slide from '@material-ui/core/Slide'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close'
import { styled } from '@material-ui/core/styles'
import Link from 'next/link'
import { useAppData } from 'src/hooks'
import axios from 'axios'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { FRGUIDE, FRGUIDE_BOLD } from 'src/constants/fontFamilyNames'
import { parseCookies } from 'nookies'
import { API_ROUTES } from 'src/constants'
const YextSnippet = dynamic(() => import('src/utils/yext'))

interface LinkItem {
  name?: string
  path: {
    url: string
  }
  title: string
}

interface LinkGroup {
  name?: string
  items: LinkItem[]
  title: string
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .MuiTooltip-tooltip`]: {
    fontSize: 14,
  },
}))

interface TopBarProps {
  data?: any
}

const TopBar: React.FC<TopBarProps> = ({ data }: TopBarProps): JSX.Element => {
  const classes = useStyles()
  const [domain, setDomain] = useState('')
  const [loadYext, setLoadYext] = useState(false)
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  const profileLink = `${origin}/account#/profile`
  const { action_nav_links, main_links, logo_image, logo_link, new_link } =
    useAppData('Header', true, data) || {}

  console.log(main_links, 'main_linkss')
  const { sites } = useAppData('Sticky Navigation', true)
  const [linkType, setLinkType] = useState<string>('')
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [profile, setProfile] = useState<any>(null)
  const drawerContainerRef = React.useRef(null)
  const [openProfileDropdown, setOpenProfileDropdown] = useState<boolean>(false)
  const { frontieramp = false } = parseCookies()

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const details = await axios.get(API_ROUTES.PROFILE)
      if (details?.data?.firstName) {
        setProfile(details?.data)
      }
    } catch (error) {}
  }
  useEffect(() => {
    setDomain(origin)
  }, [origin])

  const renderLogo: JSX.Element = (
    <a href={logo_link?.url}>
      <div className={classes.imageWrapper}>
        {logo_image && (
          <Image
            src={logo_image?.src}
            alt={logo_image?.alt}
            width={105}
            height={23}
            objectFit="contain"
            className={classes.logoImage}
            renderNextImage
          />
        )}
      </div>
    </a>
  )

  // const onLinkFocus = (type: string) => {
  //   setLinkType(type)
  // }

  const handleSignOut = async () => {
    try {
      await axios.post(API_ROUTES.LOGOUT, {})
      window.location.reload()
    } catch (error) {}
  }

  const onSideLinkClick = (type: string) => {
    setLinkType(type)
  }

  const RenderDropdownOnFocus = (navType: string) => {
    const ulClassForNavLinks =
      navType === 'header' ? classes.dropdownMenu : classes.sideNavMenus
    let links = []

    links = main_links.Links.find((item: LinkGroup) => item.title === linkType)[
      'items'
    ]
    return (
      <>
        {navType === 'sideNav' && (
          <Typography className={classes.sidenavMenuTitle}>
            {linkType}
          </Typography>
        )}
        <ul className={ulClassForNavLinks}>
          {links.map((linkItem: LinkItem, i: number) => {
            const url =
              linkItem?.path?.url.search('https') < 0
                ? `${domain}${linkItem.path.url}`
                : `${linkItem?.path?.url}`

            return (
              <li key={i}>
                <a href={url} className={classes.dropdownNavLinkText}>
                  {linkItem?.title || ''}
                </a>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  console.log(linkType, 'renderLink title')

  const renderLink = (title: string, type: string) => {
    console.log(title, 'renderLink')
    return (
      <div
        key={title}
        id={title}
        onClick={() => {
          if (type == 'isSideLink') onSideLinkClick(title)
        }}
        style={{ position: 'relative' }}
        className={
          type == 'isSideLink' ? classes.sideNavLinks : classes.topBarNavLinks
        }
      >
        {title}
        {type == 'isDropDown' && (
          <KeyboardArrowDownIcon className={classes.normalIcons} />
        )}
        {type == 'isSideLink' && (
          <KeyboardArrowRight className={classes.sideNavArrow} />
        )}
        {linkType === title ? RenderDropdownOnFocus('header') : null}
      </div>
    )
  }
  const onLinkMouseEnter = (title: string, type: string) => {
    if (type == 'isDropDown') setLinkType(title)
  }
  const onLinkMouseLeave = (type: string) => {
    if (type == 'isDropDown') setLinkType('')
  }
  const renderNavLinks: JSX.Element = (
    <nav
      style={{ position: 'relative' }}
      className={`${classes.hideForSmall} ${classes.navElements}`}
    >
      <ul>
        {main_links?.Links.map((nav: LinkGroup, id: number) => {
          return (
            <li
              key={`mainlinks_${id}`}
              onMouseLeave={() => onLinkMouseLeave('isDropDown')}
              onMouseEnter={() => onLinkMouseEnter(nav.title, 'isDropDown')}
            >
              {renderLink(nav.title, 'isDropDown')}
            </li>
          )
        })}
        <li className={classes.topBarNavLinksNew}>
          <a href={new_link?.targetItems[0].path.url}>
            {new_link?.targetItems[0].title}
          </a>
        </li>
      </ul>
    </nav>
  )

  const renderCallOption: JSX.Element = (
    <div className={`${classes.actionElements} ${classes.hideForSmall}`}>
      <nav>
        <ul>
          {(action_nav_links?.Links || []).map((link: LinkItem, id: number) => {
            const actionNavTitle = link?.name || ''
            const linkUrl = `${domain}${link.path.url}`
            switch (actionNavTitle) {
              case 'Search':
                return (
                  <li key={`actionnavlinks_${id}`}>
                    <a href={linkUrl}>
                      <SearchIcon className={classes.colouredIcons} />
                      <span className={`${classes.hideForMid}`}>Search</span>
                    </a>
                  </li>
                )
              case 'Login':
                return (
                  <li
                    key={`actionnavlinks_${id}`}
                    onMouseLeave={() => setOpenProfileDropdown(false)}
                    onMouseEnter={() => setOpenProfileDropdown(true)}
                  >
                    {profile ? (
                      <Link href={profileLink} passHref>
                        <PersonIcon className={classes.colouredIcons} />
                      </Link>
                    ) : (
                      <Link href={linkUrl} passHref>
                        <PersonIcon className={classes.colouredIcons} />
                      </Link>
                    )}
                    {profile ? (
                      <>
                        <a href={profileLink}>
                          <StyledTooltip
                            title={`Hi, ${profile?.firstName}`}
                            placement="top"
                          >
                            <span className={classes.profileName}>
                              Hi, {profile?.firstName}
                            </span>
                          </StyledTooltip>
                        </a>
                        <KeyboardArrowDownIcon
                          className={classes.normalIcons}
                        />
                        {openProfileDropdown && (
                          <div
                            className={`${classes.topBarNavLinks} ${classes.signOutPopoverLink}`}
                          >
                            <ul
                              className={`${classes.dropdownMenu} ${classes.signOutDropDown}`}
                            >
                              <li key="signOutDropdown" onClick={handleSignOut}>
                                <span className={classes.dropdownNavLinkText}>
                                  Sign Out
                                </span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <a href={linkUrl}>
                        <span className={`${classes.hideForMid}`}>Login</span>
                      </a>
                    )}
                  </li>
                )
              case 'Buy':
                return !frontieramp || frontieramp != 'true' ? (
                  <li key={`actionnavlinks_${id}`}>
                    <a href={linkUrl}>
                      <ShoppingCartIcon className={classes.colouredIcons} />
                    </a>
                    <a href={linkUrl}>
                      <span className={`${classes.hideForMid}`}>Buy</span>
                    </a>
                  </li>
                ) : (
                  ''
                )
              default:
                null
            }
          })}
        </ul>
      </nav>
    </div>
  )
  const loginUrl = (action_nav_links?.Links || []).find(
    (item: any) => item.name === 'Login',
  )
  return (
    <>
      <Drawer
        anchor={'left'}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false)
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
        ref={drawerContainerRef}
      >
        <span
          className={classes.closeIconContainer}
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon className={classes.closeIcon} />
        </span>
        <span className={classes.signInSideBar}>
          {profile ? (
            <Link href={profileLink} passHref>
              <PersonIcon className={classes.colouredIcons} />
            </Link>
          ) : (
            <a href={`${domain}${loginUrl?.path?.url}`}>
              <PersonIcon className={classes.colouredIcons} />
            </a>
          )}
          {profile ? (
            <>
              <a href={profileLink}>
                <StyledTooltip
                  title={`Hi, ${profile?.firstName}`}
                  placement="top"
                >
                  <span className={classes.mobileProfileName}>
                    Hi, {profile?.firstName}
                  </span>
                </StyledTooltip>
              </a>
              <button onClick={handleSignOut} className={classes.signOutButton}>
                <Typography className="signout">Sign Out</Typography>
              </button>
            </>
          ) : (
            <a href={`${domain}${loginUrl?.path?.url}`}>
              <Typography styleType="p4" className={classes.signInButton}>
                Sign In
              </Typography>
            </a>
          )}
        </span>
        <div
          className={`${classes.searchInputContainer} navigation-area-search`}
        >
          <div className="yext-search-container"></div>
          {/* Dynamically load YextSnippet */}
          {loadYext && <YextSnippet />}
        </div>
        {linkType.length === 0 ? (
          <div className={classes.mainLinksContainer}>
            <ul className={classes.drawerSideLinks}>
              {main_links?.Links.map((nav: LinkGroup, id: number) => {
                return (
                  <li key={`drawersidelinks_${id}`}>
                    {renderLink(nav.title, 'isSideLink')}
                  </li>
                )
              })}
              <li className={classes.sideNavLinksNew}>
                <a href={new_link?.targetItems[0].path.url}>
                  {new_link?.targetItems[0].title}
                </a>
              </li>
            </ul>
            <Grid
              container
              spacing={3}
              id="drawer-footer-links"
              className={classes.sideNavBottomLinks}
            >
              {sites?.site?.map((item: LinkItem) => {
                const {
                  title,
                  path: { url },
                } = item
                const isActive = url === 'https://frontier.com/'
                return (
                  <Grid item lg={6} key={title}>
                    <li className={classes.drawerBottomLinks} key={url}>
                      <a href={url}>
                        <Typography
                          className={`${classes.labelItem} ${
                            isActive && classes.linkActive
                          }`}
                        >
                          {title}
                        </Typography>
                      </a>
                    </li>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        ) : (
          <Slide direction="right" in={linkType?.length > 0}>
            <div id="slide-div">
              <div className={classes.sideNavBackContainer}>
                <ArrowBack
                  className={classes.normalIcons}
                  onClick={() => setLinkType('')}
                />
                <Typography>Main Menu</Typography>
              </div>
              {RenderDropdownOnFocus('sideNav')}
            </div>
          </Slide>
        )}
      </Drawer>
      <div className={classes.container}>
        <div className={`${classes.root} ${classes.rootHighlighter}`}>
          <div className={`${classes.contentWrapper} ${classes.hideForSmall}`}>
            <div className={classes.leftContainer}>{renderLogo}</div>
            <div className={classes.actionsContainer}>
              {renderNavLinks}
              {renderCallOption}
            </div>
          </div>
          <div className={`${classes.showForSmall} ${classes.headerForSmall}`}>
            <Menu
              className={classes.iconsForSmall}
              onClick={() => {
                setLoadYext(true)
                setOpenDrawer(true)
                setLinkType('')
              }}
            />
            {renderLogo}
            {(action_nav_links?.Links || []).map(
              (link: LinkItem, id: number) => {
                const actionNavTitle = link?.name || ''
                const linkUrl = `${domain}${link.path.url}`
                const iconClass = !(frontieramp || frontieramp == 'true')
                  ? classes.iconsForSmall
                  : classes.hideIcon
                return (
                  actionNavTitle === 'Buy' && (
                    <a href={linkUrl} key={id}>
                      <ShoppingCart className={iconClass} />
                    </a>
                  )
                )
              },
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar

const useStyles = makeStyles((theme) => ({
  container: {
    lineHeight: '20px',
    background: '#fff',
    borderBottom: '1px solid',
    borderBottomColor: colors.main.borderLightGray,
    width: '100%',
    zIndex: 48,
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0px',
    },
  },
  root: {
    top: 0,
    zIndex: theme.zIndex.appBar,
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: '0 auto',
  },
  contentWrapper: {
    top: 0,
    background: colors.main.white,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: `${theme.typography.pxToRem(16)}`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.pxToRem(14)}`,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: `${theme.typography.pxToRem(12)}`,
    },
  },
  imageWrapper: {
    width: '105px',
    '& span': {
      width: '100% !important',
    },
  },
  navLink: {
    borderRadius: 4,
    color: colors.main.black,
    textDecoration: 'underline',
    width: 50,
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      width: 70,
    },
  },
  navLinksWrapper: {
    display: 'flex',
  },
  contactContainer: {
    display: 'flex',
    color: colors.main.black,
    alignItems: 'flex-end',
    marginRight: 14,
    fontWeight: 'bold',
    paddingLeft: '1.5rem',
    [theme.breakpoints.down('md')]: {
      marginRight: 8,
    },
  },
  phoneNumber: {
    textDecoration: 'underline',
    marginLeft: 5,
  },
  rightHalf: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 40,
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      width: 'auto',
    },
  },
  leftContainer: {
    width: '215px',
    flexBasis: '120px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  rootHighlighter: {
    paddingLeft: '12px',
    [theme.breakpoints.up('md')]: {
      color: colors.main.white,
    },
  },
  colorWhite: {
    [theme.breakpoints.up('md')]: {
      color: colors.main.black,
    },
  },
  hide: {
    opacity: 0,
    pointerEvents: 'none',
  },
  popoverItems: {
    cursor: 'pointer',
    outline: 'none',
  },
  topBarNavLinks: {
    fontSize: '1.375rem',
    fontFamily: FRGUIDE_BOLD,
    position: 'relative',
    padding: '15px',
    color: colors.main.midnightExpress,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
      padding: '12px',
    },
  },
  signOutPopoverLink: {
    padding: 0,
  },
  topBarNavLinksNew: {
    '& a': {
      color: colors.main.torchRed,
      padding: '12px',
      fontFamily: FRGUIDE_BOLD,
      '&::after': {
        content: '"New"',
        position: 'relative',
        padding: '2px 5px',
        border: `2px solid ${colors.main.torchRed}`,
        borderRadius: 12,
        fontSize: 12,
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
          top: '-3px',
          right: '-26px',
        },
      },
      '&:hover': {
        color: colors.main.midnightExpress,
        '&::after': {
          border: `2px solid ${colors.main.midnightExpress}`,
        },
      },
    },
  },
  navElements: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    '& ul': {
      margin: 0,
      padding: 0,
      marginLeft: '100px',
      '& li': {
        listStyle: 'none',
        cursor: 'pointer',
        // marginRight: 10,
        display: 'inline-block',
        color: '#58595b',
        fontSize: '1.125rem',
        lineHeight: '1.18rem',
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '0px',
      },
    },
  },
  profileName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    verticalAlign: 'middle',
    [theme.breakpoints.down('lg')]: {
      maxWidth: 120,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 120,
    },
  },
  actionElements: {
    '& ul': {
      margin: 0,
      padding: 0,
      marginLeft: '90px',
      '& li': {
        listStyle: 'none',
        marginRight: 10,
        display: 'inline-block',
        color: colors.main.midnightExpress,
        fontSize: '16px',
        fontFamily: FRGUIDE_BOLD,
        lineHeight: '2rem',
        padding: '15px 0 15px 15px',
        cursor: 'pointer',
        [theme.breakpoints.down('lg')]: {
          padding: '15px 0 15px 0px',
        },
      },
      [theme.breakpoints.down('lg')]: {
        marginLeft: '0px',
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '0px',
        '& li': {
          maxWidth: 220,
        },
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '0px',
      },
    },
  },
  colouredIcons: {
    fill: colors.main.brightRed,
    marginRight: 5,
    marginLeft: 5,
    height: 22,
    width: 22,
    verticalAlign: 'middle',
  },
  normalIcons: {
    marginRight: 5,
    marginLeft: 5,
    height: 22,
    width: 22,
    verticalAlign: 'middle',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
      margin: '0 0 0 4px',
    },
  },
  actionsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sitesRow: {},
  dropdownMenu: {
    position: 'absolute',
    top: '200',
    background: '#000',
    left: 0,
    zIndex: 1000,
    float: 'left',
    minWidth: '180px',
    padding: '10px 0 !important',
    margin: '2px 0 0',
    display: 'none',
    fontSize: '16px',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '4px',
    boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
    marginLeft: '0 !important',
    '&::before': {
      content: `" "`,
      display: 'inline-block',
      left: '50%',
      position: 'absolute',
      top: '-10px',
      transform: 'translateX(-50%) rotate(45deg)',
      zIndex: '-1',
      width: '15px',
      height: '15px',
      border: '1px solid rgba(0,0,0,.15)',
      borderBottom: 0,
      borderRight: 0,
      background: '#fff',
    },
    '& li': {
      textAlign: 'center !important',
      width: '100%',
      margin: 0,
      padding: '10px 30px !important',
      marginLeft: '0px !important',
    },
    [theme.breakpoints.up('sm')]: {
      border: '1px solid #d8d8d8',
      left: '50%',
      minWidth: '240px',
      top: '48px',
      transform: 'translateX(-50%)',
      zIndex: '50',
      marginLeft: '0 !important',
      display: 'block',
    },
  },
  dropdownNavLinkText: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: FRGUIDE,
      color: colors.main.midnightExpress,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  hideForSmall: {
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
  hideForMid: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
  },
  showForSmall: {
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex !important',
    },
  },
  headerForSmall: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    margin: '0 auto',
  },
  iconsForSmall: {
    fill: colors.main.midnightExpress,
    width: 32,
    height: 32,
  },
  drawerPaper: {
    width: 300,
    overflow: 'none',
  },
  sideNavArrow: {
    position: 'absolute',
    right: 0,
  },
  sideNavLinks: {
    listStyle: 'none',
    color: colors.main.midnightExpress,
    fontSize: '24px',
    lineHeight: '2rem',
    padding: '20px 20px 20px 10px',
    fontWeight: 400,
    cursor: 'pointer',
  },
  sideNavLinksNew: {
    listStyle: 'none',
    color: colors.main.torchRed,
    fontSize: '24px',
    lineHeight: '2rem',
    padding: '20px 0 20px 10px',
    fontWeight: 400,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&::after': {
      content: '"New"',
      position: 'relative',
      padding: '2px 5px',
      border: `2px solid ${colors.main.torchRed}`,
      borderRadius: 12,
      fontSize: 12,
      lineHeight: 1,
    },
    '&:hover': {
      color: colors.main.midnightExpress,
      '&::after': {
        border: `2px solid ${colors.main.midnightExpress}`,
      },
    },
  },
  signInSideBar: {
    display: 'flex',
    padding: '15px 20px 15px 20px',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    '& .signout': {
      cursor: 'pointer',
      '&:hover': {
        color: colors.main.brightRed,
      },
    },
  },
  signInButton: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  signOutButton: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  sideNavMenus: {
    paddingLeft: '25px',
    listStyle: 'none',
    margin: 0,
    '& li': {
      padding: '8px 0px',
    },
  },
  sidenavMenuTitle: {
    lineHeight: '24px',
    color: colors.main.midnightExpress,
    fontWeight: 600,
    margin: 0,
    padding: '20px 20px 20px 25px',
    width: '100%',
    fontSize: '24px',
  },
  sideNavBackContainer: {
    display: 'flex',
    padding: '20px 18px',
    borderBottom: '2px solid #d8d8d8',
    cursor: 'pointer',
    '& *': {
      fontSize: '.875rem',
    },
  },
  sideNavBottomLinks: {
    paddingLeft: 25,
    paddingRight: 20,
    bottom: 80,
    paddingTop: 10,
    borderTop: '1px solid #e7e7e8',
    width: '100%',
    margin: 0,
  },
  labelItem: {
    fontSize: 14,
    color: colors.main.maskedGray,
    fontWeight: 600,
    paddingRight: 10,
    '&:hover': {
      color: colors.main.textGray,
    },
  },
  linkActive: {
    color: colors.main.midnightExpress,
  },
  drawerBottomLinks: {
    listStyle: 'none',
  },
  searchInputContainer: {
    padding: '20px 20px 0px 30px',
  },
  closeIconContainer: {
    position: 'fixed',
    top: 10,
    right: 10,
    zIndex: 9999,
    cursor: 'pointer',
  },
  closeIcon: {
    color: '#FFF',
    width: 32,
    height: 32,
  },
  drawerSideLinks: {
    padding: 20,
    paddingTop: 0,
    listStyle: 'none',
  },
  signOutBtn: {
    background: 'transparent',
    border: 0,
    listStyle: 'none',
    cursor: 'pointer',
    marginRight: 10,
    display: 'inline-block',
    color: '#58595b',
    fontSize: '16px',
  },
  signOutDropDown: {
    top: '15px !important',
  },
  logoImage: {
    width: '100%',
  },
  mobileProfileName: {
    marginRight: 12,
  },
  mainLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100% - 150px)',
  },
  hideIcon: {
    display: 'none',
  },
}))
