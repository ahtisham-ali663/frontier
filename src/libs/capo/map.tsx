import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { outage } from './outage'
import L from 'leaflet'
import * as topojson from 'topojson-client'
import { ftrCaTopoJson } from './allMapData'
import ToggleButton from './toggle'
import { makeStyles } from '@material-ui/core'

const Map = () => {
  // const cordinates = statesData.features.map((state) => {
  //   const cordinates = state.geometry.coordinates[0].map((item) => [
  //     console.log(‘codinates: ’, item[1]),
  //   ])
  //   return cordinates
  // })
  //topojson.feature()
  const serviceCounties = topojson.feature(
    ftrCaTopoJson,
    ftrCaTopoJson.objects.Service_Counties,
  )
  const serviceBounds = topojson.feature(
    ftrCaTopoJson,
    ftrCaTopoJson.objects.Service_Bounds,
  )
  const CaState = topojson.feature(
    ftrCaTopoJson,
    ftrCaTopoJson.objects.CA_State,
  )
  const ZipCodes = topojson.feature(
    ftrCaTopoJson,
    ftrCaTopoJson.objects.Service_ZipCodes,
  )

  const pin = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
  const pinMB = L.icon({
    iconUrl: pin,
    iconSize: [24, 41],
    iconAnchor: [0, 44],
    popupAnchor: [12, -40],
  })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ToggleButton />
      <MapContainer
        center={[36.78991208264064, -118.94444972062315]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: 400, width: '100%' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=elOJ3hZCpng5pPPHyNW1"
          bounds={[
            [-123.233256, 42.006186],
            [-122.378853, 42.011663],
          ]}
        />
        {outage.outages.features.map(
          (data: { geometry: { coordinates: any; type: any } }) => {
            if (data.geometry.type === 'Point') {
              return (
                <Marker
                  position={[
                    data.geometry.coordinates[1],
                    data.geometry.coordinates[0],
                  ]}
                  icon={pinMB}
                >
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              )
            }
            // else {
            //   const cord = data.geometry.coordinates[0].map((item) => [
            //     item[1],
            //     item[0],
            //   ])
            //   return (
            //     <Polygon
            //       pathOptions={{
            //         fillColor: ‘green’,
            //         weight: 0.5,
            //         opacity: 1,
            //         color: ‘black’,
            //         fillOpacity: 0.1,
            //       }}
            //       positions={cord}
            //     />
            //   )
            // }
          },
        )}
        <GeoJSON
          data={serviceCounties}
          style={{ fillColor: 'grey', weight: 0.3, fillOpacity: 0.3 }}
        />
        <GeoJSON
          data={CaState}
          style={{ fillColor: '#00000', weight: 0.3, fillOpacity: 0.3 }}
        />
        <GeoJSON
          data={serviceBounds}
          style={{ fillColor: 'red', weight: 0.8, fillOpacity: 0.3 }}
        />
        {/* <GeoJSON
          data={ZipCodes}
          style={{
            fillColor: '#FF0000',
            weight: 0.8,
            color: '#00FFFF',
            fillOpacity: 0,
          }} */}
        {/* /> */}

        {/* {statesData1.features.map((state) => {
        const cordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ])
        return (
          <Polygon
            pathOptions={{
              fillColor: ‘red’,
              weight: 0.5,
              opacity: 1,
              color: ‘red’,
              fillOpacity: 0.1,
            }}
            positions={cordinates}
          />
        )
      })} */}
      </MapContainer>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    margin: 'auto',
  },
}))

export default Map
