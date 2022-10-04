import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import { LinearProgress } from '@material-ui/core'
import { VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import { DynamicComponent } from 'src/libs/resources'
import customStaticProps from 'src/utils/appData'
// const SomethingWrong = dynamic(() => import('src/components/SomethingWrong'))
import PageHead from 'src/components/PageHead'
import { usePageLoadEvents } from 'src/hooks'
const NewHeader = dynamic(() => import('src/components/NewHeader'))
const NewFooter = dynamic(() => import('src/components/NewFooter'))
const Chat = dynamic(() => import('src/components/Chat'))
import { ScrollTop } from 'src/blitz'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // success: boolean
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
  const classes = useStyle()
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
  const legalData: any = getComponentData('LegalDescription')
  const footerData: any = getComponentData('newFooter')
  const stickyData: any = getComponentData('Sticky Navigation')
  const alertData: any = getComponentData('alerts')
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
      {/* {stickyNavData && <StickyHeader data={stickyNavData} />} */}
      {headerData && (
        <NewHeader
          headerData={headerData}
          stickyData={stickyData}
          alertData={alertData}
        />
      )}
      <div className={classes.wrapper}>
        {dynamicComponents?.map((compData: any, i: number) => (
          <DynamicComponent data={compData} key={i} />
        ))}
      </div>
      <ScrollTop />
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
    page: string
  }
}

//Need to use server side props for dynamic pages
export const getStaticProps = async (context: ContextProps) => {
  return await customStaticProps(`/resources/${context.params.page}`, true)()
}
const useStyle = makeStyles(({ breakpoints }) => ({
  wrapper: {
    margin: 50,
    marginBottom: 80,
    [breakpoints.down('sm')]: {
      margin: '0px',
      marginBottom: 60,
    },
  },
}))
export default SSR
