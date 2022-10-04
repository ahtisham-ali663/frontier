import Benefits from 'src/views/Local/components/Benefits'
import { render } from '@testing-library/react'

describe('Benefits', () => {
  it('should render correctly', () => {
    const { getAllByTestId } = render(<Benefits />)
    expect(getAllByTestId('benefits-title').length).toBe(1)
    expect(getAllByTestId('frontier-benefits').length).toBe(3)
  })
})
