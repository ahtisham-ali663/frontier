import GigServiceTwoCards from 'src/libs/local/components/GigServiceTwoCards'
import { render } from '@testing-library/react'

describe('GigServiceTwoCards', () => {
  it('should render correctly', () => {
    const MOCK_DATA = {
      type: {
        value: 'gig-service',
      },
      buttonText: {
        value: 'Check Availability',
      },
      buttonHref: {
        url: '',
      },
      gigServiceCards: {
        list: [
          {
            title: {
              value: 'Gig Service <br/> Blazing fast fiber',
            },
            description: {
              value:
                'Our most popular plan. Upload speeds 50x faster than cable.1 ',
            },
            perks: {
              list: [
                {
                  title: {
                    value: '$200 Visa Reward Card2 ',
                  },
                },
                {
                  title: {
                    value: 'eero Pro 6 Wi-Fi system3 ',
                  },
                },
              ],
            },
          },
          {
            title: {
              value: 'Fiber 2 Gig <br/> Our fastest fiber ever',
            },
            description: {
              value:
                'Supercharge your internet with upload speeds 75x faster than cable.1 ',
            },
            perks: {
              list: [
                {
                  title: {
                    value: 'Apple TV 4K & 3 months Apple TV+, on us4',
                  },
                },
                {
                  title: {
                    value: 'Ultrafast Wi-Fi 6E System',
                  },
                },
              ],
            },
          },
        ],
      },
      copperService: {
        title: {
          value: 'Work, learn and live connected',
        },
        perks: {
          list: [
            {
              title: {
                value: 'No data caps or overage charges',
              },
            },
            {
              title: {
                value: '2-year price guarantee',
              },
            },
          ],
        },
      },
    }
    const { getAllByTestId } = render(<GigServiceTwoCards data={MOCK_DATA} />)
    expect(getAllByTestId('cards').length).toBe(2)
    expect(getAllByTestId('perks-0').length).toBe(2)
  })
})
