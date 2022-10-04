import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core'
import { ChangeEvent } from 'react'
export type ISelectProps = {
  label: string
  checked: boolean
  name: string
  // eslint-disable-next-line no-unused-vars
  setValue: (val: ChangeEvent<HTMLInputElement>) => string
  required?: boolean
  helperText?: string
  isError?: boolean
}

const FrontierCheckbox = (props: ISelectProps) => {
  const {
    label,
    checked,
    setValue,
    name,
    required,
    helperText = '',
    isError = false,
  } = props
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            required={required}
            onChange={setValue}
            name={name}
            color="primary"
          />
        }
        label={label}
      />
      {isError && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default FrontierCheckbox
