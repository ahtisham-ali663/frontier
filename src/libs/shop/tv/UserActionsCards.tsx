import { makeStyles } from '@material-ui/core'
import { Button, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData, useChatState } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const UserActionsCards: React.FC = () => {
  const classes = useStyles()
  const cardsList = useAppData('UserActionsCards', true)
  const { setChatState } = useChatState()

  const list = cardsList?.cardsList?.list
  if (list.length == 0) {
    return null
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {list?.map((item: any, i: number) => (
          <div key={i} className={classes.card}>
            <Typography tagType="h3" styleType="h4" fontType="boldFont">
              {item?.heading?.value}
            </Typography>
            <Typography
              tagType="p"
              styleType="p1"
              fontType="regularFont"
              className={classes.description}
            >
              {item?.description?.value}
            </Typography>
            {item?.btnName?.value?.toLowerCase()?.includes('chat') ? (
              <Button
                type="button"
                className={classes.link}
                text={item?.btnName.value}
                onClick={() => setChatState(true)}
              />
            ) : (
              <Button
                type="link"
                target="_blank"
                className={classes.link}
                text={item?.btnName.value}
                href={item?.btnLink.url}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: colors.main.midnightExpress,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    paddingTop: '5rem',
    paddingBottom: '5rem',
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      margin: '3rem 1rem',
      flexDirection: 'column',
      padding: '3rem 0',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.main.white,
    padding: '3rem',
    flexBasis: 'calc(50% - 1rem)',
    [breakpoints.down('sm')]: { padding: '1.5rem', marginBottom: '2rem' },
  },
  description: {
    marginRight: '.5rem',
    marginBottom: '2rem',
  },
  link: {
    marginTop: 'auto',
    display: 'inline-block',
    width: 'unset',
    [breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '1rem',
      margin: 'auto',
      maxWidth: '18.75rem',
      paddingRight: '1rem',
      paddingLeft: '1rem',
    },
  },
}))

export default UserActionsCards
