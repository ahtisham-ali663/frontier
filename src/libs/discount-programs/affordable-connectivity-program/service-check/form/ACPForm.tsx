import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, Typography, InfoModal } from 'src/blitz'
import SubscriberInfo from './SubscriberInfo'
import ContactInfo from './ContactInfo'
import LegalInfo from './LegalInfo'
import BenefitQualifiedPersonFrom from './BenefitQualifiedPerson'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useFormik } from 'formik'
import { IFormValues, IsetSubmitting } from './types'
import colors from 'src/styles/theme/colors'
import validationSchema from './formValidator'
import initialValues from './initialValues'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'src/redux/types'
import { ACP_FORM_SUBMIT, ACP_FORM_VIEW, SITE_INTERACTION } from 'src/constants'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import {
  formSingleLineAddress,
  SingleLineAddress,
} from 'src/utils/addressHelpers'
import { acpSlice, submitForm } from 'src/redux/slicers/acp'

const ApplicationForm = () => {
  const classes = useStyles()
  const selectedAddress = useSelector(
    (state: State) => state?.acp?.selectedAddress,
  )
  const [environment, setEnvironment] = useState('')
  const [controlNumber, setControlNumber] = useState('')
  const submitModal = useSelector((state: State) => state?.acp?.submitModal)
  const dispatch = useDispatch()
  useEffect(() => {
    const addr = selectedAddress?.samRecords?.[0]
    formik?.setFieldValue(
      'subscriberServiceAddress',
      formSingleLineAddress(
        selectedAddress?.address as SingleLineAddress,
        true,
      ),
    )
    formik?.setFieldValue(
      'subscriberState',
      selectedAddress?.address?.stateProvince,
    )

    formik?.setFieldValue(
      'subscriberServiceAddressStreet',
      selectedAddress?.address?.addressLine1,
    )

    formik?.setFieldValue(
      'subscriberServiceAddressApartment',
      selectedAddress?.address?.addressLine2,
    )

    formik?.setFieldValue(
      'subscriberServiceAddressCity',
      selectedAddress?.address?.city,
    )

    formik?.setFieldValue(
      'subscriberServiceAddressState',
      selectedAddress?.address?.stateProvince,
    )

    formik?.setFieldValue(
      'subscriberServiceAddressZipCode',
      selectedAddress?.address?.zipCode,
    )
    setEnvironment(addr?.environment ?? '')
    setControlNumber(addr?.controlNumber ?? '')
  }, [selectedAddress])
  useEffect(() => {
    // trigger analytics on acp form view
    DTMClient.triggerEvent(
      {
        events: 'event1',
        eVar2: ACP_FORM_VIEW,
      },
      'tl_o',
      SITE_INTERACTION,
    )
  }, [])

  const handleOnSubmit = async (
    values: IFormValues,
    { setSubmitting }: IsetSubmitting,
  ) => {
    setSubmitting(true)
    DTMClient.triggerEvent(
      {
        events: ['event14', 'event2'],
        eVar14: ACP_FORM_SUBMIT,
        eVar2: ACP_FORM_VIEW,
      },
      'tl_o',
      SITE_INTERACTION,
    )
    await dispatch(
      submitForm(
        environment || '',
        controlNumber || '',
        selectedAddress!,
        values,
      ),
    )
    setSubmitting(false)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleOnSubmit,
  })

  const isFormValid = Object.keys(formik.touched).length > 0 && formik.isValid
  return (
    <>
      <InfoModal
        isOpen={Boolean(submitModal?.showModal)}
        isLoading={Boolean(submitModal?.isLoading)}
        isClosable={true}
        title={submitModal?.title || ''}
        subTitle={submitModal?.subTitle || ''}
        onClose={() => dispatch(acpSlice.actions.setSubmitModal(undefined))}
        isFooterCloseButton={submitModal?.isFooterCloseButton || false}
        buttonName={submitModal?.buttonName || ''}
        modalContentClassName={
          submitModal?.modalContentClassName ? classes.modalContent : ''
        }
      />
      <div className={classes.formWrapper}>
        <form onSubmit={formik.handleSubmit} noValidate>
          <SubscriberInfo {...formik} />
          {!parseInt(formik.values.hasApplicationId) && (
            <BenefitQualifiedPersonFrom {...formik} />
          )}
          <ContactInfo {...formik} />
          <LegalInfo formik={formik}>
            <Button
              text={'Submit application'}
              type="submit"
              className={classes.button}
              variant="primary"
              disabled={!isFormValid || formik.isSubmitting}
            />
          </LegalInfo>
        </form>
      </div>
      <div className={classes.requiredWrapper}>
        <span className={classes.required}>*</span>
        <Typography tagType="p" styleType="p2">
          Required field
        </Typography>
      </div>
    </>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  formWrapper: {
    ...COMPONENT_WRAPPER,
    maxWidth: 1000,
    paddingTop: 80,
    paddingBottom: 16,
  },
  innerForm: {
    marginBottom: 32,
  },
  button: {
    width: 265,
    padding: '0rem',
    marginTop: 32,
    marginBottom: 192,
    [breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 88,
    },
  },
  requiredWrapper: {
    ...COMPONENT_WRAPPER,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& p': {
      margin: 0,
    },
    '& span:after': {
      content: '*',
      position: 'relative',
      top: 5,
      marginRight: 5,
    },
  },
  required: {
    color: colors.main.brightRed,
    fontSize: 32,
  },
  modalContent: {
    [breakpoints.down('xs')]: {
      margin: 0,
      width: '100%',
      borderRadius: 0,
      height: '100%',
    },
    '& a': {
      textDecoration: 'underline',
      fontWeight: 600,
    },
  },
}))

export default ApplicationForm
