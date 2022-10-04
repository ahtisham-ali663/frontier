import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { LinearProgress } from '@material-ui/core'
import { VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import customStaticProps from 'src/utils/appData'

import PageHead from 'src/components/PageHead'
import { useAlterChatRedirects, usePageLoadEvents } from 'src/hooks'
import DynamicStateComponent from 'src/libs/local/state'
const NewHeader = dynamic(() => import('src/components/NewHeader'))
const NewFooter = dynamic(() => import('src/components/NewFooter'))
const Chat = dynamic(() => import('src/components/Chat'))

interface PageProps {
  data: any
}

interface NonDynamicComponentType {
  [key: string]: boolean
}

const NON_DYNAMIC_COMPONENTS: NonDynamicComponentType = {
  PageMeta: true,
  Alerts: true,
  'Sticky Navigation': true,
  newFooter: true,
  LegalDescription: true,
  HeaderUpdated: true,
}

function SSR({ data }: PageProps): JSX.Element {
  const router = useRouter()
  const [pageMetaData, setPageMetaData] = useState(null)
  useAlterChatRedirects(!!data)

  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    eventData: {
      pageName: `ftr:${router.asPath.split('/').splice(1, 2).join('/')}`,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })

  useEffect(() => {
    if (data) {
      const { pageMeta }: any = data
      setPageMetaData(pageMeta)
    }
  }, [data])
  // if (!success) return <SomethingWrong />
  const getComponentData = (field: string) => {
    return data?.items?.find(
      ({ componentName }: any) => componentName === field,
    )?.fields?.data?.datasource
  }
  const headerData: any = getComponentData('HeaderUpdated')
  const footerData: any = getComponentData('newFooter')
  const stickyData: any = getComponentData('Sticky Navigation')
  const alertData: any = getComponentData('Alerts')
  const legalData: any = getComponentData('LegalDescription')
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) return <LinearProgress />
  const dynamicComponents =
    data?.items?.filter(
      ({ componentName }: any) => !NON_DYNAMIC_COMPONENTS[componentName],
    ) || []

  return (
    <Fragment>
      {pageMetaData && <PageHead data={pageMetaData} />}
      {headerData && (
        <NewHeader
          headerData={headerData}
          stickyData={stickyData}
          alertData={alertData}
        />
      )}
      {dynamicComponents?.map((compData: any, i: number) => (
        <DynamicStateComponent data={compData} key={i} />
      ))}
      {footerData && <NewFooter data={footerData} legalData={legalData} />}
      {pageMetaData && <Chat />}
    </Fragment>
  )
}

export const getStaticPaths = () => ({
  paths: [],
  fallback: true,
})

interface ContextProps {
  params: {
    state: string
  }
}

//Need to use server side props for dynamic pages
export const getStaticProps = async (context: ContextProps) => {
  return await customStaticProps(`/local/${context.params.state}`, true)()
}

export default SSR
