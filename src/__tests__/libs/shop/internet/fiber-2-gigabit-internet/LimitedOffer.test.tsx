import LimtedOffer from 'src/libs/shop/internet/fiber-2-gigabit-internet/LimitedOffer'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = mockIntersectionObserver
})

const mockData = {
  heading: {
    value: 'Limited time offers - free devices and more',
  },
  subHeading: {
    value: 'First 1,000 customers to order Frontier® Fiber 2 Gig',
  },
  cards: {
    targetItems: [
      {
        cardImage: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/fire-tv.png?rev=3b8d5efe265e42cab18fc431df35b49e',
          alt: 'amazon fire tv',
        },
        cardTitle: {
          value: 'Amazon Fire TV 43" 4K UHD Smart TV',
        },
      },
      {
        cardImage: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/logitech.png?rev=52ac861542894df79fc45c1a810a8365',
          alt: 'webcam',
        },
        cardTitle: {
          value: 'Logitech Webcam',
        },
      },
    ],
  },
  buttonText: {
    value: 'Get Hooked Up',
  },
  buttonHref: {
    url: '/order-online',
  },
}

describe('Limited Offer', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    const { getByTestId, getAllByTestId } = render(<LimtedOffer />)
    const firstCard = getAllByTestId('card')[0]
    expect(getByTestId('heading')).toHaveTextContent(
      'Limited time offers - free devices and more',
    )
    expect(getByTestId('subHeading')).toHaveTextContent(
      'First 1,000 customers to order Frontier® Fiber 2 Gig',
    )
    expect(getByTestId('link')).toHaveTextContent('Get Hooked Up')
    expect(
      firstCard.querySelector('[data-testid=cardImage]')?.getAttribute('src'),
    ).toBe(
      'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/fire-tv.png?rev=3b8d5efe265e42cab18fc431df35b49e',
    )
    expect(firstCard.querySelector('[data-testid=cardTitle]')?.innerHTML).toBe(
      'Amazon Fire TV 43" 4K UHD Smart TV',
    )
  })
})
