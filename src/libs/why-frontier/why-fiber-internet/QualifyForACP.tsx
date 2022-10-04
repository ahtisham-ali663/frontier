import { makeStyles } from '@material-ui/core'
import { TwoColumnLayout, Typography, Button, InjectHTML } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'

import colors from 'src/styles/theme/colors'

const QualifyForACP = () => {
  const classes = useStyles()

  const {
    heading,
    legalDisclaimer,
    description,
    buttonUrl,
    buttonText,
    image,
  }: any = useAppData('QualifyForACP', true)
  const NonImageContent = () => (
    <div id="two-gig" className={classes.NonImageContainer}>
      <div className={classes.NonImageWrapper}>
        {heading?.value && (
          <Typography tagType="h2" styleType="h3" color="secondary">
            {heading?.value}
          </Typography>
        )}
        {legalDisclaimer && (
          <InjectHTML
            styleType="p4"
            className={classes.legalDisclaimer}
            color="secondary"
            value={legalDisclaimer?.value}
          />
        )}
        {description?.value && (
          <InjectHTML
            tagType="p"
            styleType="p1"
            className={classes.description}
            color="tertiary"
            value={description?.value}
          />
        )}
        <Button
          type="link"
          href={buttonUrl?.url}
          text={buttonText?.value}
          className={classes.btnLearn}
          hoverVariant="secondary"
        />
      </div>
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <TwoColumnLayout
        imageWrapperClassName={classes.imageWrapper}
        gridClassName={classes.grid}
        image={image?.src}
        title={image?.alt}
        content={<NonImageContent />}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: 0,
    '& img': {
      maxHeight: 'unset',
      minHeight: '330px',
    },
    margin: '5rem auto',
    [breakpoints.down('sm')]: {
      padding: '0',
      marginBottom: '3rem',
    },
  },
  legalDisclaimer: {
    marginTop: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '.75rem',
      lineHeight: '1rem',
    },
    '& sup': { lineHeight: '0' },
  },
  NonImageContainer: {
    backgroundColor: colors.main.white,
    marginRight: 'auto',
    width: '100%',
  },
  NonImageWrapper: {
    backgroundColor: colors.main.dark,
    paddingLeft: '7%',
    height: '100%',
    padding: '3rem 0.5rem 4.5rem 4rem',
    [breakpoints.down('md')]: {
      padding: '16px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  imageWrapper: {
    [breakpoints.up('md')]: {
      height: '100%',
    },
  },
  grid: {
    [breakpoints.up('md')]: {
      '& > div:nth-of-type(2)': {
        minWidth: '62%',
      },
      '& > div:first-of-type': {
        maxWidth: '38%',
      },
    },
  },
  description: {
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  btnLearn: {
    marginTop: '1rem',
    fontSize: '1.125rem',
    [breakpoints.up('sm')]: {
      width: 'fit-content',
    },
  },
}))

export default QualifyForACP
