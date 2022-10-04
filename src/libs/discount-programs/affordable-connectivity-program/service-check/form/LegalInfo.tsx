import { makeStyles } from '@material-ui/core'
import { RichText } from 'src/blitz'
import { Checkbox } from 'src/ui-kit'
import { hasError } from './formHelper'
import { getIn } from 'formik'
import { useAppData } from 'src/hooks'
const LegalInfo = ({ formik, children }: any) => {
  const classes = useStyles()
  const { setFieldValue, values, errors, touched } = formik
  const { checkboxLabel, checkboxName, checkboxRequired, richTextContent } =
    useAppData('legalInfoFormData', true)
  return (
    <div className={`${classes.root}`}>
      <div className={classes.formWrapper}>
        <RichText
          wrapperClassName={classes.richText}
          data={{
            content: {
              value: richTextContent?.value,
            },
          }}
        />

        <Checkbox
          label={checkboxLabel?.value}
          name={checkboxName?.value}
          required={checkboxRequired?.value}
          helperText={
            hasError(touched, errors, checkboxName?.value) &&
            getIn(errors, checkboxName?.value)
          }
          isError={hasError(touched, errors, checkboxName?.value)}
          setValue={() => {
            return setFieldValue(
              `${checkboxName?.value}`,
              !getIn(values, checkboxName?.value),
            )
          }}
          checked={getIn(values, checkboxName?.value)}
        />

        {children}
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ typography }) => ({
  root: {
    width: '100%',
  },
  headline: {
    margin: 0,
    marginBottom: 16,
  },
  formWrapper: {
    padding: 48,
  },
  actionList: {
    listStyleType: 'circle',
  },
  richText: {
    fontFamily: 'PP OBJECT SANS',
    '& ul': {
      paddingLeft: '1.5rem',
    },
    '& li': {
      marginBottom: '1rem',
      fontSize: typography.pxToRem(18),
    },
    '& p': { marginBottom: '0.5rem', fontSize: typography.pxToRem(18) },
    marginBottom: '2rem',
    padding: 0,
  },
}))

export default LegalInfo
