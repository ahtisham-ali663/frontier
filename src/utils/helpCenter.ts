export const getBreadcrumbRoutes = (url = '') => {
  if (!url) {
    return []
  }
  const urlSplits = url.split('/').filter((x) => x)
  const routes = []
  for (let i = 0; i < urlSplits.length; i++) {
    routes.push({
      pageName:
        urlSplits[i] === 'helpcenter'
          ? 'Support'
          : formatPageName(urlSplits[i]),
      href: '/' + urlSplits.slice(0, i + 1).join('/'),
      isCurrent: urlSplits.length === i + 1,
    })
  }
  return routes
}

const formatPageName = (pageName = '') => {
  if (!pageName) {
    return ''
  }
  return pageName.replace(/-/g, ' ')
}
