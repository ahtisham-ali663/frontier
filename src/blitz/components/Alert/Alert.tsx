import { useMemo } from 'react'
import clx from 'classnames'
import { InjectHTML } from 'src/blitz'
import { Success, Close } from 'src/blitz/assets/react-icons'
import { IAlert } from './types'
import css from './Alert.module.scss'

const Alert: React.FC<IAlert> = ({
  className,
  handleClose,
  isSuccess,
  message,
  strongText = '',
}) => {
  const icon = useMemo(() => {
    if (isSuccess) {
      return <Success className={css.alertIcon} />
    }
    return null
  }, [isSuccess])
  return (
    <div className={clx(css.alertContainer, className)}>
      <div className={css.alertWrapper}>
        {icon}
        <InjectHTML
          testId="test-completemessage"
          className={css.message}
          value={`<b>${strongText}</b> ${message}`}
        />
        <button className={css.closeBtn} onClick={handleClose}>
          <Close />
        </button>
      </div>
    </div>
  )
}

export default Alert
