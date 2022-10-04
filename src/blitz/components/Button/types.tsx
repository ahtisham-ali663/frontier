import React from 'react'

export type IButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'lite'
export type IButtonHoverVariant = 'primary' | 'secondary'

export interface IDefaultButton extends React.HTMLProps<HTMLButtonElement> {
  type: 'button' | 'submit'
  variant?: IButtonVariant
  hoverVariant?: IButtonHoverVariant
  className?: string
  text?: string | JSX.Element
}

export interface IDefaultLink extends React.HTMLProps<HTMLAnchorElement> {
  type: 'link'
  variant?: IButtonVariant
  hoverVariant?: IButtonHoverVariant
  className?: string
  text?: string | JSX.Element
  objectID?: string
}

export type IButton = IDefaultButton | IDefaultLink
