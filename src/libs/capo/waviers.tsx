import { makeStyles } from '@material-ui/core/styles'
import { Typography } from 'src/blitz'

const Waivers: React.FC = () => {
  const waiversData = {
    heading: 'California Service Credits and Waivers',
    description:
      'You may be entitled to specific credits and/or waivers of charges during or after a declared state of disaster. If you are out of service and won’t be returning to your home for some time, call us at 1.800.921.8101. We are here to help you manage your account and can help ensure you receive the proper out of service credits and/or waivers(*) for which you qualify.',
    list: [
      'Waiver of one-time activation fee for establishing remote call forwarding, remote access to call forwarding, call forwarding features and messaging services;',
      'Waiver of the monthly rate for one month for remote call forwarding, remote access to call forwarding, call forwarding, call forwarding features, and messaging services;',
      'Waiver of the service charge for installation of service at the temporary or new permanent location of the customer and again when the customer moves back to the premises;',
      'Waiver of the fee for one jack and associated wiring at the temporary location regardless of whether the customer has an inside wiring plan;',
      'Waiver of the fee for up to five free jacks and associated wiring for inside wiring plan customer upon their return to their permanent location; and',
      'Waiver of the fee for one jack and associated wiring for non-Plan customers upon their return to their permanent location.',
    ],
  }

  const classes = useStyles()()
  return (
    <div className={classes.root} id="waviers">
      <div className={classes.content}>
        {waiversData?.heading && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {waiversData?.heading}
          </Typography>
        )}
        <div className={classes.mainContent}>
          {waiversData?.description && (
            <Typography
              tagType="div"
              styleType="h4"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {waiversData?.description}
            </Typography>
          )}
        </div>
        <div>
          <ul>
            {waiversData.list.map((list, i) => {
              return (
                <li key={i} className={classes.listItem}>
                  {list}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(() => ({
    root: {
      padding: '0',
      background: '#F3F4F4',
    },
    content: {
      padding: '2rem 0',
      margin: '0 auto',
      width: '90%',
    },
    mainContent: {
      margin: '0 0 10px',
    },
    heading: {
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '30px',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.5',
      display: 'inline',
    },
    listItem: {
      marginBottom: '2px',
      fontSize: '20px',
      display: 'list-item',
    },
  }))

export default Waivers
