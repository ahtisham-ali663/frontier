import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import Link from 'next/link'
import { useAppData } from 'src/hooks'
import { InjectHTML } from 'src/blitz'

type footerLinks = {
  name: string
  path: {
    url: string
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 40px',
      marginTop: 0,
    },
  },
  footerLinkItem: {
    justifyContent: 'center',
    lineHeight: 1.5,
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'start',
      padding: '6px 0px',
      width: '48%',
    },
  },
  footerLink: {
    color: colors.main.midnightExpress,
    fontWeight: 400,
    fontSize: theme.typography.caption.fontSize,
    marginRight: '25px',
  },
}))

interface FooterLinksProps {
  data?: any
}

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
  const classes = useStyles()
  const { sub_footer_links } = useAppData('Footer', true, data) || {}
  const [domain, setDomain] = useState('')
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  useEffect(() => {
    setDomain(origin)
  }, [origin])

  return (
    <ul className={`${classes.root} footer-links`}>
      {sub_footer_links?.links?.map(({ name, path }: footerLinks) => {
        const url = `${domain}${path?.url}`
        return (
          <li key={`footer-link-${name}`} className={classes.footerLinkItem}>
            <Link href={url || ''}>
              <a className={classes.footerLink}>
                <InjectHTML pureInjection value={name} />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default FooterLinks
