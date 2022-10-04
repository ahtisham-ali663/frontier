import CityFAQ from 'src/views/Local/components/cityFAQ'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

const getFAQData = (index: number) => {
  return {
    title: {
      value: `${index} title`,
    },
    description: {
      value: 'description',
    },
  }
}

describe('CityFAQ', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      faqItems: {
        faqs: [getFAQData(1), getFAQData(2), getFAQData(3)],
      },
    }))
    const { getAllByTestId } = render(<CityFAQ />)
    expect(getAllByTestId('faq-accordion').length).toBe(3)
    const firstFAQ = getAllByTestId('faq-accordion')[0]
    expect(firstFAQ.querySelector('[data-testid=title]')?.innerHTML).toBe(
      '1 title',
    )
  })
  it('Should not display any faqs where there is no data provided', () => {
    ;(useAppData as any).mockImplementation(() => [])
    const { queryAllByTestId } = render(<CityFAQ />)
    expect(queryAllByTestId('faq-accordion').length).toBe(0)
  })
})
