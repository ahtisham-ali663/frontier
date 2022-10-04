import { makeStyles } from '@material-ui/core'
import FooterLinks from 'src/components/FooterLinks'
import FooterSocialMediaShare from 'src/components/FooterSocialMediaShare'
import FooterCopyRights from 'src/components/FooterCopyRights'
import Grid from '@material-ui/core/Grid'
import FooterOuter from '../FooterOuter'
import { FRGUIDE } from 'src/constants/fontFamilyNames'
import { usePageLoadEvents } from 'src/hooks'
interface FooterProps {
  data?: any
}

const Footer = ({ data }: FooterProps) => {
  const classes = useStyles()
  usePageLoadEvents({
    shouldInvokeDTMPageLoadEvent: true,
  })

  return (
    <footer className={classes.root}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid xs={12} item>
          <FooterOuter data={data} />
        </Grid>
        <Grid xs={12} item>
          <FooterCopyRights data={data} />
        </Grid>
        <Grid md={10} sm={12} item>
          <FooterLinks data={data} />
        </Grid>
        <Grid md={2} sm={12} item>
          <FooterSocialMediaShare data={data?.social_media_links} />
        </Grid>
      </Grid>
    </footer>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '20px 20px 40px',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: FRGUIDE,
    maxWidth: '1140px',
    margin: '80px auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 85px',
      margin: 'auto',
    },
  },
}))

export default Footer
