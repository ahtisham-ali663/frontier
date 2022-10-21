import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'src/blitz'
import { Divider } from '@material-ui/core'
import { PADDING } from 'src/constants'

const ButtonLinks: React.FC = () => {
  const text = [
    { text: 'Useful information', link: '#usefulInformation' },
    { text: 'Waviers', link: '#waviers' },
    { text: 'Urgent Alerts', link: '#urgentAlerts' },
    { text: 'Helpful Links', link: '#helpfulLinks' },
    { text: 'Social Media', link: '#socialMedia' },
    { text: 'Government Agency Resources', link: '#governmentAgency' },
  ]

  const classes = useStyles()()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {text.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Button
              variant="lite"
              hoverVariant={'primary'}
              type="link"
              className={classes.btn}
              href={item.link}
              text={item.text}
            />
          )
        })}
      </div>
      <Divider className={classes.divider} />
    </div>
  )
}

const useStyles = () =>
  makeStyles(({ breakpoints }) => ({
    root: {},
    btn: {
      color: 'black',
      padding: `${PADDING}px`,
      '&:hover': {
        textDecoration: 'underline',
        color: 'red',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
      [breakpoints.down('md')]: {
        flexWrap: 'wrap',
        justifyContent: 'left',
      },
      [breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    divider: {
      backgroundColor: 'red',
      height: '3px',
      [breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  }))

export default ButtonLinks
