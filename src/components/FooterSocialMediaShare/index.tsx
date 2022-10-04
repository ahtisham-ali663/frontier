import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import colors from 'src/styles/theme/colors'
import Link from 'next/link'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const Youtube = 'YouTube'
const Facebook = 'Facebook'
const LinkedIn = 'LinkedIn'
const Twitter = 'Twitter'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingRight: '26px',
    fontWeight: 400,
    alignItems: 'flex-end',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
      paddingLeft: 26,
      alignItems: 'center',
    },
  },
  linksContainer: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },
  link: {
    listStyle: 'none',
    margin: 10,
    backgroundColor: colors.main.midnightExpress,
    color: colors.main.white,
    borderRadius: '50%',
    width: 25,
    height: 25,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      margin: 2,
    },
    '& a': {
      display: 'flex',
    },
    '& a > svg': {
      fontSize: '1rem',
    },
  },
}))

interface FooterSocialMediaProps {
  data?: any
}
const getSocialMediaAnchor = (media: string, url: string) => {
  switch (media) {
    case Twitter:
      return (
        <a target="_blank" title={Twitter} href={url} rel="noopener noreferrer">
          {<TwitterIcon />}
        </a>
      )
    case Facebook:
      return (
        <a
          target="_blank"
          title={Facebook}
          href={url}
          rel="noopener noreferrer"
        >
          {<FacebookIcon />}
        </a>
      )
    case LinkedIn:
      return (
        <a
          target="_blank"
          title={LinkedIn}
          href={url}
          rel="noopener noreferrer"
        >
          {<LinkedInIcon />}
        </a>
      )
    case Youtube:
      return (
        <a target="_blank" title={Youtube} href={url} rel="noopener noreferrer">
          {<YouTubeIcon />}
        </a>
      )
    default:
      return <></>
  }
}
const FooterSocialMediaShare: React.FC<FooterSocialMediaProps> = ({
  data: socialMediaProps,
}) => {
  const classes = useStyles()
  const { data } = useSelector((state: any) => state.appData)
  const { social_media_links } =
    socialMediaProps || data?.Footer?.fields?.data?.datasource || []

  return (
    <div className={classes.root}>
      <ul className={classes.linksContainer}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          social_media_links?.social_media_links?.map(({ path, name }: any) => {
            return (
              <li className={classes.link} key={`social-media-${name}`}>
                <Link href={path.url}>
                  {getSocialMediaAnchor(name, path.url)}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FooterSocialMediaShare
