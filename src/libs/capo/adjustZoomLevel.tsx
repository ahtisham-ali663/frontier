import { useMapEvents } from 'react-leaflet'

const AdjustZoomLevel = ({ ...props }) => {
  const mapEvents = useMapEvents({
    zoomend: () => {
      props.setZoomLevel(mapEvents.getZoom())
    },
  })
  return null
}

export default AdjustZoomLevel
