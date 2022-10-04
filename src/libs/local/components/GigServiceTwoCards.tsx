import { makeStyles } from '@material-ui/core/styles'
import colors from 'src/styles/theme/colors'
import { Button } from 'src/blitz'
import GigServiceCard from './GigServiceCard'
import CoppperServiceCard from './CoppperServiceCard'

const GigServiceTwoCards = ({ data }: any) => {
  const classes = useStyles()
  const { gigServiceCards, buttonText, buttonHref, type, copperService } = data
  const cards = gigServiceCards?.list
  if (!cards) {
    return null
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.cardContainer}>
          {type?.value === 'gig-service' ? (
            <>
              {cards?.map((card: any, index: number) => {
                return (
                  <GigServiceCard
                    key={`card-${index}`}
                    title={card?.title?.value}
                    description={card?.description?.value}
                    legalNote={card?.legalNote?.value}
                    perks={card?.perks?.list || []}
                  />
                )
              })}
            </>
          ) : (
            ''
          )}
          {type?.value === 'copper-service' ? (
            <CoppperServiceCard
              title={copperService?.item?.title?.value}
              perks={copperService?.item?.perks?.list || []}
            />
          ) : (
            ''
          )}
        </div>
        <Button
          variant="primary"
          type="link"
          className={classes.learnMoreBtn}
          href={buttonHref?.url}
          text={buttonText?.value}
          hoverVariant="secondary"
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    padding: '90px 0px 48px',
    backgroundColor: colors.main.dark,
    [breakpoints.down('xs')]: {
      padding: '3rem 1rem',
      margin: 0,
    },
  },
  root: {
    maxWidth: 1140,
    margin: 'auto',
    overflow: 'hidden',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 38,
    margin: '0px 16px',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: '0px',
    },
  },
  learnMoreBtn: {
    margin: 'auto',
    display: 'block',
    width: '308px',
    marginTop: '32px',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

export default GigServiceTwoCards
