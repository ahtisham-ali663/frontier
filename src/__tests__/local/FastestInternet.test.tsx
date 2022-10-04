import FastestInternet from 'src/libs/local/components/FastestInternet'
import { render } from '@testing-library/react'

describe('fastest-internet', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<FastestInternet />)
    const fastestInternetOp = getByTestId('fastest-internet')
    expect(fastestInternetOp).toBeTruthy()
  })
})
