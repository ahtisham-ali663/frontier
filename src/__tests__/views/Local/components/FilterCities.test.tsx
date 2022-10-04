import FilterCities from 'src/views/Local/components/filterCities'
import { render } from '@testing-library/react'

describe('FilterCities', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<FilterCities />)
    expect(getByTestId('stateName').click).toBeTruthy()
  })
})
