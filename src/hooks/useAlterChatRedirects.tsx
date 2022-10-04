import { useEffect, useState } from 'react'
import useChatState from './useChatState'

const useAlterChatRedirects = (isLoaded: boolean) => {
  const { setChatState } = useChatState()
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(isLoaded)
  }, [isLoaded])

  useEffect(() => {
    if (rendered && document) {
      const elements: any = document.querySelectorAll('[id=enableChat]')
      for (const chatLink of elements) {
        chatLink.href = ''
        chatLink.onclick = (e: any) => {
          setChatState(true)
          e.preventDefault()
          return false
        }
      }
    }
  }, [rendered])
}

export default useAlterChatRedirects
