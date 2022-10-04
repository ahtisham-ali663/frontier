import { makeStyles } from '@material-ui/core'
import { Button, InjectHTML, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const EntertainmentChannels: React.FC = () => {
  const classes = useStyles()
  const cardsList = useAppData('entertainmentChannels', true)

  const list = cardsList?.cardsList?.list
  if (!list?.length) {
    return null
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {list?.map((item: any, i: number) => (
          <div key={i} className={classes.card}>
            <img
              alt={item?.image?.alt}
              src={item?.image?.src}
              className={`${classes.cardImage} ${i == 0 ? classes.hboMax : ''}`}
            />
            <div>
              <Typography
                tagType="h5"
                styleType="h5"
                fontType="boldFont"
                className={classes.cardsTitle}
              >
                {item?.heading?.value}
              </Typography>
              <InjectHTML
                tagType="p"
                styleType="p1"
                fontType="regularFont"
                className={classes.description}
                value={item?.description?.value}
              />
              <Button
                type="link"
                target="_blank"
                className={classes.link}
                text={item?.btnName?.value}
                href={item?.btnLink?.url}
              />
            </div>
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
    alignItems: 'self-end',
    [breakpoints.down('sm')]: {
      margin: '0rem 1rem',
      flexDirection: 'column',
      padding: '3rem 0',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.main.white,
    padding: '2.5rem',
    flexBasis: 'calc(50% - 1rem)',
    [breakpoints.down('sm')]: { padding: '2rem', marginBottom: '2rem' },
  },
  cardImage: {
    [breakpoints.down('sm')]: { maxWidth: '199px' },
  },
  hboMax: {
    marginBottom: '0.5rem',
  },
  description: {
    marginRight: '.5rem',
    marginBottom: '2rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      marginRight: 0,
    },
  },
  cardsTitle: {
    marginTop: '40px',
    [breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
  link: {
    marginTop: 'auto',
    display: 'inline-block',
    width: 'unset',
    [breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '1rem',
      maxWidth: '13.25rem',
      paddingRight: '1rem',
      paddingLeft: '1rem',
    },
  },
}))

export default EntertainmentChannels
