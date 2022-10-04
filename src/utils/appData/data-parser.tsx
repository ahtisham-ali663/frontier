const dataParser = (data: any) => {
  const jssFields = data?.sitecore?.route?.placeholders?.json || []
  const pageMeta = data?.sitecore?.route?.fields || []
  const dataDictionary: any = {}
  for (const item of jssFields) {
    const { fields, params, componentName } = item || {}
    dataDictionary[componentName] = { fields, params }
  }
  const parsedData = {
    ...dataDictionary,
    PageMeta: pageMeta,
  }
  return parsedData
}

export default dataParser
