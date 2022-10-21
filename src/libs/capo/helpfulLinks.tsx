import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from 'src/blitz'

const HelpfulLinks: React.FC = () => {
  const Heading = {
    value: 'Helpful links',
  }
  const btnLinks = {
    col1: [
      {
        text: 'Maintain your phone service during a power outage',
        link: 'https://frontier.com/helpcenter/categories/phone/troubleshooting/battery-backup-for-voice',
      },
      {
        text: 'Get service updates from Frontier on social media',
        link: 'https://frontier.com/helpcenter/categories/internet/troubleshooting/service-status',
      },
      {
        text: 'Forward your calls to your cell phone',
        link: 'https://frontier.com/helpcenter/categories/phone/forward-your-calls',
      },
      {
        text: 'Access your voicemail by phone',
        link: 'https://frontier.com/helpcenter/categories/phone/calling-features/use-my-voicemail/read-more/access-voicemail-by-phone',
      },
    ],

    col2: [
      {
        text: 'Suspend your Frontier service while you’re away from home',
        link: 'https://frontier.com/helpcenter/categories/account/manage-my-account/make-account-changes',
      },
      {
        text: 'Set up auto pay for your convenience',
        link: 'https://frontier.com/helpcenter/categories/billing/read-and-pay-my-bill/auto-pay',
      },
      {
        text: 'Contact us if your services are not working',
        link: 'https://frontier.com/contactus/contact-us#/residential',
      },
      {
        text: 'My Frontier Mobile App helps you manage your account',
        link: 'https://frontier.com/helpcenter/categories/account/manage-my-account/myfrontier-app',
      },
    ],
  }

  const classes = useStyles()()

  return (
    <div className={classes.root} id="helpfulLinks">
      <div className={classes.content}>
        {Heading?.value && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.heading}
          >
            {Heading?.value}
          </Typography>
        )}
        <div className={classes.wrapper}>
          <div className={classes.mainContent}>
            {btnLinks.col1.map((item, i) => {
              return (
                <Button
                  variant="lite"
                  hoverVariant={'primary'}
                  type="link"
                  href={item.link}
                  className={classes.btn}
                  text={item.text}
                  key={i}
                />
              )
            })}
          </div>
          <div className={classes.mainContent}>
            {btnLinks.col2.map((item, i) => {
              return (
                <Button
                  variant="lite"
                  hoverVariant={'primary'}
                  type="link"
                  href={item.link}
                  className={classes.btn}
                  text={item.text}
                  key={i}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({}) => ({
    root: {
      margin: '0 auto',
      width: '90%',
    },
    content: {
      marginTop: '3rem',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    heading: {
      padding: '70px 0px 35px',
      textAlign: 'center',
    },
    mainContent: {
      margin: '0 0 10px',
    },
    btn: {
      margin: '0 0 16px 25px',
      fontSize: '18px',
      color: 'black',
      display: 'block',
      textDecoration: 'underline',
      '&:hover': {
        color: 'red',
      },
    },
  }))

export default HelpfulLinks
