import { makeStyles } from '@material-ui/core'
import { Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const WhatToExpect = () => {
  const classes = useStyles()
  const { title, description, expectations } = useAppData('whatToExpect', true)
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography tagType="h3" styleType="h3" className={classes.title}>
          {title?.value}
        </Typography>
        <Typography
          tagType="h6"
          styleType="p1"
          fontType="boldFont"
          className={classes.description}
        >
          {description?.value}
        </Typography>
      </div>
      <div className={classes.expectationsWrapper}>
        {expectations?.list?.map(({ title, description }: any) => {
          return (
            <div key={title?.value} className={classes.expectation}>
              <Typography
                tagType="h4"
                styleType="h4"
                fontType="boldFont"
                className={classes.expectationTitle}
              >
                {title?.value}
              </Typography>
              <Typography styleType="p1" className={classes.innerDescription}>
                {description?.value}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    marginBottom: 150,
    maxWidth: 1200,
  },
  titleContainer: {
    display: 'flex',
    margin: '56px auto',
    paddingBottom: 32,
    borderBottom: `4px solid ${colors.main.brightRed}`,
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: 16,
      marginBottom: 56,
    },
  },
  title: {
    flex: 1,
  },
  description: {
    flexBasis: '35%',
    margin: 0,
  },
  innerDescription: {
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  expectationsWrapper: {
    display: 'flex',
    gap: 80,
    [breakpoints.between(768, 1199)]: {
      gap: 32,
    },
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: 32,
    },
  },
  expectation: {
    flex: 1,
    maxWidth: 350,
    [breakpoints.down('xs')]: {
      maxWidth: 'unset',
    },
  },
  expectationTitle: {
    minHeight: 76,
    marginBottom: 8,
    [breakpoints.down('xs')]: {
      minHeight: 'unset',
    },
  },
}))

export default WhatToExpect
