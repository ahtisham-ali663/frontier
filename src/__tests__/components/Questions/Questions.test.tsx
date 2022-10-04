import Questions from 'src/views/shop/phone/components/Questions'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

const getFAQData = (index: number) => {
  return {
    title: {
      value: `${index} title`,
    },
    content: {
      value: `${index} description`,
    },
  }
}

describe('Questions', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      heading: {
        value: 'heading',
      },
      title: {
        value: '<p>title text</p>',
      },
      listItems: {
        list: [getFAQData(1), getFAQData(2), getFAQData(3)],
      },
    }))
    const { getAllByTestId, getByTestId } = render(<Questions />)
    expect(getAllByTestId('que-accordion').length).toBe(3)
    expect(getByTestId('heading')).toHaveTextContent('heading')
    expect(getByTestId('title')).toHaveTextContent('title text')

    const firstFAQ = getAllByTestId('que-accordion')[0]
    expect(firstFAQ.querySelector('[data-testid=que-title]')?.innerHTML).toBe(
      '1 title',
    )
    expect(firstFAQ.querySelector('[data-testid=description]')?.innerHTML).toBe(
      '1 description',
    )
  })
})
