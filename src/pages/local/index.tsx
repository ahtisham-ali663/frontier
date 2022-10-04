import { useEffect } from 'react'
import dynamic from 'next/dynamic'
const SomethingWrong = dynamic(() => import('src/components/SomethingWrong'))
import { useDispatch } from 'react-redux'
import customStaticProps from 'src/utils/appData'
const Footer = dynamic(() => import('src/components/Footer'))
const PageHead = dynamic(() => import('src/components/PageHead'))
const TopBar = dynamic(() => import('src/components/TopBar'))
const StickyHeader = dynamic(() => import('src/components/StickyHeader'))
import { appDataSlice } from 'src/redux/slicers'
import { useAlterChatRedirects } from 'src/hooks'

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR({ data, success }: PageProps): JSX.Element {
  const dispatch = useDispatch()
  useAlterChatRedirects(success)
  // Updating data to redux store
  useEffect(() => {
    dispatch(appDataSlice.actions.setData(data))
  }, [dispatch, data])
  if (!success) return <SomethingWrong />

  return (
    <>
      <PageHead />
      <StickyHeader />
      <TopBar />
      <Footer />
    </>
  )
}

export const getStaticProps = customStaticProps('/')

export default SSR
