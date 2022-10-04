export interface IModalProps extends React.HTMLAttributes<HTMLElement> {
  modalContent: any
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  height?: string
  width?: string
  padding?: string
  background?: string
  onCloseFocusElementID?: string
  videoModal?: boolean
  margin?: string
  hasArticle?: boolean
  videoTitle?: string
  videoDesc?: string
}
