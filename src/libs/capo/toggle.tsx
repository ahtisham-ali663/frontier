import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, ToggleButton, TextIcon } from 'src/blitz'
import BlueSvg from 'src/blitz/assets/png/blueSvgIcon'
import YellowSvg from 'src/blitz/assets/png/yellowSvgIcon'
import RedSvg from 'src/blitz/assets/png/redSvgIcon'
interface PageProps {
  onToggleHandler: () => void
}

const Toggle = (props: PageProps) => {
  const classes = useStyles()
  const [serviceCheck, isServiceCheck] = useState(false)
  const [powerCheck, isPowerCheck] = useState(false)
  const { onToggleHandler } = props

  const onToggleService = (data: boolean) => {
    isServiceCheck(data)
  }

  const onTogglePower = (data: boolean) => {
    isPowerCheck(data)
  }

  useEffect(() => {
    onToggleHandler(serviceCheck, powerCheck)
  }, [serviceCheck, powerCheck])
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ToggleButton data={onToggleService} />

        <TextIcon
          title={'Frontier Service Outages'}
          fontType={serviceCheck ? 'regularFont' : 'boldFont'}
        >
          <YellowSvg width={'24px'} height={'24px'} />
        </TextIcon>
      </div>

      <div className={classes.content}>
        <ToggleButton data={onTogglePower} />
        <div>
          <TextIcon
            title={'Power outages'}
            fontType={powerCheck ? 'regularFont' : 'boldFont'}
          >
            <BlueSvg width={'24px'} height={'24px'} />
          </TextIcon>
          <TextIcon
            title={'Power shutoff (PSPS) /'}
            fontType={powerCheck ? 'regularFont' : 'boldFont'}
          >
            <RedSvg width={'24px'} height={'24px'} />
          </TextIcon>
          <TextIcon
            title={'States of Emergency'}
            fontType={powerCheck ? 'boldFont' : 'regularFont'}
          ></TextIcon>
        </div>

        <div
          className={
            powerCheck ? classes.emergencyBox : classes.hideEmergencyBox
          }
        ></div>
      </div>

      <div className={classes.content}>
        <Typography tagType="p" styleType="p2">
          {'Frontier Service Areas'}
        </Typography>
        <div className={classes.serviceBox}></div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  emergencyBox: {
    background: '#00FFFF',
    height: '3.5rem',
    width: '5rem',
    opacity: 1,
    transition: 'all .5s ease-out',
    marginLeft: '2rem',
  },
  serviceBox: {
    background: 'red',
    height: '3.5rem',
    width: '5rem',
    [breakpoints.up('md')]: {
      marginLeft: '3rem',
    },
    [breakpoints.down('sm')]: {
      marginLeft: '6.5rem',
    },
  },
  hideEmergencyBox: {
    background: 'white',
    height: '3.5rem',
    width: '5rem',
    transition: 'all .5s ease-out',
    marginLeft: '2rem',
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    [breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
  content: {
    flex: '2 0 auto',
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    marginLeft: '1rem',
    '& p': { marginTop: 0, marginBottom: '1rem' },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

export default Toggle
