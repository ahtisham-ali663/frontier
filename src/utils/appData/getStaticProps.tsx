import { fetchAppData } from './fetcher'

const getStaticProps = (path = '/', returnDirty = false) => {
  console.log('path', path)

  return async () => {
    const data = await fetchAppData(path, returnDirty)
    console.log('fetchAppData', data?.fields?.data)

    const success = Object.keys(data)?.length > 0
    return {
      props: {
        success,
        data,
      },
      revalidate: 60,
    }
  }
}

export default getStaticProps
