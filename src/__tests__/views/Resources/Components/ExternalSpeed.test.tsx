import ExprienceSpeedTextSection from 'src/views/Local/components/ExprienceSpeedTextSection'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

describe('ExprienceSpeedTextSection', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      content: {
        value: `<p>Test</p>`,
      },
    }))
    const { getByText } = render(<ExprienceSpeedTextSection />)
    expect(getByText('Test')).toBeInTheDocument()
  })
})
