import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import InvocaClient from 'src/utils/invoca'

type EventDataType = {
  pageName?: string
  eVar22?: string
  eVar49?: string
  prop31?: string
  pageUrl?: string
  events?: string
  pageType?: string
  eVar14?: string
  eVar50?: string
  eVar69?: string
}

type PageLoadEventType = {
  shouldTriggerDTMEvent?: boolean
  shouldInvokeDTMPageLoadEvent?: boolean
  shouldTriggerInvoca?: boolean
  eventData?: EventDataType
}
const usePageLoadEvents = (data: PageLoadEventType) => {
  console.log('usePageLoadEvents data', data)
  const shouldTriggerDTMEvent = data?.shouldTriggerDTMEvent || false
  const shouldInvokeDTMPageLoadEvent =
    data?.shouldInvokeDTMPageLoadEvent || false
  const shouldTriggerInvoca = data?.shouldTriggerInvoca || false
  const hasDTMLLoaded = useSelector(
    (state: any) => state?.appConfig?.configs?.['DTM'],
  )
  const hasINVOCALoaded = useSelector(
    (state: any) => state?.appConfig?.configs?.['INVOCA'],
  )

  useEffect(() => {
    if (hasDTMLLoaded && shouldTriggerDTMEvent) {
      DTMClient.triggerEvent(data?.eventData)
    }
  }, [hasDTMLLoaded])

  useEffect(() => {
    if (hasDTMLLoaded && shouldInvokeDTMPageLoadEvent) {
      DTMClient.pageLoadEvent()
    }
  }, [hasDTMLLoaded])

  useEffect(() => {
    if (hasINVOCALoaded && shouldTriggerInvoca) {
      InvocaClient.pageLoadEvent()
    }
  }, [hasINVOCALoaded])
}

export default usePageLoadEvents
