import CheckAvailability from 'src/libs/local/components/CheckAvailability'
import { render } from '@testing-library/react'

const domain = window?.location?.origin || ''
const checkAvailabilityData = {
  text: 'Check Availability',
  heading: `What's available with Frontier?`,
  buttonURL: `${domain}/order-online`,
}

describe('Competition', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <CheckAvailability data={checkAvailabilityData} />,
    )
    expect(getByText(checkAvailabilityData.text)).toBeInTheDocument()
    expect(getByText(checkAvailabilityData.heading)).toBeInTheDocument()
    expect(getByText(checkAvailabilityData.text).closest('a')).toHaveAttribute(
      'href',
      checkAvailabilityData.buttonURL,
    )
  })
})
