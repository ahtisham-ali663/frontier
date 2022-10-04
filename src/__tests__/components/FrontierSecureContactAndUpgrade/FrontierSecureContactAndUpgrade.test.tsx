import FrontierSecureContactAndUpgrade from 'src/components/FrontierSecure/ContactAndUpgrade'
import { render } from '@testing-library/react'
import { useAppData, useChatState } from 'src/hooks'
jest.mock('src/hooks')

const chatData = {
  isChatOpen: false,
  setChatState: () => null,
}

const mockData = {
  sectionTitle: {
    value: 'Contact us to upgrade today.',
  },
  callTitle: {
    value: 'Call',
  },
  callIcon: {
    value:
      'https://frontier.com/~/media/Home/Images/Products/Internet/phone-icon',
  },
  callNumber: {
    value: '1.888.446.7622',
  },
  chatTitle: {
    value: 'Live Chat',
  },
  chatIcon: {
    value: 'https://frontier.com/~/media/Home/Images/Products/Internet/chat',
  },
  chatUrl: {
    value: 'https://frontier.com/~/media/Home/Images/Products/Internet/chat',
  },
}
describe('FrontierSecureContactAndUpgrade', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    ;(useChatState as any).mockImplementation(() => chatData)
    const { getByTestId } = render(<FrontierSecureContactAndUpgrade />)
    expect(getByTestId('sectionTitle')).toHaveTextContent(
      'Contact us to upgrade today.',
    )
    expect(getByTestId('callTitle_Number')).toHaveTextContent('Call')
    expect(getByTestId('callTitle_Number')).toHaveTextContent('1.888.446.7622')
    expect(getByTestId('chatTitle')).toHaveTextContent('Live Chat')
    // expect(getByTestId('chatUrl')).toHaveAttribute(
    //   'href',
    //   'https://frontier.com/~/media/Home/Images/Products/Internet/chat',
    // )
    expect(getByTestId('callUrl')).toHaveTextContent('1.888.446.7622')
    expect(getByTestId('callIcon')).toHaveAttribute(
      'src',
      'https://frontier.com/~/media/Home/Images/Products/Internet/phone-icon',
    )
  })
})
