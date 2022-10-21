import { makeStyles } from '@material-ui/core/styles'
import { Typography } from 'src/blitz'
import { Timeline } from 'react-twitter-widgets'

const SocialMedia: React.FC = () => {
  const heading = {
    value: 'Follow us on Twitter for updates',
  }
  const classes = useStyles()()
  return (
    <div className={classes.root} id="socialMedia">
      <div className={classes.content}>
        {heading?.value && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {heading?.value}
          </Typography>
        )}
        <div className={classes.timeline}>
          {
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'AskFrontier',
              }}
              options={{
                height: '450',
                width: '600',
              }}
            />
          }
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({ breakpoints }) => ({
    root: {
      padding: '0',
      background: '#F3F4F4',
    },
    content: {
      padding: '4rem 0',
      margin: '0 auto',
      width: '90%',
    },
    heading: {
      fontWeight: 'normal',
      textAlign: 'center',
      margin: '0px 0px 10px',
      [breakpoints.down('sm')]: {
        fontSize: '30px',
      },
    },
    timeline: {
      marginTop: '2rem',
    },
  }))

export default SocialMedia
