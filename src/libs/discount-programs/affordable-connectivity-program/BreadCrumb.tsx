import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import { InjectHTML } from 'src/blitz'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const BreadCrumb = () => {
  const { linkTextSC } = useAppData('BreadCrumb', true)
  const router = useRouter()
  const pathParts = router.pathname
    .split('/')
    .filter((part) => part?.trim() !== '')
    .slice(-2)

  const linkText = `<a href='./${pathParts[0]}'> ${pathParts[0]}</a> <strong>></strong> ${pathParts[1]}`

  const classes = useStyles()
  if (pathParts.length === 0) return null
  return (
    <InjectHTML
      className={classes.BreadCrumb}
      value={linkTextSC?.value || linkText}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  BreadCrumb: {
    maxWidth: 1200,
    margin: '.625rem auto',
    '& a': {
      fontWeight: 700,
      textDecoration: 'underline',
      '&:hover': { color: colors.main.primaryRed },
    },
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

export default BreadCrumb
