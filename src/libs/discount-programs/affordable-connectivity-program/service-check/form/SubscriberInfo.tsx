import { makeStyles } from '@material-ui/core'
import { useCallback, useMemo } from 'react'
import { Input, RadioGroup, Select, DatePicker } from 'src/ui-kit'
import { FormLayout, FormGroup } from './Forms'
import { MAX_DATE, hasError, isRenderCheck } from './formHelper'
import { getIn } from 'formik'
import useAppData from 'src/hooks/useAppData'

const BasicFormInfo = (formik: any) => {
  const { setFieldValue, values, handleBlur, errors, touched } = formik
  const classes = useStyles()
  const {
    basicInfoform: [basicInfoform] = [],
    applicationInfo: [applicationInfo] = [],
    subscriber: [subscriber] = [],
    contactInfo: [contactInfo] = [],
    serviceAddress: [serviceAddress] = [],
  } = useAppData('subscriberInfoFormData', true)

  const setInputValue = useCallback(
    ({ target: { value } }: any, name: string) => setFieldValue(name, value),
    [formik],
  )

  const maxDate = MAX_DATE
  const subscriberFields = useMemo(() => {
    return subscriber?.fields?.filter((field: any) => {
      const showFor = field?.showFor?.data?.[0]
      const showForDictionary: any = {}
      for (const key in showFor) {
        if (showFor[key]?.value) {
          showForDictionary[key] = showFor[key]?.value
        }
      }
      const isAllowed = showFor
        ? isRenderCheck(showForDictionary, values)
        : true
      if (isAllowed) return field
    })
  }, [subscriber, values[`subscriberPersonalId`], values['hasApplicationId']])
  return (
    <div className={`${classes.root}`}>
      <FormLayout
        title={basicInfoform?.title?.value}
        description={basicInfoform?.description?.value}
        partDescription={'PART 1'}
      >
        <FormGroup title={applicationInfo?.title?.value}>
          {applicationInfo?.fields?.map((field: any, index: number) => {
            const {
              type: { value: type = undefined } = {},
              label: { value: label = undefined } = {},
              name: { value: name = undefined } = {},
              fullWidth: { value: fullWidth = undefined } = {},
              required: { value: required = undefined } = {},
              tooltipText: { value: tooltipText = undefined } = {},
              mask: { value: mask = undefined } = {},
              options,
            } = field

            return (
              <div key={index}>
                {type === 'radio' && (
                  <div className={classes.inputWrapper}>
                    <RadioGroup
                      label={label}
                      value={values[name]}
                      name={name}
                      options={options?.option.map((x: any) => {
                        return {
                          label: x?.label?.value,
                          value: x?.value?.value,
                        }
                      })}
                      setValue={(val: string) => setFieldValue(`${name}`, val)}
                      required={required}
                      info={tooltipText}
                    />
                  </div>
                )}
                {values['hasApplicationId'] === '1' && type === 'text' && (
                  <div className={classes.inputWrapper}>
                    <Input
                      label={label}
                      value={getIn(values, name)}
                      name={name}
                      fullWidth={fullWidth}
                      required={required}
                      onChange={(ev: any) => setInputValue(ev, name)}
                      onBlur={handleBlur}
                      mask={mask}
                      helperText={
                        hasError(touched, errors, name) && getIn(errors, name)
                      }
                      isError={hasError(touched, errors, name)}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </FormGroup>
        <FormGroup title={subscriber?.title?.value}>
          {subscriberFields?.map((field: any, index: number) => {
            const {
              options,
              type: { value: type = undefined } = {},
              label: { value: label = undefined } = {},
              name: { value: name = undefined } = {},
              fullWidth: { value: fullWidth = undefined } = {},
              required: { value: required = undefined } = {},
              disabled: { value: disabled = undefined } = {},
            } = field
            return (
              <div key={index} className={classes.inputWrapper}>
                {type === 'text' && (
                  <Input
                    label={label}
                    name={name}
                    value={getIn(values, name)}
                    required={required}
                    fullWidth={fullWidth}
                    onChange={(ev: any) => setInputValue(ev, name)}
                    type={type}
                    onBlur={handleBlur}
                    helperText={
                      hasError(touched, errors, name) && getIn(errors, name)
                    }
                    isError={hasError(touched, errors, name)}
                    disabled={disabled}
                  />
                )}
                {type === 'date' && (
                  <DatePicker
                    format="MM/DD/YYYY"
                    label={label}
                    name={name}
                    required={required}
                    onChange={(val: any) => setFieldValue(name, val)}
                    maxDate={maxDate}
                    value={getIn(values, name)}
                    helperText={
                      hasError(touched, errors, name) && getIn(errors, name)
                    }
                    isError={hasError(touched, errors, name)}
                  />
                )}
                {type === 'select' && (
                  <Select
                    label={label}
                    disabled={disabled}
                    value={getIn(values, name)}
                    name={name}
                    options={options?.option.map((x: any) => {
                      return {
                        label: x?.label?.value,
                        value: x?.value?.value,
                      }
                    })}
                    setValue={(val: string) => setFieldValue(name, val)}
                    required={required}
                    helperText={
                      hasError(touched, errors, name) && getIn(errors, name)
                    }
                    isError={hasError(touched, errors, name)}
                  />
                )}
              </div>
            )
          })}
        </FormGroup>
        {values['hasApplicationId'] === '0' && (
          <FormGroup
            title={serviceAddress?.title?.value}
            description={serviceAddress?.description?.value}
          >
            {serviceAddress?.fields?.map((field: any, index: number) => {
              const {
                type: { value: type = undefined } = {},
                label: { value: label = undefined } = {},
                name: { value: name = undefined } = {},
                fullWidth: { value: fullWidth = undefined } = {},
                required: { value: required = undefined } = {},
                disabled: { value: disabled = undefined } = {},
                options,
              } = field
              return (
                <div key={index} className={classes.inputWrapper}>
                  {type === 'text' && (
                    <Input
                      label={label}
                      name={name}
                      value={getIn(values, name)}
                      required={required}
                      fullWidth={fullWidth}
                      onChange={(ev: any) => setInputValue(ev, name)}
                      type={type}
                      onBlur={handleBlur}
                      helperText={
                        hasError(touched, errors, name) && getIn(errors, name)
                      }
                      isError={hasError(touched, errors, name)}
                      disabled={disabled}
                    />
                  )}
                  {type === 'select' && (
                    <Select
                      label={label}
                      value={getIn(values, name)}
                      name={name}
                      disabled={disabled}
                      options={options?.option.map((x: any) => {
                        return {
                          label: x?.label?.value,
                          value: x?.value?.value,
                        }
                      })}
                      setValue={(val: string) => setFieldValue(name, val)}
                      required={required}
                      helperText={
                        hasError(touched, errors, name) && getIn(errors, name)
                      }
                      isError={hasError(touched, errors, name)}
                    />
                  )}
                </div>
              )
            })}
          </FormGroup>
        )}
        <FormGroup
          title={contactInfo?.title?.value}
          description={contactInfo?.description?.value}
        >
          {contactInfo?.fields?.map((field: any, index: number) => {
            const {
              type: { value: type = undefined } = {},
              label: { value: label = undefined } = {},
              name: { value: name = undefined } = {},
              fullWidth: { value: fullWidth = undefined } = {},
              required: { value: required = undefined } = {},
              mask: { value: mask = undefined } = {},
            } = field
            return (
              type === 'text' && (
                <div key={index} className={classes.inputWrapper}>
                  <Input
                    label={label}
                    name={name}
                    required={required}
                    value={getIn(values, name)}
                    onChange={(ev: any) => setInputValue(ev, name)}
                    fullWidth={fullWidth}
                    mask={mask}
                    onBlur={handleBlur}
                    helperText={
                      hasError(touched, errors, name) && getIn(errors, name)
                    }
                    isError={hasError(touched, errors, name)}
                  />
                </div>
              )
            )
          })}
        </FormGroup>
      </FormLayout>
    </div>
  )
}

const useStyles = makeStyles(({ typography }) => ({
  root: {
    width: '100%',
    marginBottom: typography.pxToRem(32),
  },
  inputWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  description: {
    margin: '8px 0px 0px',
  },
}))

export default BasicFormInfo
