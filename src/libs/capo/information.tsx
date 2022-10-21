import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from 'src/blitz'
import { PADDING } from 'src/constants'
import { PdfIcon } from '../../blitz/assets/react-icons'

const Information: React.FC = () => {
  const information = {
    heading: 'This information is also available in:',
    linkText: [
      'Chinese-Simplified',
      'Chinese-Traditional',
      'Korean',
      'Russian',
      'Spanish',
      'Tagalog',
      'Vitnamese',
    ],
  }

  const classes = useStyles()()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.information}>
          {information?.heading && (
            <Typography
              tagType="div"
              styleType="h4"
              fontType="regularFont"
              color="default"
              className={classes.heading}
            >
              {information?.heading}
            </Typography>
          )}

          <div className={classes.iconButton}>
            {information.linkText.map((links) => {
              {
                return (
                  <>
                    <div className={classes.iconWithButton}>
                      <PdfIcon />
                      <Button
                        variant="lite"
                        hoverVariant={'primary'}
                        type="link"
                        href={'#'}
                        className={classes.btn}
                        text={links}
                      />
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({}) => ({
    root: {
      padding: '0',
      background: '#F3F4F4',
    },
    content: {
      padding: '2rem 0',
      margin: '0 auto',
      width: '90%',
    },
    information: {
      marginBottom: '2rem',
      padding: `0px ${PADDING}px`,
    },
    heading: {
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '30px',
    },
    iconButton: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
    },
    iconWithButton: {
      display: 'flex',
      alignItem: 'center',
      margin: '12px 0px',
      padding: '0px 20px',
      '&:hover': {
        color: 'red',
        fill: 'red',
      },
    },
    btn: {
      marginLeft: '10px',
      fontSize: '20px',
      color: 'black',
      '&:hover': {
        color: 'red',
      },
    },
  }))

export default Information
