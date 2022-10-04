import * as yup from 'yup'
import {
  REQUIRED,
  INVALID_NUMBER,
  phoneRegExp,
  appIdRegExp,
  INVALID_EMAIL,
  INVALID,
  INVALID_APPLICATION_ID,
  INVALID_DATE,
} from 'src/constants'
import { subYears } from 'date-fns'
import { validateRadioValue, parseDate } from './formHelper'
const MAX_DATE = subYears(new Date(), 18)
export const MIN_DATE = new Date(1900, 1, 1)
const schema = yup.object().shape({
  // Part 1
  hasApplicationId: yup.string().required(REQUIRED),
  enrollInTribalBenefit: yup.string().required(REQUIRED),
  applicationId: yup.string().when('hasApplicationId', {
    is: '1',
    then: yup
      .string()
      .matches(appIdRegExp, INVALID_APPLICATION_ID)
      .required(REQUIRED),
  }),
  subscriberFirstName: yup
    .string()
    .min(2, INVALID)
    .max(50, INVALID)
    .required(REQUIRED),
  subscriberMiddleName: yup.string().min(2, INVALID).max(50, INVALID),
  subscriberLastName: yup
    .string()
    .min(2, INVALID)
    .max(50, INVALID)
    .required(REQUIRED),
  subscriberDob: yup
    .date()
    .transform(parseDate)
    .min(MIN_DATE, INVALID_DATE)
    .max(MAX_DATE, INVALID_DATE)
    .required(REQUIRED),
  subscriberState: yup.string().required(REQUIRED),
  subscriberPersonalId: yup.string().when('hasApplicationId', {
    is: '0',
    then: yup.string().required(REQUIRED),
  }),
  subscriberTribalId: yup
    .string()
    .when(['subscriberPersonalId', 'hasApplicationId'], {
      is: (subscriberPersonalId: string, hasApplicationId: any) =>
        validateRadioValue(subscriberPersonalId, 'tribalId') &&
        validateRadioValue(hasApplicationId, false),
      then: yup
        .string()
        .min(2, INVALID_NUMBER)
        .max(20, INVALID_NUMBER)
        .required(REQUIRED),
    }),
  subscriberEmail: yup
    .string()
    .email()
    .when(['subscriberPhoneNumber'], {
      is: (subscriberPhoneNumber: string) => !subscriberPhoneNumber,
      then: yup.string().required(REQUIRED),
      otherwise: yup.string(),
    }),
  subscriberPhoneNumber: yup
    .string()
    .matches(phoneRegExp, INVALID_NUMBER)
    .test(function (value) {
      const { subscriberEmail } = this.parent
      if (!subscriberEmail && !value) return false
      return true
    }),
  subscriberLast4Social: yup
    .string()
    .when(['subscriberPersonalId', 'hasApplicationId'], {
      is: (subscriberPersonalId: string, hasApplicationId: any) => {
        return (
          validateRadioValue(subscriberPersonalId, 'last4Social') &&
          validateRadioValue(hasApplicationId, false)
        )
      },
      then: yup
        .string()
        .length(4, INVALID_NUMBER)
        .notOneOf(['0000'], INVALID_NUMBER)
        .required(REQUIRED),
    }),

  // Part 3
  communicationPreference: yup.string().required(REQUIRED),
  contactMobile: yup.string().when('communicationPreference', {
    is: 'SMS',
    then: yup.string().matches(phoneRegExp, INVALID_NUMBER).required(REQUIRED),
  }),
  contactEmail: yup
    .string()
    .email(INVALID_EMAIL)
    .when('communicationPreference', {
      is: 'Email',
      then: yup.string().email().required(REQUIRED),
    }),

  // Part 2
  isCustomerInfoSame: yup.string().required(REQUIRED),

  benefitQualifiedPersonFirstName: yup
    .string()
    .when(['hasApplicationId', 'isCustomerInfoSame'], {
      is: (hasApplicationId: string, isCustomerInfoSame: any) =>
        validateRadioValue(isCustomerInfoSame, false) &&
        validateRadioValue(hasApplicationId, false),
      then: yup.string().required(REQUIRED).min(2, INVALID).max(50, INVALID),
    }),
  benefitQualifiedPersonMiddleName: yup
    .string()
    .when(['hasApplicationId', 'isCustomerInfoSame'], {
      is: (hasApplicationId: string, isCustomerInfoSame: any) =>
        validateRadioValue(isCustomerInfoSame, false) &&
        validateRadioValue(hasApplicationId, false),
      then: yup.string().min(2, INVALID).max(50, INVALID),
    }),
  benefitQualifiedPersonLastName: yup
    .string()
    .when(['hasApplicationId', 'isCustomerInfoSame'], {
      is: (hasApplicationId: string, isCustomerInfoSame: any) =>
        validateRadioValue(isCustomerInfoSame, false) &&
        validateRadioValue(hasApplicationId, false),
      then: yup.string().required(REQUIRED).min(2, INVALID).max(50, INVALID),
    }),
  benefitQualifiedPersonDob: yup
    .date()
    .when(['hasApplicationId', 'isCustomerInfoSame'], {
      is: (hasApplicationId: string, isCustomerInfoSame: any) =>
        validateRadioValue(isCustomerInfoSame, false) &&
        validateRadioValue(hasApplicationId, false),
      then: yup
        .date()
        .transform(parseDate)
        .min(MIN_DATE, INVALID_DATE)
        .max(MAX_DATE, INVALID_DATE)
        .required(REQUIRED),
    }),
  benefitQualifiedPersonalId: yup
    .string()
    .when(['hasApplicationId', 'isCustomerInfoSame'], {
      is: (hasApplicationId: string, isCustomerInfoSame: any) =>
        validateRadioValue(isCustomerInfoSame, false) &&
        validateRadioValue(hasApplicationId, false),
      then: yup.string().required(REQUIRED),
    }),
  benefitQualifiedPersonLast4Social: yup
    .string()
    .when(
      ['hasApplicationId', 'isCustomerInfoSame', 'benefitQualifiedPersonalId'],
      {
        is: (
          hasApplicationId: string,
          isCustomerInfoSame: string,
          benefitQualifiedPersonalId: string,
        ) =>
          validateRadioValue(hasApplicationId, false) &&
          validateRadioValue(isCustomerInfoSame, false) &&
          validateRadioValue(benefitQualifiedPersonalId, 'last4Social'),
        then: yup
          .string()
          .notOneOf(['0000'], INVALID_NUMBER)
          .length(4, INVALID_NUMBER)
          .required(REQUIRED),
      },
    ),
  benefitQualifiedPersonTribalId: yup
    .string()
    .when(
      ['hasApplicationId', 'isCustomerInfoSame', 'benefitQualifiedPersonalId'],
      {
        is: (
          hasApplicationId: string,
          isCustomerInfoSame: string,
          benefitQualifiedPersonalId: string,
        ) =>
          validateRadioValue(hasApplicationId, false) &&
          validateRadioValue(isCustomerInfoSame, false) &&
          validateRadioValue(benefitQualifiedPersonalId, 'tribalId'),
        then: yup
          .string()
          .min(2, INVALID_NUMBER)
          .max(20, INVALID_NUMBER)
          .required(REQUIRED),
      },
    ),
  ack1Received: yup.bool().oneOf([true], REQUIRED),
})

export default schema
