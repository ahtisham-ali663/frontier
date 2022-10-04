import { FiberFuture } from 'src/libs/shop/internet/fiber-2-gigabit-internet'
import { render } from '@testing-library/react'
import { useAppData, useIntersection } from 'src/hooks'

jest.mock('src/hooks')
const wifiDetails = {
  list: {
    cards: [
      {
        image: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/exercise-bike.jpg?rev=cda3e5872500406a960308f322f7a00f',
          alt: 'woman on couch browsing with fiber internet',
        },
        title: {
          value: 'Our most advanced Wi-Fi experience',
        },
        name: 'Our most advanced Wi-Fi experience',
        description: {
          value:
            'An Ultrafast Wi-Fi 6E System is included for a seamless total-home Wi-Fi experience. Installed by professionals for no additional charge, we’ll make sure every space of your home is covered with our Wi-Fi guarantee.',
        },
        direction: {
          item: {
            value: {
              value: 'row',
            },
          },
        },
      },
      {
        image: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/gaming.jpg?rev=d1fcaf636d5b40dca0776759dd0692aa',
          alt: 'man with VR headset',
        },
        title: {
          value: 'Fiber is the future',
        },
        name: 'Fiber is the future',
        description: {
          value:
            'Experience fast upload speeds with our 100% fiber-optic network. Plus, get 99.99% network reliability to work from home, stream or game like a pro.',
        },
        direction: {
          item: {
            value: {
              value: 'row-reverse',
            },
          },
        },
      },
    ],
  },
}
describe('Competition', () => {
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
  it('should render correctly', async () => {
    ;(useAppData as any).mockImplementation(() => ({
      list: {
        cards: [
          {
            image: {
              src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/exercise-bike.jpg?rev=cda3e5872500406a960308f322f7a00f',
              alt: 'woman on couch browsing with fiber internet',
            },
            title: {
              value: 'Our most advanced Wi-Fi experience',
            },
            name: 'Our most advanced Wi-Fi experience',
            description: {
              value:
                'An Ultrafast Wi-Fi 6E System is included for a seamless total-home Wi-Fi experience. Installed by professionals for no additional charge, we’ll make sure every space of your home is covered with our Wi-Fi guarantee.',
            },
            direction: {
              item: {
                value: {
                  value: 'row',
                },
              },
            },
          },
          {
            image: {
              src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/gaming.jpg?rev=d1fcaf636d5b40dca0776759dd0692aa',
              alt: 'man with VR headset',
            },
            title: {
              value: 'Fiber is the future',
            },
            name: 'Fiber is the future',
            description: {
              value:
                'Experience fast upload speeds with our 100% fiber-optic network. Plus, get 99.99% network reliability to work from home, stream or game like a pro.',
            },
            direction: {
              item: {
                value: {
                  value: 'row-reverse',
                },
              },
            },
          },
        ],
      },
    }))
    ;(useIntersection as any).mockImplementation(() => false)
    const { getByText } = render(<FiberFuture />)

    expect(getByText(wifiDetails.list.cards[1].title.value)).toBeInTheDocument()
    expect(
      getByText(wifiDetails.list.cards[0].description.value),
    ).toBeInTheDocument()
    expect(
      getByText(wifiDetails.list.cards[1].description.value),
    ).toBeInTheDocument()
  })
})
