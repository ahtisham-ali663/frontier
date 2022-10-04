import Legal from 'src/views/Local/components/legal'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

describe('Legal ', () => {
  it('Content should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      description: { value: 'Test Legal Description' },
    }))
    const { getByText } = render(<Legal />)
    expect(getByText('Test Legal Description')).toBeInTheDocument()
  })
})
