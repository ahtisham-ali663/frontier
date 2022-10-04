import FaqList from 'src/libs/local/components/FaqList'
import { render } from '@testing-library/react'

describe('FaqList', () => {
  it('should render correctly', () => {
    const MOCK_DATA = {
      faqItems: {
        faqs: [
          {
            title: {
              value: 'Is Frontier Internet available in Bristol, Connecticut?',
            },
            description: {
              value:
                '<div>\n    <p>From Wi-Fi hot spots to fiber-optic internet, Frontier services are available throughout Connecticut. To see which of our services are offered at your location, enter your home address into our <a href="https://frontier.com/order-online" title="Check availability" data-di-id="di-id-fdec086e-ad27bc9d">check availability page</a> to see our coverage map. View plans specific to your area, plus pricing and any current special offers.</p>\n    <p>Frontier Internet may also be available if you live near Bristol. Residents of Farmington and Wolcott should also check their locations to view plans.</p>\n    </div>',
            },
          },
          {
            title: {
              value:
                'Is fiber-optic internet available in Bristol, Connecticut?',
            },
            description: {
              value:
                '<div>\n    <p>Fiber-optic internet is the fastest internet technology available today, with broadband speeds that greatly outperform DSL internet, cable internet and satellite internet. And unlike other internet service providers, Frontier Fiber Internet plans can include symmetrical download and upload speeds.</p>\n    <p>Check <a href="https://frontier.com/order-online" title="Check availability" data-di-id="di-id-c801be3d-ad27bc9d">fiber internet availability</a> at your Bristol home today to see if you’re able to connect to the newest internet with the fastest speeds and most reliable network.\n    </p>\n    </div>',
            },
          },
        ],
      },
    }
    const { getAllByTestId } = render(<FaqList data={MOCK_DATA} />)
    expect(getAllByTestId('test-description').length).toBe(2)
    expect(getAllByTestId('test-title')[0]).toHaveTextContent(
      'Is Frontier Internet available in Bristol, Connecticut?',
    )
  })
})
