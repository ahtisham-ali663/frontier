import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import clx from 'classnames'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { Tooltip } from 'src/blitz'
import { QuestionIcon } from 'src/blitz/assets/react-icons'
export type IRadioInput = {
  label: string
  value: string
  name: string
  // eslint-disable-next-line no-unused-vars
  setValue: (val: string) => string
  options?: IRadioOption[]
  required?: boolean
  info?: string
  direction?: IDirection
}

export type IRadioOption = {
  label: string
  value: string
}

export type IDirection = 'row' | 'column'

const RadioInput = (props: IRadioInput) => {
  const styles = useStyles()
  const {
    label,
    value,
    setValue,
    name,
    options = [],
    required,
    info,
    direction = 'row',
  } = props
  return (
    <FormControl className={clx({ [styles.radioRow]: direction === 'row' })}>
      <FormLabel
        className={clx(styles.radioLabel, {
          [styles.radioLabelRow]: direction === 'row',
          [styles.radioLabelColumn]: direction === 'column',
        })}
      >
        {label}
        {required && <span className={styles.required}>*</span>}
        {info && (
          <span className={styles.info}>
            <Tooltip
              tooltipText={info}
              tooltipIcon={<QuestionIcon />}
              includeBorder
              tooltipDirection="bottom"
              hideBorder
              dropShadow
            />
          </span>
        )}
      </FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        row
      >
        {options?.map((option, key) => {
          return (
            <FormControlLabel
              key={key}
              value={option?.value}
              control={<Radio className={styles.radioBtn} />}
              label={option?.label}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}
const useStyles = makeStyles(({ typography, breakpoints }) => ({
  radioRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  radioLabel: {
    fontSize: '1.125rem',
    '&.Mui-focused': {
      color: colors.main.darkBlue,
    },
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(16),
    },
  },
  radioLabelRow: {
    marginRight: 48,
    [breakpoints.down('md')]: {
      marginBottom: 8,
    },
  },
  radioLabelColumn: {
    marginBottom: 8,
  },
  required: {
    color: colors.main.brightRed,
    fontSize: 24,
    position: 'relative',
    top: 4,
  },
  radioBtn: {
    padding: '0 8px',
  },
  info: {
    marginLeft: 10,
    display: 'inline-flex',
    position: 'relative',
    top: 4,
    '& :hover': {
      '& svg path': {
        fill: colors.main.brightRed,
      },
    },
  },
}))
export default RadioInput
