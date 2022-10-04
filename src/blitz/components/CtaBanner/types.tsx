import React from 'react'

export type ICtaBannerHoverVariant = 'primary' | 'secondary'

export interface ICtaBannerProps extends React.HTMLProps<HTMLButtonElement> {
  heading: string
  buttonVariant?: string
  secondaryButton?: boolean
  hoverVariant?: ICtaBannerHoverVariant
  buttonURL?: string
  text?: string
  domain?: string
}
