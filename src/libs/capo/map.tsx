import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvents,
} from 'react-leaflet'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { outage } from './outage'
import L from 'leaflet'
import * as topojson from 'topojson-client'
import { ftrCaTopoJson } from './allMapData'
import ToggleButton from './toggle'
import { makeStyles } from '@material-ui/core'

const Map = () => {
  // const [isService, setIsService] = useState(false)
  const [isPower, setIsPower] = useState(false)

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

  function MyComponent() {
    const [zoomLevel, setZoomLevel] = useState(5)
    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom())
      },
    })
    if (zoomLevel >= 10) {
      return (
        <GeoJSON
          data={ZipCodes}
          style={{
            fillColor: '#FF0000',
            weight: 0.8,
            color: '#00FFFF',
            fillOpacity: 0,
          }}
          onEachFeature={(feature, layer) => {
            const tooltipChildren = feature.properties.Zcta5ce10
            const content = `<div> ${tooltipChildren} </div>`
            layer.bindTooltip(content, {
              direction: 'center',
              permanent: true,
              className: classes.toolTipContent,
            })
          }}
        ></GeoJSON>
      )
    }
    return null
  }

  const pin = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
  const pinMB = L.icon({
    iconUrl: pin,
    iconSize: [24, 41],
    iconAnchor: [0, 44],
    popupAnchor: [12, -40],
  })
  const classes = useStyles()

  const onToggleHandler = (isService: boolean, isPower: boolean) => {
    setIsPower(isPower)
    // setIsService(isService)
  }

  return (
    <div className={classes.root}>
      <ToggleButton onToggleHandler={onToggleHandler} />
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

        {!isPower &&
          outage.outages.features.map(
            (data: {
              geometry: { type: any; coordinates: any }
              properties: {
                OUTAGE_COUNT: any
                OUTAGE_CAUSE: any
                ESTIMATED_RESTORE_DT: any
              }
            }) => {
              if (data.geometry.type === 'Point') {
                return (
                  <Marker
                    position={[
                      data.geometry.coordinates[1],
                      data.geometry.coordinates[0],
                    ]}
                    icon={pinMB}
                    eventHandlers={{
                      mouseover: (event) => event.target.openPopup(),
                      // mouseout: (event) => event.target.closePopup(),
                    }}
                  >
                    <Popup>
                      <div className={classes.wrapper}>
                        Outage Count:{''}
                        <div className={classes.popupContent}>
                          {data.properties.OUTAGE_COUNT}
                        </div>
                      </div>
                      <div className={classes.wrapper}>
                        Outage Cause:{''}
                        <div className={classes.popupContent}>
                          {data.properties.OUTAGE_CAUSE === 'null'
                            ? ' Not currently available'
                            : data.properties.OUTAGE_CAUSE}
                        </div>
                      </div>
                      <div className={classes.wrapper}>
                        Estimated Restoration Time:{''}
                        <div className={classes.popupContent}>
                          {data.properties.ESTIMATED_RESTORE_DT.length < 1
                            ? ' Not currently available'
                            : data.properties.ESTIMATED_RESTORE_DT}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                )
              }
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
          }}
          onEachFeature={(feature, layer) => {
            const tooltipChildren = feature.properties.Zcta5ce10
            const content = `<div> ${tooltipChildren} </div>`
            layer.bindTooltip(content, {
              direction: 'center',
              permanent: true,
              className: classes.toolTipContent,
            })
          }}
        ></GeoJSON> */}
        <MyComponent />
      </MapContainer>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    margin: 'auto',
  },
  wrapper: {
    marginBottom: '1rem',
  },
  popupContent: {
    display: 'inline',
    fontWeight: 'inherit',
  },
  toolTipContent: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
  },
}))

export default Map
