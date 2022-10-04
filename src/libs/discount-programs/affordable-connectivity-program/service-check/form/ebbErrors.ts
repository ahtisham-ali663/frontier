const errors = [
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `The address you provided is not associated with a Tribal location. Please check or update your address. Or visit <a href="https://getemergencybroadband.org" target="_blank">ACPbenefit.org</a> to check on your application status.`,
    },
    showFor: ['422_EB003'],
  },
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle:
        'Please make sure the city, state and ZIP code you entered are a direct match with the information on your USAC application.',
    },
    showFor: ['422_EB006'],
  },
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `Please make sure the Address you entered is a direct match with the Address on your USAC application.`,
    },
    showFor: ['422_EB005'],
  },
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `Please make sure the name you entered is a direct match with the name on your USAC application.`,
    },
    showFor: ['422_EB007'],
  },
  {
    errorMessage: 'INVALID_LASTNAME',
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `Please make sure the phone number you entered is a direct match with the phone number on your USAC application.`,
    },
    showFor: ['422_EB008'],
  },
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `Please make sure the Social Security Number you entered is a direct match with the Social Security Number on your USAC application.`,
    },
    showFor: ['422_EB009'],
  },
  {
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `Please make sure the Tribal ID you entered is a direct match with the Tribal ID on your USAC application.`,
    },
    showFor: ['422_EB010'],
  },
  {
    errorMessage: 'INCOMPLETE_BQP_MATCH',
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle:
        'The subscriber name and benefit qualifying person name must be different if you’ve selected <b>No</b> for the question: “Is your application informaton the same as the Frontier customer information above?” Please check your entries and try again.',
    },
    showFor: ['422_EB011'],
  },
  {
    errorMessage: 'INCOMPLETE_BQP_INFORMATION',
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle:
        'The benefit qualifying person information must match what you entered on the USAC application exactly. Please check your entry and try again.',
    },
    showFor: ['422_EB012'],
  },
  {
    errorMessage: 'INVALID_APPLICATION_ID',
    errorDisplayContent: {
      title: `We couldn’t verify your information`,
      subTitle: `Please make sure the information you entered is a direct match with the information on your USAC application and resubmit the form. If you continue to receive this error, your application may not be approved. You'll need to 
      visit <a href="https://getemergencybroadband.org" target="_blank">ACPbenefit.org</a> to check your application status.`,
    },
    showFor: ['422_EB013'],
  },
  {
    errorMessage: 'TRIBAL_BENEFIT_FLAG_NONTRIBAL_NLAD_LOCATION',
    errorDisplayContent: {
      title: `Please check your information`,
      subTitle: `The address you provided is not associated with a Tribal location. Please check or update your address. Or visit <a href="https://getemergencybroadband.org" target="_blank">ACPbenefit.org</a> to check on your application status.`,
    },
    showFor: ['400_EB003'],
  },
]
export type TErrorMessage = {
  title: string
  subTitle: string
  isErrorLandingPage?: boolean
}

export const getACPErrorByCode = (errorCode: string): any => {
  const error = errors?.filter((error: any) =>
    (error?.showFor || []).includes(errorCode),
  )
  return error[0]?.errorDisplayContent
}
