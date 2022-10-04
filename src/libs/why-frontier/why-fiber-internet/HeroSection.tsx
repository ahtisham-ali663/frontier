import { useAppData } from 'src/hooks'
import { Button, Hero, Video } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import clx from 'classnames'
import colors from 'src/styles/theme/colors'

const BRIGHTCOVE_ACCOUNT_ID = process.env.BRIGHTCOVE_ACCOUNT_ID
const BRIGHTCOVE_PLAYER_ID = process.env.BRIGHTCOVE_PLAYER_ID

const HeroSection: React.FC = () => {
  const classes = useStyles()
  const [playAgain, setPlayAgain] = useState(Boolean)
  const [stopVideo, setStopVideo] = useState(Boolean)
  // Modal code: will be release in the next one
  // const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [fadeVideo, setFadeVideo] = useState<boolean>(false)
  // Modal code: will be release in the next one
  // const modalButtonId = 'why-fiber-modal-button'

  const {
    heading,
    videoId,
    subHeading,
    image,
    mobileImage,
    skipButtonText,
    replyButtonText,
  } = useAppData('HeroVideoSection', true) || {}

  const handleFadeVideo = (time: any) => {
    if (time <= 1) {
      setFadeVideo(true)
    } else {
      setFadeVideo(false)
    }
  }

  const splitTitle = heading?.value.split(' ') || []
  const firstTitle = splitTitle.splice(0, 1).join(' ')
  const firstTitle2 = splitTitle.splice(0, 2).join(' ')
  const secondTitle = splitTitle.splice(0, splitTitle.length).join(' ')
  return (
    <div className={clx(classes.root, !stopVideo && classes.playingVideo)}>
      <Hero
        title1={`${firstTitle} <br> ${firstTitle2}`}
        title2={secondTitle}
        subHeader={subHeading?.value}
        backgroundImage={image?.src}
        mobileBackgroundImage={mobileImage?.src}
        // Modal code: will be release in the next one
        // primaryButton={{
        //   id: modalButtonId,
        //   text: 'Watch video',
        //   type: 'button',
        //   onClick: () => {
        //     setModalOpen(true)
        //   },
        // }}
        className={clx('hero', classes.hero, stopVideo && classes.showHero)}
      />
      {!stopVideo && (
        <div className={clx(fadeVideo ? classes.hide : '')}>
          <Video
            accountId={`${BRIGHTCOVE_ACCOUNT_ID}`}
            playerId={`${BRIGHTCOVE_PLAYER_ID}`}
            className={clx(classes.video)}
            hideAfterStop={true}
            skipVideo={stopVideo}
            autoPlay={true}
            playVideo={playAgain}
            hideControls={true}
            remainingTime={(time: any) => {
              handleFadeVideo(time)
            }}
            videoEnd={() => {
              setPlayAgain(false)
              setStopVideo(true)
            }}
            videoId={videoId?.value}
            allowPauseVideo={false}
          />
        </div>
      )}
      {stopVideo && (
        <img
          src={mobileImage?.src}
          alt={mobileImage.alt}
          className={classes.imgMobile}
        />
      )}
      {!stopVideo && (
        <Button
          text={skipButtonText?.value}
          type="button"
          onClick={() => {
            setStopVideo(true)
          }}
          hoverVariant="secondary"
          className={classes.skip}
          variant="tertiary"
        />
      )}
      {stopVideo && (
        <Button
          text={replyButtonText?.value}
          type="button"
          onClick={() => {
            setPlayAgain(true)
            setStopVideo(false)
          }}
          hoverVariant="secondary"
          className={classes.skip}
          variant="tertiary"
        />
      )}
      {/* 
      //Modal code: will be release in the next one
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        padding="0"
        height="28%"
        width="80%"
        onCloseFocusElementID={modalButtonId}
        modalContent={
          <Video
            accountId={`${BRIGHTCOVE_ACCOUNT_ID}`}
            playerId={`${BRIGHTCOVE_PLAYER_ID}`}
            className={clx(classes.video)}
            autoPlay={true}
            videoId="6305884524112"
          />
        }
      /> */}
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    backgroundColor: colors.main.dark,
    [breakpoints.down('xs')]: {
      backgroundColor: colors.main.lightGray,
      minHeight: '530px',
    },
    '& h1': {
      '& div:first-child': {
        color: `${colors.main.dark} !important` as any,
      },
      '& div:last-child': {
        color: `${colors.main.brightRed} !important` as any,
      },
    },
    '& p': {
      color: `${colors.main.dark} !important`,
    },
  },
  playingVideo: {
    '& .hero': {
      [breakpoints.down('xs')]: {
        backgroundImage: 'none',
        minHeight: 'auto !important',
      },
    },
    video: {
      [breakpoints.down('xs')]: {
        paddingTop: 'calc(600 / 1440 * 100%)',
        position: 'relative',
      },
    },
  },
  hero: {
    position: 'relative',
    zIndex: 0,
    opacity: 0,
    [breakpoints.down('xs')]: {
      opacity: 1,
      paddingBottom: '2rem',
      background: 'none',
      minHeight: 'auto',
    },
  },
  showHero: {
    opacity: 1,
  },
  video: {
    margin: '0 auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    [breakpoints.down('xs')]: {
      paddingTop: 'calc(805 / 1440 * 100%)',
      position: 'relative',
    },
    '& .video-js': {
      position: 'absolute !important',
      top: 0,
      left: 0,
      width: '100% !important',
      height: '100% !important',
      '& video': {
        top: '0 !important',
        height: '100% !important',
      },
    },
  },
  hide: {
    opacity: 0,
    transition: 'opacity 1s ease-out',
  },
  skip: {
    position: 'absolute',
    bottom: 40,
    zIndex: 2,
    right: 30,
    width: 230,
    margin: '0 auto',
    color: colors.main.white,
    borderColor: colors.main.white,
    ['@media screen and (min-width: 1440px)']: {
      right: 0,
      left: 1170,
    },
    [breakpoints.down('xs')]: {
      bottom: 20,
      right: 10,
      width: 210,
    },
  },
  imgMobile: {
    display: 'none',
    width: '100%',
    [breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}))

export default HeroSection
