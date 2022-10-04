import clx from 'classnames'
import DOMPurify from 'dompurify'
import { Typography } from 'src/blitz'
import { IInjectHTML } from './types'
import css from './InjectHTML.module.scss'

const InjectHTML = ({
  value,
  pureInjection = false,
  enableClick = false,
  className,
  ...restProps
}: IInjectHTML): JSX.Element | null => {
  if (!value) {
    return null
  }
  const attributes = ['target', 'styleType']
  if (enableClick) {
    attributes.push('onClick')
  }
  const sanitizedData = DOMPurify?.sanitize?.(value, {
    ADD_ATTR: attributes,
  })
  if (!sanitizedData) {
    return null
  }
  if (pureInjection) {
    return (
      <span
        className={className}
        {...restProps}
        data-testid={restProps.testId}
        dangerouslySetInnerHTML={{
          __html: sanitizedData,
        }}
      />
    )
  }
  return (
    <Typography
      className={clx(className, css.dynamicText)}
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: sanitizedData,
      }}
    />
  )
}

export default InjectHTML
