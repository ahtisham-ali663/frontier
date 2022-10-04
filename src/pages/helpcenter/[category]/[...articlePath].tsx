import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { LinearProgress } from '@material-ui/core'
import { VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import customStaticProps from 'src/utils/appData'
import PageHead from 'src/components/PageHead'
import { useAlterChatRedirects, usePageLoadEvents } from 'src/hooks'
import DynamicArticleComponent from 'src/libs/helpcenter/category/article'
import Hero from 'src/libs/helpcenter/category/article/components/BreadCrumbAndSearchBar'
import ComponentWrapper, {
  LeftWrapper,
  RightWrapper,
} from 'src/libs/helpcenter/category/article/components/ComponentWrapper'
import SomethingWrong from 'src/components/SomethingWrong'
import { appDataSlice } from 'src/redux/slicers'
import MedalliaFeedback from 'src/libs/helpcenter/category/article/components/MedalliaFeedback'
import SocialMedia from 'src/libs/helpcenter/category/article/components/SocialMedia'
import { FindWhatYouNeed } from 'src/libs/helpcenter/common'
import { useDispatch } from 'react-redux'
import dataParser from 'src/utils/appData/data-parser'

const NewHeader = dynamic(() => import('src/components/NewHeader'))
const NewFooter = dynamic(() => import('src/components/NewFooter'))
const Chat = dynamic(() => import('src/components/Chat'))

interface PageProps {
  data: any
  success: boolean
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
  contactUs: true,
}

const RIGHT_LAYOUT_COMPONENT: NonDynamicComponentType = {
  jumpLinks: true,
  social_media_links: true,
}

function SSR({ data, success }: PageProps): JSX.Element {
  const router = useRouter()
  const dispatch = useDispatch()
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
    const parsedData = dataParser({
      sitecore: {
        route: {
          placeholders: {
            json: data?.items || [],
          },
        },
      },
    })
    dispatch(appDataSlice.actions.setData(parsedData))
  }, [dispatch, data])

  useEffect(() => {
    if (data) {
      const { pageMeta }: any = data
      setPageMetaData(pageMeta)
    }
  }, [data])

  const getComponent = (field: string) =>
    data?.items?.find(({ componentName }: any) => componentName === field)

  const getComponentData = (field: string) => {
    return data?.items?.find(
      ({ componentName }: any) => componentName === field,
    )?.fields?.data?.datasource
  }

  // Fixed layout items
  const headerData: any = getComponentData('HeaderUpdated')
  const footerData: any = getComponentData('newFooter')
  const legalData: any = getComponentData('LegalDescription')
  const stickyData: any = getComponentData('Sticky Navigation')
  const alertData: any = getComponentData('Alerts')
  const contactData: any = getComponentData('ChatWithUs')

  // Right fixed layout items
  const jumpLinks: any = getComponent('jumpLinks')
  const socialMediaLinks: any = getComponent('social_media_links')
  const rightElements = [jumpLinks, socialMediaLinks]

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) return <LinearProgress />
  const dynamicComponents =
    data?.items?.filter(
      ({ componentName }: any) =>
        !NON_DYNAMIC_COMPONENTS[componentName] &&
        !RIGHT_LAYOUT_COMPONENT[componentName],
    ) || []

  if (!success) return <SomethingWrong />

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
      <Hero />
      <ComponentWrapper>
        <LeftWrapper>
          {dynamicComponents?.map((compData: any, i: number) => (
            <DynamicArticleComponent data={compData} key={i} />
          ))}
          <SocialMedia
            data={socialMediaLinks?.fields?.data?.datasource}
            hideOnLargeDisplays
          />
          <MedalliaFeedback />
        </LeftWrapper>
        <RightWrapper>
          {rightElements?.map((compData: any, i: number) => (
            <DynamicArticleComponent data={compData} key={i} />
          ))}
        </RightWrapper>
      </ComponentWrapper>
      {contactData && <FindWhatYouNeed data={contactData} />}
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
    category: string
    articlePath: string[]
  }
}

// Need to use server side props for dynamic pages
export const getStaticProps = async (context: ContextProps) => {
  const articleName = (context.params.articlePath ?? []).join('/')
  return await customStaticProps(
    `/helpcenter/${context.params.category}/${articleName}`,
    true,
  )()
}

export default SSR
