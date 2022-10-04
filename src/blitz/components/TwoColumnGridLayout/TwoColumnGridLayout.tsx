import { InjectHTML } from 'src/blitz'
import {
  ITwoColumnGridLayoutProps,
  ITwoColumnGridLayoutSpanVariant,
} from './types'
import css from './TwoColumnGridLayout.module.scss'
import clx from 'classnames'

const TwoColumnGridLayout = (props: ITwoColumnGridLayoutProps) => {
  const {
    layoutVariant = 'primary',
    leftContent,
    rightContent,
    leftContentClassName = '',
    rightContentClassName = '',
  } = props
  return (
    <div className={clx(css.TwoColumnGridLayout, getGridSpan(layoutVariant))}>
      <div className={clx(css.leftContent, leftContentClassName)}>
        <InjectHTML tagType="h2" styleType="h3" value={leftContent} />
      </div>
      <div className={clx(css.rightContent, rightContentClassName)}>
        <InjectHTML tagType="p" styleType="p2" value={rightContent} />
      </div>
    </div>
  )
}

function getGridSpan(spanType: ITwoColumnGridLayoutSpanVariant) {
  switch (spanType) {
    case 'secondary':
      return css.secondaryLayout
    case 'tertiary':
      return css.tertiaryLayout
    default:
      return css.primaryLayout
  }
}

export default TwoColumnGridLayout
