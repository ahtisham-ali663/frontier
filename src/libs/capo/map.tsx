import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Polygon,
} from 'react-leaflet'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import * as topojson from 'topojson-client'
import { ftrCaTopoJson } from './californiaTopoJsonData'
import ToggleButton from './toggle'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { API_ROUTES } from 'src/constants'
import { GeometryObject, Topology } from 'topojson-specification'
import AdjustZoomLevel from './adjustZoomLevel'
import PopupData from './popupData'
import BlueSvg from 'src/blitz/assets/png/blueSvgIcon'
import YellowSvg from 'src/blitz/assets/png/yellowSvgIcon'
import ReactDOMServer from 'react-dom/server'
import { Typography } from 'src/blitz'

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
  const [serviceOutageError, setServiceOutageError] = useState('')
  const [outageError, setOutageError] = useState('')
  const [disasterError, setDisasterError] = useState('')

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
    const outages = await getOutages()
    const disester = await getDisasters()
    const serviceOutages = await getServiceOutages()

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
        county.properties.soe = disasterData?.filter((event) => {
          if (event.COUNTY_NAME == county.properties.Name20) {
            return event
          }
        })
        if (county.properties.soe?.length > 0) {
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
    return disasterCountiesData
  }

  const getDisasters = async () => {
    try {
      const disasters = await axios.get(API_ROUTES.DISASTERS)
      return disasters.data
    } catch (error) {
      setDisasterError(
        'Unable to retrieve state of emergency data. Please try again later.',
      )
    }
  }

  const getOutages = async () => {
    try {
      const outages = await axios.get(API_ROUTES.OUTAGES)
      return outages.data
    } catch (error) {
      setOutageError('Unable to retrieve outage data. Please try again later.')
    }
  }

  const getServiceOutages = async () => {
    try {
      const serviceOutages = await axios.get(API_ROUTES.SERVICE_OUTAGES)
      return serviceOutages.data
    } catch (error) {
      setServiceOutageError(
        'Unable to retrieve service outages data. Please try again later.',
      )
    }
  }

  const classes = useStyles()

  const onToggleHandler = (isService: boolean, isPower: boolean) => {
    setIsPower(isPower)
    setIsService(isService)
  }

  const yellowSvg = L.divIcon({
    html: ReactDOMServer.renderToString(<YellowSvg />),
    iconSize: [0, 0],
    className: `<style>
    backgroundColor: ‘transparent’,
    borderColor: ‘transparent’,
    </style>`,
  })
  const blueSvg = L.divIcon({
    html: ReactDOMServer.renderToString(<BlueSvg />),
    iconSize: [0, 0],
    className: `<style>
    backgroundColor: ‘transparent’,
    borderColor: ‘transparent’,
    </style>`,
  })

  const eventHandlers = {
    mouseover: (event: any) => event.target.openPopup(),
    click: (event: any) => event.target.openPopup(),
  }

  return (
    <div className={classes.root}>
      <ToggleButton onToggleHandler={onToggleHandler} />
      {outageError != '' && (
        <div className={classes.error}>
          <Typography
            tagType="h5"
            styleType="h5"
            fontType="regularFont"
            className={classes.errorText}
          >
            {outageError}
          </Typography>
        </div>
      )}
      {serviceOutageError != '' && (
        <div className={classes.error}>
          <Typography
            tagType="h5"
            styleType="h5"
            fontType="regularFont"
            className={classes.errorText}
          >
            {serviceOutageError}
          </Typography>
        </div>
      )}
      {disasterError != '' && (
        <div className={classes.error}>
          <Typography
            tagType="h5"
            styleType="h5"
            fontType="regularFont"
            className={classes.errorText}
          >
            {disasterError}
          </Typography>
        </div>
      )}
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
                    icon={blueSvg}
                    eventHandlers={eventHandlers}
                  >
                    <PopupData data={data} isPin={'outage'} classes={classes} />
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
                eventHandlers={eventHandlers}
              >
                <PopupData data={item} isPin={'disaster'} classes={classes} />
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
                icon={yellowSvg}
                eventHandlers={eventHandlers}
              >
                <PopupData data={data} isPin={'service'} classes={classes} />
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
  error: {
    display: 'flex',
    background: '#f8d7da',
    marginBottom: '1rem',
    border: '1px solid #f5c2c7',
    borderRadius: '0.25rem',
    justifyContent: 'center',
    padding: '1rem',
  },
  errorText: {
    color: '#842032',
  },
}))

export default Map
