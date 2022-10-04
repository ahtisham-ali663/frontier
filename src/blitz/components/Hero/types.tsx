import { IButton } from 'src/blitz/components/Button'

export interface IHeroProps {
  title1?: string | JSX.Element
  title1Color?: 'primary' | 'secondary' | 'tertiary' | 'default'
  title2?: string | JSX.Element
  title2Color?: 'primary' | 'secondary' | 'tertiary' | 'default'
  subHeader?: string | JSX.Element
  backgroundImage?: string
  mobileBackgroundImage?: string
  primaryButton?: IButton
  secondaryButton?: IButton
  titleTagType?: string | JSX.Element
  className?: string
  contentClassName?: string
  legalText?: string
}

export interface ITitleProps {
  title1?: string | JSX.Element
  title1Color?: 'primary' | 'secondary' | 'tertiary' | 'default'
  title2?: string | JSX.Element
  title2Color?: 'primary' | 'secondary' | 'tertiary' | 'default'
}
