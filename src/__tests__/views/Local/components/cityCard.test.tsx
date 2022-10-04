import CityCard from 'src/views/Local/components/cityCard'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

const getCardData = (index: number) => {
  return {
    title: {
      value: `${index} card`,
    },
    description: {
      value: 'description',
    },
    image: {
      value: 'image',
    },
    linkText: {
      value: 'linkText',
    },
    link: {
      value: 'linkText',
    },
  }
}

describe('City', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      cardList: {
        cards: [getCardData(1), getCardData(2), getCardData(3)],
      },
    }))
    const { getAllByTestId } = render(<CityCard />)
    expect(getAllByTestId('card').length).toBe(3)
    const firstCard = getAllByTestId('card')[0]
    expect(firstCard.querySelector('[data-testid=title]')?.innerHTML).toBe(
      '1 card',
    )
  })
  it('Should not display any cards where there is no data provided', () => {
    ;(useAppData as any).mockImplementation(() => [])
    const { queryAllByTestId } = render(<CityCard />)
    expect(queryAllByTestId('card').length).toBe(0)
  })
})
