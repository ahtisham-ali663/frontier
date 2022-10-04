import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { Typography } from 'src/blitz'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from 'src/components/Accordion'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useAppData } from 'src/hooks'
import { InjectHTML } from 'src/blitz'

type footerLinks = {
  data: {
    name: string
    path: {
      url: string
    }
  }[]
}

type linkProps = {
  title: ''
  items: {
    name: string
    path: {
      url: string
    }
  }[]
}

interface FooterOuterProps {
  data?: any
}

const FooterOuter: React.FC<FooterOuterProps> = ({ data }) => {
  const classes = useStyles()
  const { field } = useAppData('Footer', true, data) || {}
  const [expanded, setExpanded] = React.useState('')
  const handleChange =
    (i: number) => (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
      const panel = `panel-${i}`
      setExpanded(isExpanded ? panel : '')
    }

  return (
    <>
      <div className={classes.desktopView}>
        <Grid container className={classes.root} justifyContent="space-between">
          {field?.main_links?.map(({ title, items }: linkProps, i: number) => (
            <Grid md={2} item key={i}>
              <div className={classes.footerLinkWrapper}>
                <Typography styleType="p3" className={classes.footerTitle}>
                  {title || ''}
                </Typography>
                <FooterLinks data={items} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.mobileView}>
        {field?.main_links?.map(({ title, items }: linkProps, i: number) => (
          <div className={classes.footerLinkWrapper} key={i}>
            <Accordion
              square
              expanded={expanded === `panel-${i}`}
              onChange={handleChange(i)}
              classes={{ root: classes.accordianRoot }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel-${i}` ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls={`Expand ${title}`}
              >
                <Typography styleType="p3" className={classes.footerTitle}>
                  {title || ''}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FooterLinks data={items} />
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  )
}

const FooterLinks: React.FC<footerLinks> = ({ data }) => {
  const classes = footerStyles()
  const [domain, setDomain] = useState('')
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  useEffect(() => {
    setDomain(origin)
  }, [origin])
  return (
    <ul className={classes.root}>
      {data?.map((item: any, j) => {
        const url =
          item?.path?.url.search('https') < 0
            ? domain + item?.path?.url
            : `${item?.path?.url}`
        return (
          <li key={`footer-link-${j}`} className={classes.footerLinkItem}>
            <Link href={url}>
              <a className={classes.footerLink}>
                <InjectHTML pureInjection value={item?.name?.value} />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingLeft: 0,
  },
  footerLinkWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 0,
  },
  footerTitle: {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.22',
  },
  mobileView: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  desktopView: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  accordianRoot: {
    border: 'none',
    borderTop: '1px solid rgba(0, 0, 0, .05)',
    borderBottom: '1px solid rgba(0, 0, 0, .05)',
    '& .Mui-expanded': {
      borderBottom: 'none',
    },
  },
}))
const footerStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  footerLink: {
    color: colors.main.midnightExpress,
    fontWeight: 400,
    fontSize: '.875rem',
    padding: '2px 0',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  footerLinkItem: {
    textDecoration: 'none',
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.5,
    },
  },
}))

export default FooterOuter
