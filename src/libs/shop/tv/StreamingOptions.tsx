import { useAppData } from 'src/hooks'
import { Button, ImagePerk, Typography, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import { SITE_INTERACTION, HELP_ME_TV_PAGE } from 'src/constants'
const StreamingOptions = () => {
  const compData = useAppData('streamingOptions', true) || {}
  const classes = useStyles()
  const helpMeHandler = () => {
    DTMClient.triggerEvent(
      { events: 'event14', eVar14: HELP_ME_TV_PAGE },
      'tl_o',
      SITE_INTERACTION,
    )
  }

  return (
    <div id="streaming-options" className={classes.container}>
      <Typography tagType="h2" styleType="h3" className={classes.header}>
        {compData?.header?.value}
      </Typography>
      <ImagePerk
        stripeColor="none"
        contentAlign="left"
        className={classes.component}
        content={
          <>
            <Typography className={classes.heading} tagType="h3" styleType="h4">
              {compData?.title?.value}
            </Typography>
            <InjectHTML
              className={classes.description}
              tagType="p"
              styleType="p1"
              value={compData?.description?.value}
            />
            <ul className={classes.list}>
              {compData?.listItems?.list.map((item: any, index: number) => (
                <li key={index} className={classes.bulletsStyle}>
                  <Typography
                    className={classes.number}
                    tagType="span"
                    styleType="p1"
                    fontType="boldFont"
                  >
                    {`${index + 1}.`}
                  </Typography>
                  <Typography tagType="span" styleType="p1">
                    {item?.title?.value}
                  </Typography>
                </li>
              ))}
            </ul>
            <Button
              type="link"
              onClick={helpMeHandler}
              className={classes.link}
              text={compData?.helpMeChooseText?.value}
              href={compData?.helpMeChooseLink?.url}
            />
          </>
        }
        tabletBackgroundImage={compData?.sectionImage ?? {}}
      />
    </div>
  )
}

export default StreamingOptions

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    ...COMPONENT_WRAPPER,
    margin: '3rem auto',
    [breakpoints.down('xs')]: {
      margin: '2rem 1rem 3rem 1rem',
      padding: '0',
    },
  },
  component: {
    backgroundColor: colors?.main?.grey,
    '& div:last-child > div:first-child': {
      background: 'none',
      padding: '0',
      margin: '3.75rem 0 3.75rem 4.75rem',
      minHeight: 'auto',

      [breakpoints.down('xs')]: {
        padding: '1rem',
        margin: '2rem 1rem 3rem 1rem',
      },
    },
  },
  header: {
    borderTop: `solid 1px ${colors?.main?.borderGrey}`,
    textAlign: 'center',
    padding: '2.5rem 0',
    [breakpoints.down('xs')]: {
      padding: '1.5rem 0',
    },
  },
  number: {
    'font-weight': '700',
  },
  heading: {
    paddingRight: '2rem',
    marginTop: '0 !important',
  },
  description: {
    paddingRight: '1rem',
  },
  subHeading: {
    marginBottom: '32px',
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
  list: {
    margin: 0,
  },
  bulletsStyle: {
    marginBottom: '0.5rem',
  },
}))
