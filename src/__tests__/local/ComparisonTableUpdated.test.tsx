import ComparisonTableUpdated from 'src/libs/local/components/ComparisonTableUpdated'
import { render } from '@testing-library/react'

describe('comparison table', () => {
  it('should render correctly', () => {
    const MOCK_DATA = {
      title: {
        value: 'Sizing up the competition',
      },
      yesIcon: {
        value:
          'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/shop/tv/check-mark-black.svg?rev=3361ced0fcec470ab7f821ebd997e697',
        alt: 'checkmark',
      },
      legal: {
        value: '',
      },
      buttonText: {
        value: '',
      },
      buttonURL: {
        url: '',
      },
      items: {
        list: [
          {
            logo: {
              src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/logo-frontier.png?rev=78dfde7215fe416d80e38143dcebfa57',
            },
            iconColor: {
              color: {
                field: {
                  value: '#ff0037',
                },
              },
            },
            headerDescription: {
              value: '',
            },
            properties: {
              list: [
                {
                  name: {
                    value: 'Speed',
                  },
                  toolTip: {
                    value: '',
                  },
                  textValue: {
                    value:
                      '<div> <span>2000 </span> Mbps download <br />\n<span>2000</span> Mbps upload</div>',
                  },
                  value: {
                    value: false,
                  },
                  isPrimary: {
                    value: false,
                  },
                },
              ],
            },
          },
        ],
      },
    }

    const { getByTestId } = render(<ComparisonTableUpdated data={MOCK_DATA} />)
    const comparisonTableOp = getByTestId('comparison-table')
    expect(comparisonTableOp).toBeTruthy()
  })
})
