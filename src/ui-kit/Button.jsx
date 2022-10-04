import MUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
const Button = ({
  type = 'primary',
  children,
  onClick,
  disabled = false,
  customClass = '',
  ...args
}) => {
  const classes = useStyles()
  return (
    <MUIButton
      className={`${classes.button} ${
        type === 'primary' ? classes.primaryBtn : classes.secondaryBtn
      } ${customClass && customClass} ${disabled && classes.btnDisabled}`}
      onClick={onClick}
      disabled={disabled}
      {...args}
    >
      {children}
    </MUIButton>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 4,
    textTransform: 'none',
    fontWeight: 'bold',
    padding: `10px 20px`,
  },
  primaryBtn: {
    color: colors.main.white,
    backgroundColor: colors.main.primaryRed,
    border: `1px solid transparent`,
    '&:hover': {
      border: `1px solid ${colors.main.primaryRed}`,
      color: colors.main.primaryRed,
    },
  },
  secondaryBtn: {
    color: colors.main.primaryRed,
    backgroundColor: colors.main.white,
    border: `1px solid ${colors.main.primaryRed}`,
  },
  btnDisabled: {
    opacity: 0.5,
  },
}))

export default Button
