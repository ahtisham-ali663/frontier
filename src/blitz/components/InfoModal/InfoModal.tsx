import React from 'react'
import Typography from '../Typography'
import InjectHTML from '../InjectHTML'
import Button from '../Button'
import { Close } from '../../assets/react-icons'
import { IInfoModal } from './index'
import css from './InfoModal.module.scss'
import { Loading } from 'src/blitz'
import clx from 'classnames'
const InfoModal: React.FC<IInfoModal> = ({
  isOpen,
  isClosable = true,
  isLoading = true,
  onClose,
  title,
  subTitle,
  logo,
  isFooterCloseButton = false,
  buttonName = '',
  modalContentClassName = '',
}) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className={css.modal}>
      <div className={clx(css.modalContent, modalContentClassName)}>
        {isClosable && (
          <button onClick={onClose} className={css.closeBtn}>
            <Close />
          </button>
        )}
        {isLoading && <Loading />}
        {logo && <div className={css.logo}>{logo}</div>}
        <Typography styleType="h3" tagType="h3" className={css.title}>
          {title}
        </Typography>
        <InjectHTML styleType="p1" value={subTitle} />
        {isFooterCloseButton && (
          <Button
            type="button"
            onClick={onClose}
            text={buttonName}
            className={css.footerBtn}
          />
        )}
      </div>
    </div>
  )
}

export default InfoModal
