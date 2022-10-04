import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import {
  Hero,
  WhatToExpect,
} from 'src/libs/discount-programs/affordable-connectivity-program/service-check'
import {
  ACP_SERVICEABILITY_PAGE,
  VISITOR,
  UNVERIFIED_SERVICE_AREA,
  SERVICEABLE,
  UNSERVICEABLE,
} from 'src/constants'
import {
  ACPForm,
  Hero as FormHero,
} from 'src/libs/discount-programs/affordable-connectivity-program/service-check/form'
import { MoveARoo as Unserviceable } from 'src/libs/discount-programs/affordable-connectivity-program/service-check/unserviceable'
import {
  InfoMessage,
  WhatHappens,
} from 'src/libs/discount-programs/affordable-connectivity-program/service-check/info-message'
import { useSelector } from 'react-redux'
import { State } from 'src/redux/types'
import GTagSnippet, { GTagPageLoad } from 'src/utils/gtag'
import { usePageLoadEvents } from 'src/hooks'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  const availabilityResponse = useSelector((state: State) => {
    return state?.acp?.availabilityResponse
  })
  const { serviceType = '', zipCode = '' } = availabilityResponse || {}
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    eventData: {
      pageName: ACP_SERVICEABILITY_PAGE,
      eVar22: VISITOR,
      eVar49: serviceType
        ? serviceType === 'SERVICEABLE'
          ? SERVICEABLE
          : UNSERVICEABLE
        : UNVERIFIED_SERVICE_AREA,
      ...(serviceType && {
        events: 'event30',
        eVar50: zipCode,
        eVar69: serviceType,
      }),
    },
  })
  const step = useSelector((state: State) => state?.acp?.step)
  const contentRenderer = () => {
    switch (step) {
      case 'search':
        return (
          <>
            <Hero />
            <WhatToExpect />
          </>
        )
      case 'acp-form':
        return (
          <>
            <FormHero />
            <ACPForm />
          </>
        )
      case 'not-serviceable':
        return <Unserviceable />
      case 'success':
        return (
          <div>
            <InfoMessage componentName="ThankYouContent" />
            <WhatHappens />
          </div>
        )
      case 'error':
        return <InfoMessage componentName="ErrorContent" />
    }
  }
  return (
    <>
      <GTagSnippet />
      <GTagPageLoad />
      <MainLayout {...props}>{contentRenderer()}</MainLayout>
    </>
  )
}

export const getStaticProps = customStaticProps(
  '/discount-programs/affordable-connectivity-program/service-check',
)

export default SSR
