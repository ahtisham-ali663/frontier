import FrontierSecureFeatureSection from 'src/components/FrontierSecure/FeatureSection'
import { render } from '@testing-library/react'
import { useAppData, useChatState } from 'src/hooks'
jest.mock('src/hooks')

const chatData = {
  isChatOpen: false,
  setChatState: () => null,
}

const mockData = {
  title: {
    value: 'Frontier Multi-Device Security',
  },
  subtitle: {
    value: 'Internet security anywhere, anytime, any device',
  },
  startingAtCapion: {
    value: 'Starting at',
  },
  price: {
    value: '6',
  },
  decimalValue: {
    value: '00',
  },
  period: {
    value: '/ mo',
  },
  note: {
    value: 'Also included in HomeShield Bundle',
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
  sectionImage: {
    value:
      'https://frontier.com/~/media/Home/Images/Products/Frontier%20Secure/Multi-Device-Security---Red.ashx',
  },
}

describe('FrontierSecureFeatureSection', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    ;(useChatState as any).mockImplementation(() => chatData)
    const { getByTestId } = render(<FrontierSecureFeatureSection />)
    expect(getByTestId('title')).toHaveTextContent(
      'Frontier Multi-Device Security',
    )
    expect(getByTestId('subtitle')).toHaveTextContent(
      'Internet security anywhere, anytime, any device',
    )
    expect(getByTestId('caption')).toHaveTextContent('Starting at')
    expect(getByTestId('price')).toHaveTextContent('6')
    expect(getByTestId('decimal')).toHaveTextContent('00')
    expect(getByTestId('period')).toHaveTextContent('/ mo')
    expect(getByTestId('note')).toHaveTextContent(
      'Also included in HomeShield Bundle',
    )
    expect(getByTestId('callIcon')).toHaveAttribute(
      'src',
      'https://frontier.com/~/media/Home/Images/Products/Internet/phone-icon',
    )
    // we can't test callTitle since both callIcon and callTitle are under same testId.
    expect(getByTestId('callNumber_Title')).toHaveTextContent('Call')
    expect(getByTestId('callNumber_Title')).toHaveTextContent('1.888.446.7622')
    expect(getByTestId('chatIcon')).toHaveAttribute(
      'src',
      'https://frontier.com/~/media/Home/Images/Products/Internet/chat',
    )
    expect(getByTestId('chatTitle')).toHaveTextContent('Live Chat')
    expect(getByTestId('sectionImage')).toHaveAttribute(
      'src',
      'https://frontier.com/~/media/Home/Images/Products/Frontier%20Secure/Multi-Device-Security---Red.ashx',
    )
  })
})
