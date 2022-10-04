import { useSelector } from 'react-redux'

const useAppData = (id: string, pullDataSource = false, item = null) => {
  if (item) return item
  // eslint-disable-next-line react-hooks/rules-of-hooks
  console.log(item, 'useAppDAta item')
  console.log(id, 'useAppDAta id')
  console.log(pullDataSource, 'useAppDAta pullDataSource')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useSelector((state: any) => state?.appData?.data?.[id])
  console.log(data, 'useAppDAta')
  if (pullDataSource) {
    return data?.fields?.data?.datasource || {}
  }
  return data || {}
}

export default useAppData
