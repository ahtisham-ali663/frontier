/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { Typography } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import CallIcon from '@material-ui/icons/Call'
import { useAppData } from 'src/hooks'
import Room from '@material-ui/icons/Room'
import axios from 'axios'
import Popover from '@material-ui/core/Popover'
import Grid from '@material-ui/core/Grid'
import MUIOutlinedInput from '@material-ui/core/OutlinedInput'
import { styled } from '@material-ui/core/styles'
import { setCookie, parseCookies } from 'nookies'
import { FRGUIDE_BOLD } from 'src/constants/fontFamilyNames'
import { API_ROUTES, COOKIES } from 'src/constants'

const OutlinedInput = styled(MUIOutlinedInput)({
  '& .MuiOutlinedInput-input': {
    padding: '8px 14px',
  },
})

interface StickyHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const { frontieramp = false } = parseCookies()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'location-popover' : undefined
  const classes = useStyles()
  const [location, setLocation] = useState({
    priority: '',
    zip: '',
    city: '',
    state: '',
  })
  const [zipCode, setZipCode] = useState('')
  const { callNowLabel, phoneNumber, phoneNumberLabel, readyMessage, sites } =
    useAppData('Sticky Navigation', true, data)

  useEffect(() => {
    const cookies = parseCookies()
    const geoLocationData = cookies[COOKIES.GEO_LOCATION_DATA]
    if (geoLocationData?.length || false) {
      const parsedGeoLocation = JSON.parse(geoLocationData)
      setLocation(parsedGeoLocation)
    } else {
      getLocation()
    }
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleZipCodeChange = (e: any) => {
    setZipCode(e.target.value)
  }
  const getLocation = async () => {
    try {
      const details = await axios.get(API_ROUTES.LOCATION)
      setLocation(details?.data)
      const locationData = {
        ...details?.data,
        latitude: null,
        longitude: null,
        metro_code: null,
        time_zone: null,
        iconColor: 'green',
      }
      setCookie(null, COOKIES.GEO_LOCATION_DATA, JSON.stringify(locationData), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  const onCheckAvalabilityClick = async () => {
    try {
      const details = await axios.post(API_ROUTES.LOCATION, { zip: zipCode })
      setLocation(details?.data)
      const locationData = {
        ...details?.data,
        latitude: null,
        longitude: null,
        metro_code: null,
        time_zone: null,
        iconColor: 'green',
      }
      setCookie(null, COOKIES.GEO_LOCATION_DATA, JSON.stringify(locationData), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setAnchorEl(null)
    } catch (error) {
      console.log('error in set location', error)
    }
  }
  return (
    <>
      {/* <FeedbackButton /> */}
      <div
        className={
          frontieramp || frontieramp == 'true'
            ? `${classes.root}  ${classes.nonLoggedIN}`
            : classes.root
        }
        data-testid="sticky-header"
        id="sticky-header"
      >
        <div className={`${classes.stickyRow} frontierRow`}>
          <ul className={classes.sitesRow}>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              sites?.site?.map((item: any, i: number) => {
                const {
                  title,
                  path: { url },
                } = item
                const isActive = i === 0
                return (
                  <li key={url}>
                    <a href={url}>
                      <Typography
                        className={`${classes.labelItem} ${
                          isActive && classes.linkActive
                        }`}
                      >
                        {title}
                      </Typography>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          {!frontieramp || frontieramp != 'true' ? (
            <div className={classes.rightContent}>
              {/* <div>
              <button
                className={classes.locationPinButton}
                onClick={handleClick}
              >
                <Room
                  fontSize="medium"
                  classes={{ root: classes.smallLocation }}
                />
                {(location?.city || '').length
                  ? `${location?.city}  ${location?.state} (change)`
                  : `(change)`}
              </button>
              <Popover
                id={'location-popover'}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popoverContainer }}
              >
                <div className={classes.checkAvailabilityPopoverWrapper}>
                  <Grid container>
                    <Grid item xs={2}>
                      <Room classes={{ root: classes.largeLocation }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h5">
                        What is your service zip code?
                      </Typography>
                      <Typography className={classes.locationPopoverSubtitle}>
                        Enter your zip code to find the products we offer in
                        your area.
                      </Typography>
                      <Typography variant="caption">Zip Code</Typography>
                      <Grid container alignItems="center">
                        <Grid item xs={6}>
                          <OutlinedInput
                            id="zipcode"
                            label="zip"
                            value={zipCode}
                            onChange={handleZipCodeChange}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            color="primary"
                            size="small"
                            variant="contained"
                            disableElevation
                            className={classes.checkAvailabilityButton}
                            onClick={onCheckAvalabilityClick}
                            disabled={!zipCode.length}
                          >
                            Check Availability
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Popover>
            </div> */}
              {readyMessage?.value && (
                <div className={classes.online}>
                  <Typography
                    styleType="p1"
                    tagType="p"
                    className={classes.headlineText}
                  >
                    {readyMessage.value}
                  </Typography>
                </div>
              )}
              <a className={classes.call} href={`tel:${phoneNumber?.value}`}>
                <Typography className={classes.headlineText}>
                  {callNowLabel?.value}
                </Typography>
                <CallIcon className={classes.callIcon} />
                <span className={classes.headlineNum}>
                  {phoneNumberLabel?.value}
                </span>
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: colors.main.white,
    borderBottom: `1px solid ${colors.main.maskedGray}`,
    display: 'flex',
    height: 50,
  },
  nonLoggedIN: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  stickyRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  sitesRow: {
    display: 'flex',
    '& li': {
      listStyle: 'none',
      marginRight: 10,
    },
    paddingLeft: '12px',
    paddingRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  labelItem: {
    fontSize: 14,
    fontWeight: 600,
    paddingRight: 10,
    '&:hover': {
      color: colors.main.midnightExpress,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  linkActive: {
    color: colors.main.midnightExpress,
  },
  online: {
    color: colors.main.midnightExpress,
    fontSize: '15px',
    fontWeight: 500,
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  call: {
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    float: 'right',
    marginLeft: '1.5rem',
    background: 'transparent',
    border: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  headlineText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 400,
    color: colors.main.midnightExpress,
    cursor: 'pointer',
    lineHeight: '2.4rem',
    fontFamily: FRGUIDE_BOLD,
  },
  headlineNum: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 600,
    color: colors.main.midnightExpress,
    cursor: 'pointer',
    lineHeight: '2.4rem',
  },
  callIcon: {
    fill: colors.main.brightRed,
    transform: 'rotateY(180deg)',
    marginRight: 5,
    marginLeft: 5,
    height: 22,
    width: 22,
  },
  rightContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkAvailabilityPopoverWrapper: {
    minWidth: 160,
    padding: '20px 40px',
    margin: '2px 0 0',
  },
  checkAvailabilityButton: {
    fontSize: 12,
    marginLeft: 12,
  },
  largeLocation: {
    fontSize: 48,
    color: '#d88908',
  },
  locationPopoverSubtitle: {
    marginBottom: 18,
    marginTop: 8,
    fontSize: 14,
  },
  locationPinButton: {
    background: 'inherit',
    border: 'none',
    marginRight: 12,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 12,
      width: '60px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
      width: '140px',
    },
  },
  smallLocation: {
    width: 20,
    verticalAlign: 'middle',
  },
  popoverContainer: {
    top: '45px !important',
  },
}))

export default StickyHeader
