import { useMapEvents } from 'react-leaflet'

interface PageProps {
  setZoomLevel: (event: any) => void
}

const AdjustZoomLevel = (props: PageProps) => {
  const { setZoomLevel } = props
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })
  return null
}

export default AdjustZoomLevel
