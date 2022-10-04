import CallToAction from 'src/views/Local/components/CallToAction'
import { render } from '@testing-library/react'
describe('CallToAction Component', () => {
  it('checking component banner div', () => {
    const { getAllByTestId } = render(<CallToAction />)
    expect(getAllByTestId('call-to-action').length).toBe(1)
    const callToAction = getAllByTestId('call-to-action')[0]
    expect(callToAction.getElementsByTagName('a')[0].innerHTML).toBe(
      'Check Availability',
    )
  })
})
