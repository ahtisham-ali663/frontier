import {
  Hero,
  HelpCenterFAQ,
  QuickLinks,
  SupportArticles,
  BlogArticles,
  Videos,
} from './index'
import { BreadcrumbNav, FindWhatYouNeed } from '../common'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

const PageWrapper: React.FC<{ page: string }> = ({ page }) => {
  const { pathname } = useRouter() || {}
  const styles = useStyles()
  return (
    <div>
      <Hero page={page} />
      {page && (
        <BreadcrumbNav url={pathname} className={styles.breadcrumbNav} />
      )}
      <QuickLinks />
      <HelpCenterFAQ />
      <SupportArticles />
      <Videos />
      {!page && <BlogArticles />}
      <FindWhatYouNeed />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  breadcrumbNav: {
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

export default PageWrapper
