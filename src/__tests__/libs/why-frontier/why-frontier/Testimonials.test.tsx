import { Testimonials } from 'src/libs/why-frontier/why-frontier'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

describe('Testimonials', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      title: {
        value: 'title',
      },
      list: {
        targetItems: [
          {
            quote: { value: 'SOME TITLE' },
            author: { value: 'SOME INTRO' },
          },
        ],
      },
    }))
    const { getByText } = render(<Testimonials />)
    expect(getByText('title')).toBeInTheDocument()
    expect(getByText('SOME INTRO')).toBeInTheDocument()
  })
})
