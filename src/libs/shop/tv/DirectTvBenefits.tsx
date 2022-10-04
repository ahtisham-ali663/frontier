import { makeStyles } from '@material-ui/core'
import { TwoColumnLayout, Typography, InjectHTML, Button } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'
const YouTubeTvBenefits = () => {
  const classes = useStyles()

  const { heading, benefitsList, learnMore, image, title, disclaimer }: any =
    useAppData('directTvBenefits', true)
  const NonImageContent = () => (
    <div id="direct-tv-benefits" className={classes.NonImageContainer}>
      <div className={classes.NonImageWrapper}>
        <InjectHTML tagType="h3" styleType="h3" value={heading?.value} />

        {benefitsList?.list?.map((item: any, i: number) => (
          <ul key={`key-titles-${i}`}>
            <InjectHTML
              tagType="p"
              styleType="p2"
              className={classes.benefitTitle}
              value={item?.benefitsTitle?.value}
            />
            {item?.benefitsDetails?.details?.map((details: any, j: number) => (
              <li key={`key-titles-${i}-details-${j}`}>
                <span className={classes.dot}></span>
                <Typography tagType="span" styleType="p2">
                  {details?.detail?.value}
                </Typography>
              </li>
            ))}
          </ul>
        ))}
        <div className={classes.learnWrapper}>
          <Button
            type="link"
            target="_blank"
            text={learnMore?.text}
            href={learnMore?.url}
            className={classes.learnBtn}
          />
        </div>
        <div>
          {disclaimer?.value && (
            <InjectHTML
              tagType="p"
              styleType="p2"
              className={classes.disclaimerStyle}
              value={disclaimer?.value}
            />
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <TwoColumnLayout
        imageWrapperClassName={classes.imageWrapper}
        gridClassName={classes.grid}
        image={image?.src}
        webpImage={image?.webp}
        title={title?.value}
        content={<NonImageContent />}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: 0,
    '& img': {
      maxHeight: 'unset',
    },
    [breakpoints.down('sm')]: {
      '& > div > div': {
        padding: 0,
      },
    },
  },
  NonImageContainer: {
    backgroundColor: colors.main.white,
    marginRight: 'auto',
    width: '100%',
    [breakpoints.down('sm')]: {
      padding: '2rem 0rem',
      width: '100%',
    },
  },
  NonImageWrapper: {
    backgroundColor: colors.main.newBackgroundGray,
    paddingLeft: '7%',
    padding: '3rem 2rem 4.5rem 4rem',
    [breakpoints.down('xs')]: {
      padding: '2rem 1rem 2.5rem 1rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& ul': {
      listStyleType: 'none',
      marginBottom: 0,
      paddingLeft: 0,
    },
    [breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  benefitTitle: {
    margin: 0,
    marginBottom: 8,
  },
  learnWrapper: {
    marginTop: 32,
    marginBottom: 32,
    [breakpoints.down('sm')]: {
      marginBottom: 0,
      display: 'flex',
    },
  },
  learnBtn: {
    [breakpoints.down('md')]: {
      margin: 'auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  dot: {
    height: '0.25rem',
    width: '0.25rem',
    marginBottom: '0.25rem',
    marginRight: '0.25rem',
    backgroundColor: colors.main.midnightExpress,
    display: 'inline-block',
    borderRadius: '100%',
  },
  imageWrapper: {
    [breakpoints.up('md')]: {
      height: '100%',
    },
  },
  grid: {
    [breakpoints.up('md')]: {
      '& > div:nth-of-type(2)': {
        minWidth: 'calc(50% + 3rem)',
      },
      '& > div:first-of-type': {
        maxWidth: 'calc(50% - 3rem)',
      },
    },
  },
  disclaimerStyle: {
    fontSize: '10px',
    lineHeight: '12px',
    maxWidth: '471px',
    paddingBottom: '46px',
    marginBottom: 0,
    [breakpoints.down('sm')]: {
      paddingBottom: 0,
      maxWidth: '100%',
      paddingRight: '9%',
    },
  },
}))

export default YouTubeTvBenefits
