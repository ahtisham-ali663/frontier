/* eslint-disable react/jsx-key */
import {
  MapContainer,
  // Marker,
  // Popup,
  TileLayer,
  Polygon,
  CircleMarker,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { stateData } from '../../constants'
import ToggleButton from './toggle'

const Map = () => {
  // const cordinates = statesData.features.map((state) => {
  //   const cordinates = state.geometry.coordinates[0].map((item) => [
  //     { lat: item[1], lng: item[0] },
  //   ])
  //   return cordinates
  // })
  return (
    <div>
      <ToggleButton />
      <MapContainer
        center={[36.78991208264064, -118.94444972062315]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: 450, width: '90%', margin: 'auto' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=elOJ3hZCpng5pPPHyNW1"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          bounds={[
            [-123.233256, 42.006186],
            [-122.378853, 42.011663],
          ]}
          //minZoom={4}
        />
        {/* <Marker
          position={[36.78991208264064, -118.94444972062315]}
        >
          <Popup>Hello California</Popup>
        </Marker> */}
        <CircleMarker
          center={[36.78991208264064, -118.94444972062315]}
          color={'red'}
          radius={5}
        ></CircleMarker>

        {stateData.features.map((state) => {
          const cordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ])
          return (
            <Polygon
              pathOptions={{
                fillColor: 'grey',
                weight: 2,
                opacity: 1,
                color: 'grey',
                fillOpacity: 0.5,
                lineCap: 'square',
              }}
              positions={cordinates}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
