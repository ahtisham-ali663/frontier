import css from './Button.module.scss'
import clx from 'classnames'
import {
  IButton,
  IButtonVariant,
  IButtonHoverVariant,
  IDefaultLink,
  IDefaultButton,
} from './types'
import { InjectHTML } from 'src/blitz'
const DefaultButton = (props: IDefaultButton) => {
  const {
    variant = 'primary',
    hoverVariant = 'primary',
    className,
    text,
    ...args
  } = props
  return (
    <button
      {...args}
      data-testid="test-text"
      className={clx(
        getElementTag(variant),
        getElementHover(hoverVariant),
        className,
      )}
    >
      {text}
    </button>
  )
}

const LinkButton = (props: IDefaultLink) => {
  const {
    variant = 'primary',
    hoverVariant = 'primary',
    className,
    text,
    objectID,
    href,
    ...args
  } = props
  return objectID ? (
    /* eslint-disable @typescript-eslint/indent */
    <InjectHTML
      enableClick
      className={clx(css.btnWrapper)}
      value={`<a href="${href}" 
      class="${clx(
        getElementTag(variant),
        getElementHover(hoverVariant),
        className,
      )}"
      onclick="s_objectID='${objectID}'"
     >${text}</a>`}
    />
  ) : (
    /* eslint-disable @typescript-eslint/indent */
    <a
      {...args}
      href={href}
      className={clx(
        getElementTag(variant),
        getElementHover(hoverVariant),
        className,
      )}
    >
      {text}
    </a>
  )
}

const Button = (props: IButton) => {
  const { type = 'button' } = props
  if (['button', 'submit'].includes(type)) {
    return <DefaultButton {...(props as IDefaultButton)} />
  }
  return <LinkButton {...(props as IDefaultLink)} />
}

function getElementHover(hoverType: IButtonHoverVariant) {
  switch (hoverType) {
    case 'secondary':
      return css.secondaryHover
    default:
      return css.primaryHover
  }
}

function getElementTag(styleType: IButtonVariant) {
  switch (styleType) {
    case 'tertiary':
      return css.tertiary
    case 'secondary':
      return css.secondary
    case 'lite':
      return css.lite
    default:
      return css.primary
  }
}

export default Button
