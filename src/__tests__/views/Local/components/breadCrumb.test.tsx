import BreadCrumb from 'src/views/Local/components/breadCrumb'
import { render } from '@testing-library/react'
import { useRouter } from 'next/router'

jest.mock('next/router')

describe('Bread Crumb', () => {
  it('should render correctly for state and city', () => {
    ;(useRouter as any).mockImplementation(() => ({
      query: {
        city: 'TEST CITY',
        state: 'TEST STATE',
      },
    }))
    const { getByTestId } = render(<BreadCrumb />)
    expect(getByTestId('stateName')).toHaveTextContent('TEST STATE')
    expect(getByTestId('cityName')).toHaveTextContent('TEST CITY')
  })
})
