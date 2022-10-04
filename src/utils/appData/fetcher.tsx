import dataParser from './data-parser'
export const SITECORE_API_URL = process.env.SITECORE_API_URL
export const fetchAppData = async (itemId: string, returnDirty = false) => {
  console.log('ITEMUD', itemId)
  const API_TOKEN = process.env.SITECORE_API_KEY
  const fetchUrl = `${SITECORE_API_URL}/sitecore/api/layout/render/jss?item=${itemId.replace(
    /\//g,
    '%2F',
  )}&sc_apikey=${API_TOKEN}&sc_lang=en`
  console.log('FETCH URL', fetchUrl)
  try {
    const res = await fetch(fetchUrl)
    const appDataContent = await res.json()
    console.log('RESPO', appDataContent)

    if (returnDirty) {
      return {
        pageMeta: appDataContent?.sitecore?.route?.fields || {},
        items: appDataContent?.sitecore?.route?.placeholders?.json || [],
      }
    }
    const parsed = dataParser(appDataContent)
    return parsed
  } catch (err) {
    console.log('line 25 error', err)
    return {}
  }
}
