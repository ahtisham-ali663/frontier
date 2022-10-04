import { makeStyles } from '@material-ui/core'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'
import colors from 'src/styles/theme/colors'
import { useMemo } from 'react'
import { InjectHTML, Typography } from 'src/blitz'
const HeroSection = () => {
  const { stripeColors, firstTitle, secondTitle, description } = useAppData(
    'HeroSection',
    true,
  )

  const stripeColorValues = useMemo(
    function () {
      return stripeColors?.list?.map((x: any) => x?.color?.value)
    },
    [stripeColors],
  )

  const classes = useStyles(stripeColorValues)()

  return (
    <div className={classes.root}>
      <div className={classes.stripes}>
        <div className={classes.stripe}></div>
        <div className={classes.stripe}></div>
        <div className={classes.stripe}></div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.container}>
            <div className={classes.titleContainer}>
              <div>
                <InjectHTML
                  tagType="h1"
                  styleType="h1"
                  color="secondary"
                  value={firstTitle?.value}
                  className={classes.firstTitle}
                />

                <Typography
                  tagType="h1"
                  styleType="h1"
                  color="tertiary"
                  className={classes.secondTitle}
                >
                  {secondTitle?.value}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.descriptionContainer}>
              <InjectHTML
                tagType="p"
                styleType="p2"
                color="tertiary"
                fontType="boldFont"
                value={description?.value}
                className={classes.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = (stripeColors: string[]) =>
  makeStyles(({ breakpoints }) => ({
    root: {
      padding: 0,
      backgroundColor: colors.main.dark,
      marginBottom: 32,
      display: 'flex',
      alignItems: 'center',
      [breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        padding: '88px 0px',
        marginBottom: 6,
      },
    },
    wrapper: {
      ...COMPONENT_WRAPPER,
      display: 'flex',
      minHeight: '600px',
      padding: '0px 128px 0px 26px',
      [breakpoints.down('xs')]: {
        padding: 0,
        minHeight: 'auto',
      },
    },
    secondTitle: {
      lineHeight: '4.875rem',
      fontWeight: 400,
      [breakpoints.down('xs')]: {
        lineHeight: '2.75rem',
      },
    },
    firstTitle: {
      lineHeight: '4.875rem',
      fontWeight: 400,
      [breakpoints.down('xs')]: {
        lineHeight: '2.75rem',
      },
    },
    contentContainer: {
      display: 'flex',
      flex: 1,
      [breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    container: {
      display: 'flex',
      flex: 1,
      [breakpoints.down('sm')]: {
        flex: 0,
      },
    },
    stripes: {
      width: 193,
      flexDirection: 'row',
      marginTop: 26,
      [breakpoints.down('sm')]: {
        marginTop: 6,
      },
    },
    stripe: {
      height: 53.75,
      marginBottom: 26.8,
      flex: 1,
      backgroundColor: 'yellow',
      '&:nth-of-type(1)': {
        backgroundColor: (colors.main as any)[stripeColors[0]],
      },
      '&:nth-of-type(2)': {
        backgroundColor: (colors.main as any)[stripeColors[1]],
      },
      '&:nth-of-type(3)': {
        backgroundColor: (colors.main as any)[stripeColors[2]],
      },
      [breakpoints.down('xs')]: {
        height: 29.1,
        marginBottom: 15,
      },
    },
    description: { '& sup': { lineHeight: 0 } },
    titleContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [breakpoints.down('sm')]: {
        padding: '0 1.125rem',
      },
    },
    descriptionContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.125rem',
      [breakpoints.down('sm')]: {
        '& p': {
          margin: 0,
        },
      },
    },
  }))

export default HeroSection
