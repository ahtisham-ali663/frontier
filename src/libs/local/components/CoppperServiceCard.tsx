import { makeStyles } from '@material-ui/core/styles'
import { CheckMarkRed } from 'src/blitz/assets/react-icons'
import colors from 'src/styles/theme/colors'
import { Typography, InjectHTML } from 'src/blitz'

const CoppperServiceCard = ({ title, perks }: any) => {
  const classes = useStyles()

  return (
    <div className={classes.copperPerkContainer} data-testid="copper-service">
      <div className={classes.leftCopperContainer}></div>
      <div className={classes.rightCopperContainer}>
        <InjectHTML tagType="h3" styleType="h3" value={title} />
        <div className={classes.perksContainer}>
          <ul>
            {perks?.map((perk: any, typeIndex: number) => (
              <li
                key={`card-${typeIndex}-perk-${typeIndex}`}
                data-testid={`perks-${typeIndex}`}
              >
                <div className={classes.checkIcon}>
                  <CheckMarkRed />
                </div>
                <Typography tagType="span" styleType="p2">
                  {perk?.title?.value}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  copperPerkContainer: {
    backgroundColor: colors.main.white,
    border: `1px solid ${colors.main.borderGrey}`,
    boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '38px',
    height: 'auto',
    maxWidth: 1140,
    flex: 1,
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: '0 16px',
    },
  },
  rightCopperContainer: {
    width: '60%',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  leftCopperContainer: {
    width: '40%',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  perksContainer: {
    width: '100%',
    '& ul': {
      padding: 0,
      listStyleType: 'none',
      minHeight: 120,
      [breakpoints.down('md')]: {
        minHeight: 150,
      },
      [breakpoints.down('sm')]: {
        minHeight: 'unset',
      },
    },
    '& li': {
      display: 'flex',
      marginBottom: 16,
    },
  },
  checkIcon: {
    minWidth: 25,
    '& svg': {
      height: 12,
      width: 15,
    },
  },
}))

export default CoppperServiceCard
