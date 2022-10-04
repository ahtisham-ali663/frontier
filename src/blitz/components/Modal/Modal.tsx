import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalCloseIcon } from 'src/blitz/assets/react-icons'
import FocusLock from 'react-focus-lock'
import { IModalProps } from './index'
import css from './Modal.module.scss'
import { InjectHTML, Typography } from 'src/blitz'
import { Grid } from '@material-ui/core'

const Modal: React.FunctionComponent<IModalProps> = ({
  modalContent,
  modalOpen,
  setModalOpen,
  height = '50%',
  width = '80%',
  padding = '1rem',
  margin = 'auto',
  background = 'white',
  onCloseFocusElementID = '',
  videoModal = false,
  hasArticle = false,
  videoTitle,
  videoDesc,
}) => {
  if (typeof window !== 'undefined') {
    console.warn('Windows is not defined')
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && modalOpen) {
      setModalOpen(false)
    }
  }

  const onDialogClick = () => {
    if (videoModal) {
      return
    }
    setModalOpen(false)
  }

  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
      document.getElementById(`${onCloseFocusElementID}`)?.focus()
    }
  }, [modalOpen])

  if (!modalOpen) return null

  return createPortal(
    <FocusLock>
      <div
        role="dialog"
        aria-modal
        aria-label="Video Modal"
        tabIndex={-1}
        className={css.modal}
        onClick={onDialogClick}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          className={css.videoArticleContainer}
        >
          <button
            className={css.modalCloseButton}
            onClick={() => setModalOpen(false)}
          >
            <ModalCloseIcon />
          </button>
          <Grid
            item
            style={{
              height: height,
              width: width,
              padding: padding,
              background: background,
              margin: margin,
            }}
            className={css.modalContentContainer}
          >
            {modalContent}
          </Grid>
          {hasArticle && (
            <Grid item className={css.article}>
              <Typography tagType="h3" color="secondary" styleType="h6">
                {videoTitle || ''}
              </Typography>
              {videoDesc && (
                <InjectHTML
                  tagType="p"
                  color="tertiary"
                  styleType="p2"
                  value={videoDesc}
                />
              )}
            </Grid>
          )}
        </Grid>
      </div>
    </FocusLock>,
    document.body,
  )
}

export default Modal
