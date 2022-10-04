import InterChannelCards from 'src/components/InternationalChannelCards'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

const mockData = {
  cards: {
    targetItems: [
      {
        title: {
          value: 'Brazilian',
        },
        subTitle: {
          value: 'Be #1 with #1 programming from Brazil.',
        },
        buttonText: {
          value: 'Learn More',
        },
        href: {
          url: '/shop/tv/international-channels/brazilian',
        },
        cardIconSrc: {
          value: '/test/id',
        },
      },
      {
        title: {
          value: 'Cambodian Package',
        },
        subTitle: {
          value: 'Tune into news, drama, sports, festivals, and star power.',
        },
        buttonText: {
          value: 'Learn More',
        },
        href: {
          url: '/shop/tv/international-channels/cambodian',
        },
        cardIconSrc: {
          value:
            'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/shop/tv/international-channels/CambodiaThumb.png?rev=483c1a7a6a3e4774805ccd740a1a5959',
        },
      },
    ],
  },
}

describe('InterChannelCards', () => {
  it('should render correctly ', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    const { getByText, getAllByTestId } = render(<InterChannelCards />)

    expect(getAllByTestId('card')).toHaveLength(2)
    const firstCard = getAllByTestId('card')[0]

    expect(getByText('Brazilian')).toBeInTheDocument()
    expect(
      getByText('Be #1 with #1 programming from Brazil.'),
    ).toBeInTheDocument()
    expect(
      firstCard.querySelector('[data-testid=cardImage]')?.getAttribute('src'),
    ).toBe('/test/id')
    expect(
      firstCard.querySelector('[data-testid=title]')?.getAttribute('href'),
    ).toBe('/shop/tv/international-channels/brazilian')
  })
})
