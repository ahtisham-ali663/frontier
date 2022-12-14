import { IUtilityNavProps } from 'src/blitz/components/UtilityNav'
import { NavAccordionProps } from 'src/blitz/components/NavAccordion'

type IProfileNavOptions = {
  title: string
  href: string
}
export interface ISecondaryNavProps {
  search: {
    title: string
    href: string
  }
  cart: {
    title: string
    href: string
  }
  signIn: {
    title: string
    href: string
  }
  logIn: {
    isLoggedIn: boolean
    username: string
  }
  profileNav: {
    title: string
    href: string
    items: IProfileNavOptions[]
  }
}

export interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
  utilityNav: IUtilityNavProps
  menu: NavAccordionProps[]
  secondaryNav: ISecondaryNavProps
  isReturningUser?: boolean
  search?: JSX.Element
  notificationBannerText?: string
  showBanner?: boolean
  buttonLink?: string
  buttonName?: string
}
