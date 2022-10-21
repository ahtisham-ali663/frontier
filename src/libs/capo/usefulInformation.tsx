/* eslint-disable @typescript-eslint/indent */
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from 'src/blitz'

const UsefulInformation: React.FC = () => {
  const buttonText = {
    value1: 'Facebook',
    value2: ' COVID-19 Information page',
    value3: 'here.',
    value4: 'chat with us',
  }
  const Heading = {
    value: 'Connections are key',
  }
  const Description = {
    value1:
      'Pay attention to your local and state announcements. Should a Frontier service area be affected, as soon as conditions are declared safe, and we are allowed access to the area, we will begin to evaluate our network and facilities status. If services are affected, we will determine when services can be restored and continue to post updates on ',
    value2:
      'When we begin repairs, Frontier will follow our standard protocol for prioritizing the restoration of service to our customers: first public safety and health facilities, followed by businesses, then residential customers.',
    value3:
      'Frontier is committed to keeping customers connected during the pandemic. You can visit our ',
    value4:
      ' to learn more about staying connected, safe and informed during the pandemic.',
  }
  const listData = [
    {
      id: '1',
      heading: 'If you lost power:',
      listItem: [
        'If you have Frontier Voice service, it will continue to work for a minimum of eight hours with a fully-charged battery backup unit.',
        'If you use a portable generator, make sure the main circuit breaker is in the off position.',
      ],
    },
    {
      id: '2',
      heading: 'If you still have power:',
      listItem: [
        'Keep your mobile devices charged.',
        'Protect your equipment from electrical surges by plugging into surge protectors. Unplug unused devices.',
      ],
    },
    {
      id: '3',
      heading: 'If you have power but no Frontier service:',
      listItem: [
        'Check to see if there is a service outage in your area by entering your billing telephone number ',
        'If you are an internet customer, restart your router. Press the power button on the back or unplug the device from the wall outlet. Wait 60 seconds, then plug it back in. Allow 2 to 5 minutes for the device to restart.',
        'If you are a fiber customer, make sure that your Optical Network Terminal (ONT) has power. During power outages outlets, circuit breakers and/or GFCI outlets can trip.',
        [
          'Your ONT is plugged into an outlet that is typically in your garage. A good way to check if that outlet has power is to test it with a small electronic device such as a clock radio or small lamp/light.',
          'f your ONT outlet does not have power, you will need to find the breaker or reset the GFCI serving that outlet (look for an outlet in the area that has two little buttons on it).',
          'If there is still no power to that outlet, you can move the power supply a nearby working outlet to restore service. In other words, plug the ONT into another outlet, and try that outlet.',
        ],
        'If you are still experiencing issues, please ',
      ],
    },
  ]

  const classes = useStyles()()
  return (
    <div className={classes.root} id="usefulInformation">
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
        <div className={classes.mainContent}>
          {Description?.value1 && (
            <Typography
              tagType="div"
              styleType="p1"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {Description?.value1}
            </Typography>
          )}
          {buttonText?.value1 && (
            <Button
              variant="lite"
              hoverVariant={'primary'}
              type="link"
              className={classes.btn}
              href={'https://www.facebook.com/FrontierCorp'}
              text={buttonText?.value1}
            />
          )}
        </div>
        <div className={classes.mainContent}>
          {Description?.value2 && (
            <Typography
              tagType="div"
              styleType="p1"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {Description?.value2}
            </Typography>
          )}
        </div>
        <div className={classes.mainContent}>
          {Description?.value3 && (
            <Typography
              tagType="div"
              styleType="p1"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {Description?.value3}
            </Typography>
          )}
          {buttonText?.value2 && (
            <Button
              variant="lite"
              hoverVariant={'primary'}
              type="link"
              className={classes.btn}
              href={'https://frontier.com/resources/covid-19'}
              text={buttonText?.value2}
            />
          )}
          {Description?.value4 && (
            <Typography
              tagType="div"
              styleType="p1"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {Description?.value4}
            </Typography>
          )}
        </div>
        {listData.map((listItem, upperIndex) => {
          return (
            <>
              <Typography
                tagType="div"
                styleType="p1"
                fontType="regularFont"
                color="default"
                className={classes.listheading}
              >
                {listItem?.heading}
              </Typography>
              <ul>
                {listItem.listItem.map((list, lowerIndex) => {
                  if (Array.isArray(list)) {
                    return (
                      <ul key={lowerIndex} className={classes.ulList}>
                        {list.map((newList) => {
                          return (
                            <li key={lowerIndex} className={classes.listItem}>
                              {newList}
                            </li>
                          )
                        })}
                      </ul>
                    )
                  }
                  return (
                    <li key={lowerIndex} className={classes.listItem}>
                      {list}

                      {upperIndex === 2 && lowerIndex === 0
                        ? buttonText?.value3 && (
                            <Button
                              variant="lite"
                              hoverVariant={'primary'}
                              type="link"
                              className={classes.btn}
                              href={
                                'https://frontier.com/helpcenter/categories/internet/troubleshooting/service-status'
                              }
                              text={buttonText?.value3}
                            />
                          )
                        : null}
                      {upperIndex === 2 && lowerIndex === 4
                        ? buttonText?.value4 && (
                            <Button
                              variant="lite"
                              hoverVariant={'primary'}
                              type="link"
                              className={classes.btn}
                              href={
                                'https://frontier.com/contactus/contact-us#/residential'
                              }
                              text={buttonText?.value4}
                            />
                          )
                        : null}
                    </li>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </div>
  )
}
const useStyles = () =>
  makeStyles(({}) => ({
    root: {
      padding: '0',
      background: '#F3F4F4',
    },
    content: {
      padding: '4rem 0',
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
    btn: {
      fontSize: '20px',
      color: 'black',
      '&:hover': {
        color: 'red',
        textDecoration: 'underline',
      },
    },
    listheading: {
      fontSize: '26px',
      marginTop: '30px',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '2px',
      fontSize: '20px',
      display: 'list-item',
    },
    ulList: {
      listStyleType: 'square',
    },
  }))

export default UsefulInformation
