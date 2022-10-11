import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, ToggleButton, TextIcon } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'

const Toggle = () => {
  const classes = useStyles()
  const [serviceCheck, isServiceCheck] = useState(false)
  const [powerCheck, isPowerCheck] = useState(false)

  const onToggleService = (data: boolean) => {
    isServiceCheck(data)
  }

  const onTogglePower = (data: boolean) => {
    isPowerCheck(data)
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.bottomWrapper}>
          <div className={classes.content}>
            <ToggleButton data={onToggleService} />
            <TextIcon
              iconColor="#fd7e14"
              title={'Frontier Service Outages'}
              fontType={serviceCheck ? 'regularFont' : 'boldFont'}
            />
            <div className={classes.hideBox}></div>
          </div>

          <div className={classes.content}>
            <ToggleButton data={onTogglePower} />
            <div>
              <TextIcon
                iconColor="#0d6efd"
                title={'Power outages'}
                fontType={powerCheck ? 'regularFont' : 'boldFont'}
              />
              <TextIcon
                iconColor="red"
                title={'Power shutoff (PSPS) /'}
                fontType={powerCheck ? 'regularFont' : 'boldFont'}
              />
              <TextIcon
                iconColor=""
                title={'States of Emergency'}
                fontType={powerCheck ? 'boldFont' : 'regularFont'}
              />
            </div>

            <div className={powerCheck ? classes.box : classes.hideBox}></div>
          </div>

          <div className={classes.content}>
            <Typography tagType="p" styleType="p2">
              {'Frontier Service Areas'}
            </Typography>
            <div className={classes.box1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    padding: '10px 0 0 0',

    [breakpoints.down('sm')]: {
      padding: '10px 50px 0 0',
      display: 'flex',
    },
  },
  box: {
    background: '#00FFFF',
    height: '3.5rem',
    width: '5rem',
  },
  box1: {
    background: 'red',
    height: '3.5rem',
    width: '5rem',
  },
  hideBox: {
    background: 'white',
    height: '3.5rem',
    width: '5rem',
  },
  wrapper: {
    // ...COMPONENT_WRAPPER,
    [breakpoints.down('sm')]: {
      margin: '2rem 2rem 2rem 2rem',
    },
  },
  bottomWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      // alignItems: 'center',
      // display: 'flex',
      // justifyContent: 'space-between',
      // marignRight: '1rem',
    },
  },
  content: {
    flex: 1,
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: '1rem',
    '& p': { marginTop: 0, marginBottom: '1rem' },
    [breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  },
}))

export default Toggle
