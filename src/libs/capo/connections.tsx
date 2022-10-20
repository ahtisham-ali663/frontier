import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from 'src/blitz'
// import { useAppData } from 'src/hooks'
import { PADDING } from 'src/constants'
import { LocationOn } from '@material-ui/icons'
// import PdfIcon from '../../../src/blitz/assets/react-icons/pdfIcon'
// import { Link, animateScroll as scroll } from 'react-scroll'

const Connections: React.FC = () => {
  //const { heading, description, image }: any = useAppData('hero', true)
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
      heading: 'If you lost power:',
      listItem: [
        'If you have Frontier Voice service, it will continue to work for a minimum of eight hours with a fully-charged battery backup unit.',
        'If you use a portable generator, make sure the main circuit breaker is in the off position.',
      ],
    },
    {
      heading: 'If you still have power:',
      listItem: [
        'Keep your mobile devices charged.',
        'Protect your equipment from electrical surges by plugging into surge protectors. Unplug unused devices.',
      ],
    },
    {
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

  const californiaService = {
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

  const information = {
    heading: 'This information is also available in:',
    linkText: [
      'Chinese-Simplified',
      'Chinese-Traditional',
      'Korean',
      'Russian',
      'Spanish',
      'Tagalog',
      'Vitnamese',
    ],
  }

  //useStyles({ background: image?.src })
  const classes = useStyles()()
  return (
    <div className={classes.root}>
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
        <div className={classes.mainContent} id={1}>
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
              href={'#'}
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
              href={'#'}
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
                      <ul className={classes.ulList}>
                        {list.map((newList) => {
                          return (
                            <li key={newList} className={classes.listItem}>
                              {newList}
                            </li>
                          )
                        })}
                      </ul>
                    )
                  }
                  return (
                    <li key={list} className={classes.listItem}>
                      {list}

                      {upperIndex === 2 && lowerIndex === 0
                        ? buttonText?.value3 && (
                          <Button
                            variant="lite"
                            hoverVariant={'primary'}
                            type="link"
                            className={classes.btn}
                            href={'#'}
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
                            href={'#'}
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
        {californiaService?.heading && (
          <Typography
            tagType="div"
            styleType="h4"
            fontType="regularFont"
            color="default"
            className={classes.ciHeading}
          >
            {californiaService?.heading}
          </Typography>
        )}
        <div className={classes.mainContent}>
          {californiaService?.description && (
            <Typography
              tagType="div"
              styleType="h4"
              fontType="regularFont"
              color="default"
              className={classes.description}
            >
              {californiaService?.description}
            </Typography>
          )}
        </div>
        <div>
          <ul>
            {californiaService.list.map((list) => {
              return (
                <li key={list} className={classes.listItem}>
                  {list}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={classes.information}>
          {information?.heading && (
            <Typography
              tagType="div"
              styleType="h4"
              fontType="regularFont"
              color="default"
              className={classes.ciHeading}
            >
              {information?.heading}
            </Typography>
          )}

          <div className={classes.iconButton}>
            {information.linkText.map((links) => {
              {
                return (
                  <>
                    <div className={classes.iconWithButton}>
                      <LocationOn />
                      <Button
                        variant="lite"
                        hoverVariant={'primary'}
                        type="link"
                        href={'#'}
                        className={classes.btn}
                        text={links}
                      />
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({ breakpoints }) => ({
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
    ciHeading: {
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '30px',
      marginTop: '70px',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.5',
      display: 'inline',
    },
    information: {
      marginBottom: '2rem',
      padding: `0px ${PADDING}px`,
    },
    btn: {
      fontSize: '20px',
      color: 'black',
      '&:hover': {
        color: 'red',
      },
    },
    iconButton: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
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
    iconWithButton: {
      display: 'flex',
      alignItem: 'center',
      margin: '12px 0px',
      padding: '0px 20px',
      '&:hover': {
        color: 'red',
      },
    },
  }))

export default Connections
