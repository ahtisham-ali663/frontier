import { Grid, makeStyles } from '@material-ui/core'
import { Button, Typography } from 'src/blitz'
import { LocationOutline, ChatBox } from 'src/blitz/assets/react-icons'
import { useChatState } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const FrontierInfo = ({ data }: any) => {
  const classes = useStyles()
  const { setChatState } = useChatState()
  const origin = ''
  const { title, lists } = data
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12}>
            <Typography tagType="h2" styleType="h2" className={classes.title}>
              {title?.value}
            </Typography>
          </Grid>
          {lists?.list?.map((list: any, index: number) => (
            <Grid item sm={12} md={5} key={index} className={classes.wrapper}>
              <div className={classes.box}>
                <Typography
                  tagType="h3"
                  styleType="h4"
                  className={classes.heading}
                >
                  {list?.title?.value}
                </Typography>
                <Typography tagType="p" styleType="p1">
                  {list?.subTitle?.value}
                </Typography>
                {list?.options?.option?.map((option: any) => (
                  <div key={option.text?.value} className={classes.iconWrapper}>
                    {getIcon(option?.icon?.value)}
                    <Typography
                      tagType="p"
                      styleType="h6"
                      className={classes.optionTitle}
                    >
                      {option?.text?.value}
                    </Typography>
                  </div>
                ))}
                {list?.buttonText?.value?.toLowerCase()?.includes('chat') ? (
                  <Button
                    type="button"
                    text={list?.buttonText?.value}
                    className={classes.buttonSize}
                    onClick={() => setChatState(true)}
                  />
                ) : (
                  <Button
                    type="link"
                    text={list?.buttonText?.value}
                    className={classes.buttonSize}
                    href={`${origin}${list?.buttonUrl?.url}`}
                  />
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

const getIcon = (name: string) => {
  return (
    <>
      {name == 'location' && <LocationOutline />}
      {name == 'chat-outline' && <ChatBox />}
    </>
  )
}

export default FrontierInfo

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    backgroundColor: colors.main.midnightExpress,
  },
  container: {
    padding: '48px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    [breakpoints.down('md')]: {
      padding: '32px 16px',
    },
  },
  title: {
    color: colors.main.greenishBlue,
    textAlign: 'center',
  },
  heading: {
    marginBottom: '12px',
    [breakpoints.down('md')]: {
      fontSize: typography.pxToRem(20),
    },
  },
  buttonSize: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    [breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  wrapper: {
    [breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  iconWrapper: {
    margin: '32px 0',
    '& p': {
      display: 'inline-flex',
    },
    '& svg': {
      position: 'relative',
      top: 6,
      marginRight: 8,
      '&:hover': {
        stroke: colors.main.dark,
        '& path': {
          stroke: colors.main.dark,
        },
      },
    },
    '& svg.chat-icon': {
      '&:hover': {
        '& path': {
          fill: colors.main.dark,
        },
      },
    },
  },

  box: {
    backgroundColor: colors.main.white,
    padding: '56px 80px',
    '& p': {
      margin: 0,
      fontSize: typography.pxToRem(16),
    },
    [breakpoints.down('sm')]: {
      padding: '24px 32px 48px',
    },
  },
  optionTitle: {
    marginBottom: '32px',
    [breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
}))
