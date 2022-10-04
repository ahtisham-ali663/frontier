import AppleTv from 'src/libs/shop/internet/fiber-2-gigabit-internet/AppleTv'
import { render } from '@testing-library/react'
import { useAppData, useChatState } from 'src/hooks'

jest.mock('src/hooks')
const mockData = {
  image: {
    src: '',
  },
  title: {
    value: 'Test title',
  },
  subTitle: {
    value: 'Test subTitle',
  },
  chatNowText: {
    value: 'Test chatNow',
  },
  getOfferBtnText: {
    value: 'Test getOfferBtnText',
  },
  getOfferBtnLink: {
    url: '/test',
  },
  existingCustomerLabel: {
    value: 'test',
  },
}

const chatData = {
  isChatOpen: false,
  setChatState: () => null,
}

describe('AppleTv', () => {
  it('Should not display any AppleTV when there is no image url provided', async () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    ;(useChatState as any).mockImplementation(() => chatData)
    const { queryAllByTestId } = render(<AppleTv />)
    expect(queryAllByTestId('AppleTV').length).toBe(0)
  })
  it('should render correctly', async () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    ;(useChatState as any).mockImplementation(() => chatData)

    const { getByText } = render(<AppleTv />)

    expect(getByText(mockData.title.value)).toBeInTheDocument()
    expect(getByText(mockData.subTitle?.value)).toBeInTheDocument()
    expect(getByText(mockData.getOfferBtnText?.value)).toBeInTheDocument()
    expect(getByText(mockData.chatNowText?.value)).toBeInTheDocument()
  })
  it('Should not display any Title or SubTitle when there is no Title or SubTitle provided', () => {
    ;(useAppData as any).mockImplementation(() => [])
    const { queryAllByTestId } = render(<AppleTv />)
    expect(queryAllByTestId('subTitle').length).toBe(0)
    expect(queryAllByTestId('title').length).toBe(0)
  })
})
