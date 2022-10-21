import { makeStyles } from '@material-ui/core/styles'
import { Typography } from 'src/blitz'
import Image from 'next/image'
import FEMA from '../../blitz/assets/png/fema.png'
import AmericanRed from '../../blitz/assets/png/americanRed.png'
import Disaster from '../../blitz/assets/png/disaster.png'

const GovernmentAgency: React.FC = () => {
  const Heading = {
    value: 'Government Agency Resources',
  }
  const Description = {
    value:
      'The links can get you in touch with disaster information and resources.',
  }

  const cardImage = (src: any, width: number, height: number) => {
    return <Image src={src} width={width} height={height} alt={'not found'} />
  }

  const classes = useStyles()

  return (
    <div className={classes.root} id="governmentAgency">
      <div className={classes.content}>
        {Heading?.value && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {Heading?.value}
          </Typography>
        )}
        {Description?.value && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {Description?.value}
          </Typography>
        )}

        <div className={classes.imageWrapperOutside}>
          <div className={classes.imageWrapperInside}>
            <div className={classes.imageInsideWrapper}>
              <div className={classes.image}>
                {cardImage(AmericanRed, 225, 100)}
              </div>
              <div className={classes.textWrapper}>
                <Typography
                  tagType="div"
                  styleType="h5"
                  fontType="regularFont"
                  color="default"
                  className={classes.text}
                >
                  {'American Red Cross'}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.imageWrapperInside}>
            <div className={classes.imageInsideWrapper}>
              <div className={classes.image}>{cardImage(FEMA, 225, 100)}</div>
              <div className={classes.textWrapper}>
                <Typography
                  tagType="div"
                  styleType="h5"
                  fontType="regularFont"
                  color="default"
                  className={classes.text}
                >
                  {'FEMA'}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.imageWrapperInside}>
            <div className={classes.imageInsideWrapper}>
              <div className={classes.image}>
                {cardImage(Disaster, 100, 100)}
              </div>
              <div className={classes.textWrapper}>
                <Typography
                  tagType="div"
                  styleType="h5"
                  fontType="regularFont"
                  color="default"
                  className={classes.text}
                >
                  {'American Red Cross'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '90%',
  },
  content: {
    padding: '70px 0px',
  },
  heading: {
    padding: '0px 0px 35px',
    textAlign: 'center',
  },
  mainContent: {
    margin: '0 0 10px',
  },
  btn: {
    margin: '0 0 16px 25px',
    fontSize: '18px',
    color: 'black',
    display: 'block',
    textDecoration: 'underline',
    '&:hover': {
      color: 'red',
    },
  },
  text: {
    marginBottom: '2rem',
    textAlign: 'center',
  },

  textWrapper: {
    height: '100px',
  },
  imageWrapperOutside: {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  imageWrapperInside: {
    marginTop: '50px',
    marginBottom: '30px',
    padding: '0px 30px',
  },
  imageInsideWrapper: {
    boxShadow: '1px 2px 4px rgba(0 0 0 / 25%)',
    transition: 'All 0.3s ease',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    '&:hover': {
      transform: 'scale3d(1.05, 1.05, 1)',
    },
  },
  image: {
    margin: 'auto 20px',
    textAlign: 'center',
  },
}))

export default GovernmentAgency
