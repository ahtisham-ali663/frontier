import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Polygon,
} from 'react-leaflet'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
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
  const [isService, setIsService] = useState(false)
  const [isPower, setIsPower] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(5)
  const [disaster, setDisaster] = useState<{
    type: string
    name: string
    features: any
  }>({
    type: '',
    name: '',
    features: [],
  })
  const [outage, setOutage] = useState<{
    type: string
    name: string
    features: any
  }>({
    type: '',
    name: '',
    features: [],
  })

  const [serviceOutage, setServiceOutage] = useState<{
    type: string
    name: string
    features: any
  }>({
    type: '',
    name: '',
    features: [],
  })

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

  useEffect(async () => {
    const disester = await getDisasters()
    const outages = await getOutages()
    const serviceOutages = await getServiceOutages()

    console.log('serviceOutages', serviceOutages)

    if (outages) {
      setOutage(outages)
    }

    if (disaster) {
      const counties = mapDisasterEventsToCounties(disester, serviceCounties)
      setDisaster(counties)
    }

    if (serviceOutages) {
      setServiceOutage(serviceOutages)
    }
  }, [])

  const mapDisasterEventsToCounties = (
    disasterData: any[],
    servieCounties: any[],
  ) => {
    const disasterCounties = servieCounties.features.reduce(
      (soeCounties, county) => {
        county.properties.soe = disasterData.filter((event) => {
          if (event.COUNTY_NAME == county.properties.Name20) {
            return event
          }
        })
        if (county.properties.soe.length > 0) {
          return soeCounties.concat(county)
        }
        return soeCounties
      },
      [],
    )

    const disasterCountiesData = {
      type: 'FeatureCollection',
      name: 'GeoJSON',
      features: disasterCounties,
    }

    console.log(disasterCountiesData, 'disasterCountiesData')
    return disasterCountiesData
  }

  const getDisasters = async () => {
    try {
      const disasters = await axios.get(API_ROUTES.DISASTERS)
      console.log(disasters.data, 'get disaster details')
      return disasters.data
    } catch (error) {
      console.log('disaster error', error)
    }
  }

  const getOutages = async () => {
    try {
      const outages = await axios.get(API_ROUTES.OUTAGES)
      console.log(outages.data, 'get outages details')
      return outages.data
    } catch (error) {
      console.log('outages error', error)
    }
  }

  const getServiceOutages = async () => {
    try {
      const serviceOutages = await axios.get(API_ROUTES.SERVICE_OUTAGES)
      console.log(serviceOutages.data, 'get serviceOutages details')
      return serviceOutages.data
    } catch (error) {
      console.log('serviceOutages error', error)
    }
  }

  const classes = useStyles()

  const onToggleHandler = (isService: boolean, isPower: boolean) => {
    setIsPower(isPower)
    setIsService(isService)
  }

  const pin = `https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png`
  const bluePin = L.icon({
    iconUrl: pin,
    iconSize: [24, 41],
    iconAnchor: [0, 44],
    popupAnchor: [12, -40],
  })

  // const yellowSvg = L.divIcon({
  //   html: `<svg
  //     width=“30”
  //     height=“30"
  //     viewBox=“0 0 24 24”
  //     fill=“#FD7E14"
  //     xmlns=“http://www.w3.org/2000/svg”
  //   >
  //     <path
  //       d=“M11.0625 23.5312C11.25 23.8594 11.5781 24 12 24C12.375 24 12.7031 23.8594 12.9375 23.5312L16.0781 19.0312C17.625 16.7812 18.6562 15.2812 19.1719 14.4844C19.875 13.3594 20.3438 12.4219 20.625 11.6719C20.8594 10.9219 21 10.0312 21 9C21 7.40625 20.5781 5.90625 19.7812 4.5C18.9375 3.14062 17.8594 2.0625 16.5 1.21875C15.0938 0.421875 13.5938 0 12 0C10.3594 0 8.85938 0.421875 7.5 1.21875C6.09375 2.0625 5.01562 3.14062 4.21875 4.5C3.375 5.90625 3 7.40625 3 9C3 10.0312 3.09375 10.9219 3.375 11.6719C3.60938 12.4219 4.07812 13.3594 4.82812 14.4844C5.29688 15.2812 6.32812 16.7812 7.92188 19.0312C9.1875 20.8594 10.2188 22.3594 11.0625 23.5312ZM12 12.75C10.9688 12.75 10.0781 12.4219 9.32812 11.6719C8.57812 10.9219 8.25 10.0312 8.25 9C8.25 7.96875 8.57812 7.125 9.32812 6.375C10.0781 5.625 10.9688 5.25 12 5.25C13.0312 5.25 13.875 5.625 14.625 6.375C15.375 7.125 15.75 7.96875 15.75 9C15.75 10.0312 15.375 10.9219 14.625 11.6719C13.875 12.4219 13.0312 12.75 12 12.75Z”
  //     />
  //     <circle cx=“12” cy=“9" r=“4” fill=“white”></circle>
  //   </svg>`,
  //   iconSize: [0, 0],
  //   className: `<style>
  //   backgroundColor: ‘transparent’,
  //   borderColor: ‘transparent’,
  //   </style>`,
  // })
  // const blueSvg = L.divIcon({
  //   html: `<svg
  //     width=“30”
  //     height=“30"
  //     viewBox=“0 0 24 24”
  //     fill=“#0D6EFD”
  //     xmlns=“http://www.w3.org/2000/svg”
  //   >
  //     <path
  //       d=“M11.0625 23.5312C11.25 23.8594 11.5781 24 12 24C12.375 24 12.7031 23.8594 12.9375 23.5312L16.0781 19.0312C17.625 16.7812 18.6562 15.2812 19.1719 14.4844C19.875 13.3594 20.3438 12.4219 20.625 11.6719C20.8594 10.9219 21 10.0312 21 9C21 7.40625 20.5781 5.90625 19.7812 4.5C18.9375 3.14062 17.8594 2.0625 16.5 1.21875C15.0938 0.421875 13.5938 0 12 0C10.3594 0 8.85938 0.421875 7.5 1.21875C6.09375 2.0625 5.01562 3.14062 4.21875 4.5C3.375 5.90625 3 7.40625 3 9C3 10.0312 3.09375 10.9219 3.375 11.6719C3.60938 12.4219 4.07812 13.3594 4.82812 14.4844C5.29688 15.2812 6.32812 16.7812 7.92188 19.0312C9.1875 20.8594 10.2188 22.3594 11.0625 23.5312ZM12 12.75C10.9688 12.75 10.0781 12.4219 9.32812 11.6719C8.57812 10.9219 8.25 10.0312 8.25 9C8.25 7.96875 8.57812 7.125 9.32812 6.375C10.0781 5.625 10.9688 5.25 12 5.25C13.0312 5.25 13.875 5.625 14.625 6.375C15.375 7.125 15.75 7.96875 15.75 9C15.75 10.0312 15.375 10.9219 14.625 11.6719C13.875 12.4219 13.0312 12.75 12 12.75Z”
  //     />
  //     <circle cx=“12” cy=“9" r=“4” fill=“white”></circle>
  //   </svg>`,
  //   iconSize: [0, 0],
  //   className: `<style>
  //   backgroundColor: ‘transparent’,
  //   borderColor: ‘transparent’,
  //   </style>`,
  // })

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
          outage.features.map(
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
                    icon={bluePin}
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

        {isPower &&
          disaster.features.map((item: any) => {
            const cord = item.geometry.coordinates[0].map((cord: any[]) => [
              cord[1],
              cord[0],
            ])
            return (
              // eslint-disable-next-line react/jsx-key
              <Polygon
                pathOptions={{
                  fillColor: '#00FFFF',
                  weight: 0.5,
                  opacity: 1,
                  color: '#fff',
                  fillOpacity: 0.3,
                }}
                positions={cord}
                eventHandlers={{
                  mouseover: (event) => event.target.openPopup(),
                  click: (event) => event.target.openPopup(),
                }}
              >
                <Popup>
                  <div className={classes.wrapper}>
                    <h2 className={classes.DisasterPopupRoot}>County: </h2>
                    <div className={classes.popupContent}>
                      <h2 className={classes.DisasterPopupRoot}>
                        {item.properties.soe[0].COUNTY_NAME}
                      </h2>
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Emergency:
                    <div className={classes.popupContent}>
                      {item.properties.soe[0].json_featuretype}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Type:
                    <div className={classes.popupContent}>
                      {item.properties.soe[0].SOE_TYPE}
                    </div>
                  </div>
                </Popup>
              </Polygon>
            )
          })}

        {!isService &&
          serviceOutage.features.map((data: any) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Marker
                position={[
                  data.geometry.coordinates[1],
                  data.geometry.coordinates[0],
                ]}
                icon={bluePin}
                eventHandlers={{
                  mouseover: (event) => event.target.openPopup(),
                  click: (event) => event.target.openPopup(),
                }}
              >
                <Popup>
                  <div className={classes.wrapper}>
                    Outage Type:
                    <div className={classes.popupContent}>
                      {data.properties.OUTAGE_TYPE}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Outage County:
                    <div className={classes.popupContent}>
                      {data.properties.OUTAGE_COUNTY}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Area Impacted:
                    <div className={classes.popupContent}>
                      {data.properties.OUTAGE_AREA_IMPACTED}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Impacted Users:
                    <div className={classes.popupContent}>
                      {data.properties.OUTAGE_COUNT}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    Estimated Restoral Time:
                    <div className={classes.popupContent}>
                      {data.properties.ESTIMATED_RESTORATION_DT}
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}

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
    fontWeight: 'bold',
    marginLeft: '3px',
    fontSize: '12px',
  },
  toolTipContent: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
  },
  DisasterPopupRoot: {
    display: 'inline',
  },
}))

export default Map
