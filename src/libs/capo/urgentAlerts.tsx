import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from 'src/blitz'

const UgentAlerts: React.FC = () => {
  const data = {
    heading: 'Urgent alerts in Frontier Service Areas',
    description:
      'To see which California counties and zip codes are affected by a state of emergency, power outages or shutoff, use this interactive map. Frontier service areas may or may not be affected.',
    powerOutage: 'Power outage information provided by our partner ',
    buttonText: 'PowerOutages.us',
  }

  const classes = useStyles()()
  return (
    <div className={classes.root} id="urgentAlerts">
      <div className={classes.content}>
        {data?.heading && (
          <Typography
            tagType="h4"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {data?.heading}
          </Typography>
        )}
        <div className={classes.wrapper}>
          {data?.description && (
            <Typography
              tagType="div"
              styleType="p1"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {data?.description}
            </Typography>
          )}
          <div className={classes.mainContent}>
            {data?.powerOutage && (
              <Typography
                tagType="div"
                styleType="p1"
                fontType="regularFont"
                color="default"
                className={classes.description}
              >
                {data?.powerOutage}
              </Typography>
            )}

            {data?.buttonText && (
              <Button
                variant="lite"
                hoverVariant={'primary'}
                type="link"
                className={classes.btn}
                href={'https://poweroutage.us/'}
                text={data?.buttonText}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({}) => ({
    root: {
      padding: 0,
      margin: '0 auto',
      width: '90%',
    },
    heading: {
      textAlign: 'center',
      margin: '50px 0 30px',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.5',
      textAlign: 'center',
    },
    btn: {
      fontSize: '20px',
      color: 'black',
      textDecoration: 'underline',
      marginLeft: '0.3rem',
      '&:hover': {
        color: 'red',
      },
    },
    content: {
      padding: '20px 0px',
    },
    mainContent: {
      display: 'flex',
      paddingTop: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      marginBottom: '10px',
    },
  }))

export default UgentAlerts
