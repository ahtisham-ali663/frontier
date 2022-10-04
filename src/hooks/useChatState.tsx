import { useSelector, useDispatch } from 'react-redux'
import { State } from 'src/redux/types'
import { appConfigSlice } from 'src/redux/slicers/appConfigSlice'

const useChatState = (): UseChatState => {
  const isChatOpen = useSelector(
    (state: State) => state?.appConfig?.configs?.isChatOpen,
  )
  const dispatch = useDispatch()
  const setChatState = (value: boolean) => {
    try {
      dispatch(appConfigSlice.actions.setConfig({ isChatOpen: value }))
    } catch (error) {
      console.log(error)
    }
  }
  return { isChatOpen, setChatState }
}

type UseChatState = {
  isChatOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setChatState: (value: boolean) => void
}

export default useChatState
