import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Typography } from 'src/blitz'
import { FRGUIDE } from 'src/constants/fontFamilyNames'
import colors from 'src/styles/theme/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    fontWeight: 300,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginTop: 40,
      marginBottom: 40,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'left',
      padding: '20px 20px 20px 40px',
      paddingBottom: 0,
      fontSize: theme.typography.h5.fontSize,
    },
  },
  copyRight: {
    fontSize: theme.typography.subtitle2.fontSize,
    fontFamily: FRGUIDE,
    color: colors.main.midnightExpress,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}))

interface FooterCopyRightsProps {
  data?: any
}
const FooterCopyRights: React.FC<FooterCopyRightsProps> = ({
  data: copyRightsData,
}) => {
  const classes = useStyles()
  const { data } = useSelector((state: any) => state.appData)
  const { footer_copy_rights, footer_rights_reserved } =
    copyRightsData || data?.Footer?.fields?.data?.datasource || {}

  return (
    <div className={classes.root}>
      <Typography className={classes.copyRight}>
        <>
          {footer_copy_rights?.value || ''}
          {footer_rights_reserved?.value || ''}
        </>
      </Typography>
    </div>
  )
}

export default FooterCopyRights
