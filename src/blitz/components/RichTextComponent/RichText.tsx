import Image from 'src/components/ImageWithPlaceholder'
import { useAppData } from 'src/hooks'
import { InjectHTML } from 'src/blitz'
import css from './RichText.module.scss'
import clx from 'classnames'

interface RichTextProps {
  data?: any
  wrapperClassName?: string
}

const RichText: React.FC<RichTextProps> = ({ data, wrapperClassName = '' }) => {
  // eslint-disable-next-line no-unused-vars
  const item = useAppData('richText', true, data)
  return (
    <div className={clx(css.resourceWrapper, wrapperClassName)}>
      {data?.image?.src && (
        <Image src={data?.image?.src} alt={data?.image?.alt} />
      )}
      {data?.content && (
        <div>
          <InjectHTML
            pureInjection
            value={data?.content?.value}
            testId="test-content"
          />
        </div>
      )}
      {data?.script && <InjectHTML pureInjection value={data?.script?.value} />}
    </div>
  )
}

export default RichText
