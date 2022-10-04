import { makeStyles } from '@material-ui/core'
import { Button } from 'src/blitz'
import { TwoColumnLayout, Typography, InjectHTML } from 'src/blitz'
import { CheckMarkBlack } from 'src/blitz/assets/react-icons'
import { TWO_GIG } from 'src/constants'
import { useAppData } from 'src/hooks'

const TwoGig = () => {
  const classes = useStyles()
  const {
    benefits,
    checkAvailabilityBtnLink,
    checkAvailabilityBtnText,
    image,
    subTitle,
    title,
    legalText,
  } = useAppData('twoGigCard', true)

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = TWO_GIG.replace('{NAME}', checkAvailabilityBtnText?.value)
  }
  const NonImageContent = () => (
    <div id="two-gig" className={classes.NonImageContainer}>
      <Typography
        tagType="p"
        styleType="h3"
        className={classes.TwoGigImageTitle}
      >
        {title?.value}
      </Typography>
      <InjectHTML
        tagType="p"
        styleType="p1"
        className={classes.TwoGigImageSubTitle}
        value={subTitle?.value}
      />
      <ul>
        {benefits?.list?.map((item: any, i: number) => (
          <li key={i} className={classes.checkList}>
            <CheckMarkBlack />
            <Typography tagType="span" styleType="p2">
              {item?.text?.value}
            </Typography>
          </li>
        ))}
      </ul>
      <Button
        text={checkAvailabilityBtnText?.value}
        href={checkAvailabilityBtnLink?.url}
        className={classes.checkAvailBtn}
        variant="primary"
        type="link"
        onClick={onButtonClick}
      />
      <InjectHTML
        tagType="p"
        data-testid="caption"
        className={classes.legalText}
        styleType="legal"
        value={legalText?.value || ''}
      />
    </div>
  )

  return (
    <TwoColumnLayout
      image={image?.src}
      webpImage={image?.webp}
      title={title?.value}
      content={<NonImageContent />}
      reverse={true}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  TwoGigImageTitle: {
    maxWidth: 600,
    marginBottom: 16,
    [breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '38px',
    },
  },
  TwoGigImageSubTitle: {
    marginBottom: '16px',
    maxWidth: 450,
    marginTop: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  NonImageContainer: {
    paddingLeft: '7%',
    paddingBottom: 20,
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      padding: 32,
    },
    '& ul': { listStyle: 'none', padding: 0 },
  },
  checkAvailBtn: {
    maxWidth: 300,
    [breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  checkList: {
    marginBottom: 8,
    '& svg': {
      marginRight: 16,
    },
  },
  legalText: {
    marginTop: '1rem',
  },
}))

export default TwoGig
