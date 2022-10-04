export interface IAlert {
  isSuccess?: boolean
  message: string
  strongText?: string
  handleClose: () => void
  className?: string
}
