import ContactBanner from 'src/views/Local/components/ContactBanner'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

describe('ContactBanner', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      title: { value: 'test title' },
      info: { value: 'test info' },
    }))
    const { getByText } = render(<ContactBanner />)
    expect(getByText('test title')).toBeInTheDocument()
    expect(getByText('test info')).toBeInTheDocument()
  })
})
