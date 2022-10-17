import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { outage } from './outage'
import L from 'leaflet'
import * as topojson from 'topojson-client'
import { ftrCaTopoJson } from './allMapData'
import ToggleButton from './toggle'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { API_ROUTES } from 'src/constants'
import { GeometryObject, Topology } from 'topojson-specification'
import AdjustZoomLevel from './adjustZoomLevel'

const Map = () => {
  // const [isService, setIsService] = useState(false)
  const [isPower, setIsPower] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(5)

  const serviceCounties = topojson.feature(
    ftrCaTopoJson as unknown as Topology,
    ftrCaTopoJson.objects.Service_Counties as GeometryObject,
  )
  const serviceBounds = topojson.feature(
    ftrCaTopoJson as unknown as Topology,
    ftrCaTopoJson.objects.Service_Bounds as GeometryObject,
  )
  const CaState = topojson.feature(
    ftrCaTopoJson as unknown as Topology,
    ftrCaTopoJson.objects.CA_State as GeometryObject,
  )
  const ZipCodes = topojson.feature(
    ftrCaTopoJson as unknown as Topology,
    ftrCaTopoJson.objects.Service_ZipCodes as GeometryObject,
  )

  const OnEachZipCodeFeature = (feature: any, layer: any) => {
    const tooltipChildren = feature.properties.Zcta5ce10
    const content = `<div> ${tooltipChildren} </div>`
    return layer.bindTooltip(content, {
      direction: 'center',
      permanent: true,
      className: classes.toolTipContent,
    })
  }

  useEffect(() => {
    const getOutages = async () => {
      try {
        const outages = await axios.get(API_ROUTES.OUTAGES)
        console.log(outages.data, 'get outages details')
      } catch (error) {
        console.log('errorors', error)
      }
    }

    getOutages()
  }, [])

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
                      click: (event) => event.target.openPopup(),
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
          style={{ fillColor: 'grey', weight: 0.2, fillOpacity: 0 }}
        />
        <GeoJSON
          data={CaState}
          style={{ fillColor: '#00000', weight: 0.3, fillOpacity: 0.3 }}
        />
        <GeoJSON
          data={serviceBounds}
          style={{ fillColor: 'red', weight: 0.8, fillOpacity: 0.3 }}
        />

        <AdjustZoomLevel setZoomLevel={setZoomLevel} />
        {zoomLevel > 9 && (
          <GeoJSON
            data={ZipCodes}
            style={{
              fillColor: '#FF0000',
              weight: 0.8,
              color: '#00FFFF',
              fillOpacity: 0,
            }}
            onEachFeature={OnEachZipCodeFeature}
          ></GeoJSON>
        )}
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
