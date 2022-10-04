import CustomerService from 'src/libs/local/components/CustomerService'
import { render } from '@testing-library/react'

const customerServiceData = {
  leftContent: { value: `Customer service you can count on` },
  rightContent: {
    value: `The best internet providers know the importance of good customer service, including Frontier. That’s why our customer service reps are available 24/7, 365 to help you navigate any technical issues. Whether you have a question or concern, our team is here for you — day or night`,
  },
}

describe('Competition', () => {
  it('should render correctly', () => {
    const { getByText } = render(<CustomerService data={customerServiceData} />)
    expect(getByText(customerServiceData.leftContent.value)).toBeInTheDocument()
    expect(
      getByText(customerServiceData.rightContent.value),
    ).toBeInTheDocument()
  })
})
