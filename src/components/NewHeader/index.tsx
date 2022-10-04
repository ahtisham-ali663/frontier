import { useMemo, useState, useEffect } from 'react'
import { Header } from 'src/blitz'
import { NavAccordionProps } from 'src/blitz/components/NavAccordion'
import { IUtilityNavProps } from 'src/blitz/components/UtilityNav'
import { parseCookies } from 'nookies'
import { useAppData } from 'src/hooks'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { SearchIcon } from 'src/blitz/assets/react-icons'
import YextSnippet from 'src/utils/yext'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from 'src/redux/slicers/login'

interface TopBarProps {
  headerData?: any
  stickyData?: any
  alertData?: any
}

const TopBar: React.FC<TopBarProps> = ({
  headerData,
  stickyData,
  alertData,
}: TopBarProps): JSX.Element => {
  const dispatch = useDispatch()
  const { loggedInState } = useSelector((state: any) => state?.login)
  const { action_nav_links = [], main_links } = useAppData(
    'HeaderUpdated',
    true,
    headerData,
  )
  const { banner, button } = useAppData('Alerts', true, alertData)
  const { sites } = useAppData('Sticky Navigation', true, stickyData)
  const classes = useStyles()
  const { frontieramp = false } = parseCookies()
  const isReturningUser = !(!frontieramp || frontieramp != 'true')
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    // fetchProfile()
    if (dispatch) {
      dispatch(authenticate())
    }
  }, [dispatch])

  useEffect(() => {
    if (loggedInState?.firstName) {
      setProfile(loggedInState)
    }
  }, [loggedInState])

  const secondaryNav = useMemo((): any => {
    const { Links } = action_nav_links
    const profileNavItems = Links[3]?.items?.map((data: any) => {
      return {
        title: data?.name,
        href: data?.path?.url,
      }
    })
    return {
      search: {
        title: Links[0]?.name,
        href: Links[0]?.path?.url,
      },
      cart: {
        title: Links[1]?.name,
        href: Links[1]?.path?.url,
      },
      signIn: {
        title: Links[2]?.name,
        href: Links[2]?.path?.url,
      },
      logIn: {
        isLoggedIn: !!profile,
        username: profile?.firstName,
      },
      profileNav: {
        title: Links[3]?.name,
        href: Links[3]?.path?.url,
        items: profileNavItems,
      },
    }
  }, [action_nav_links, profile])

  const menuLinks = useMemo((): NavAccordionProps[] => {
    const { Links } = main_links
    const menu = Links?.map((linkData: any) => {
      const firstLevelSubItems = linkData?.items?.map((flLinkData: any) => {
        const secondLevelSubItems =
          flLinkData?.subitems?.map((slLinData: any) => {
            return {
              title: slLinData?.title,
              href: slLinData?.path?.url,
            }
          }) || []
        return {
          title: flLinkData?.title,
          href: flLinkData?.path?.url,
          subItems: secondLevelSubItems,
        }
      })

      return {
        title: linkData?.title,
        href: linkData?.path?.url,
        subItems: firstLevelSubItems,
        badge: linkData?.badge?.value,
      }
    })
    return menu
  }, [main_links])

  const utilityNav = useMemo((): IUtilityNavProps => {
    const { Links } = action_nav_links
    const utilityNavData = sites?.site?.map((data: any) => {
      return {
        site: data?.title,
        href: data?.path?.url,
      }
    })
    return {
      languageHref: "https//www.frontier.com/espanol'",
      languageTitle: 'Español',
      cart: {
        title: Links[1]?.name,
        href: Links[1]?.path?.url,
      },
      sites: utilityNavData,
    }
  }, [sites])

  const getSearch = () => {
    return (
      <div className={classes.root}>
        <div className="yext-search-container"></div>
        {/* Dynamically load YextSnippet */}
        <YextSnippet />
        <span className={classes.searchIcon}>
          <SearchIcon />
        </span>
      </div>
    )
  }

  return (
    <Header
      secondaryNav={secondaryNav}
      utilityNav={utilityNav}
      menu={menuLinks}
      isReturningUser={isReturningUser}
      search={getSearch()}
      notificationBannerText={banner?.value || ''}
      showBanner={Boolean(banner?.value)}
      buttonLink={button?.href || ''}
      buttonName={button?.name || ''}
    />
  )
}

export default TopBar

const useStyles = makeStyles(() => ({
  root: {
    '& .yxt-SearchBar-container': {
      border: '0px',
      borderBottom: `1px solid ${colors.main.grey}`,
      borderRadius: '0px',
    },
    '& .yxt-SearchBar-input': {
      paddingLeft: 10,
      padding: 0,
    },
    '& .Icon--magnifying_glass': {
      transform: 'rotate(275deg)',
      '& svg': {
        visibility: 'hidden',
      },
    },
  },
  searchIcon: {
    position: 'absolute',
    top: '10px',
    zIndex: 99,
    right: '16px',
  },
}))
