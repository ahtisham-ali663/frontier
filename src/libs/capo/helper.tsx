import dynamic from 'next/dynamic'

function MapHelper() {
  const Map = dynamic(() => import('./map'), { ssr: false })
  return <Map />
}

export default MapHelper
