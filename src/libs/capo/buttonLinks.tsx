import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'src/blitz'
// import { useAppData } from 'src/hooks'
// import { COMPONENT_WRAPPER, PADDING } from 'src/constants'
import { Divider } from '@material-ui/core'
import { PADDING } from 'src/constants'

const ButtonLinks: React.FC = () => {
  //const { heading, description, image }: any = useAppData('hero', true)
  const text = [
    'Useful information',
    'Waviers',
    'Urgent Alerts',
    'Helpful Links',
    'Social Media',
    'Government Agency Resources',
  ]
  //useStyles({ background: image?.src })
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
              href={'#'}
              text={item}
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
