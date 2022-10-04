import GetFrontierCards from 'src/views/Local/components/GetFrontierCards'
import { mountWithMock } from 'src/__utils__'
jest.mock('src/hooks')

const mockData = [
  {
    image: {
      value: `https://frontier.com/~/media/local/CA/Images/InternetIcon.ashx?la=en&hash=014880D7E11F736801C07AF9A27AF7089F88A977`,
    },
    title: {
      value: 'Make Frontier Internet service part of your Connecticut life',
    },
    description: {
      value: `Frontier is a leading Connecticut internet service provider (ISP). Trust Frontier® Internet to 
        provide the fast internet you need with a steady connection, straightforward pricing and no usage limits or data caps.`,
    },
    link: {
      value: `/shop`,
    },
    linkText: {
      value: 'Shop Our Plans',
    },
  },
  {
    image: {
      value: `https://frontier.com/~/media/local/CA/Images/TechIcon.ashx?la=en&hash=E7979A03E0985A516C026544D57271435E3C60F3`,
    },
    title: {
      value: 'Get high-speed internet in your Connecticut home',
    },
    description: {
      value: `Frontier knows about delivering great high-speed internet. Frontier Internet brings broadband 
        technology right to your home, whether you live in Hartford, New Haven, Stamford, in the hills of Litchfield County or
         along our coast from New London to Mystic.`,
    },
    link: {
      value: `/shop/internet/fiber-optic-internet`,
    },
    linkText: {
      value: `See What's Inside`,
    },
  },
]

describe('Banner', () => {
  it('should render correctly with no props', () => {
    const wrapper = mountWithMock(GetFrontierCards)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correctly with props', () => {
    const wrapper = mountWithMock(GetFrontierCards, {
      data: mockData,
    })
    expect(wrapper.html()).toBeTruthy()
  })
})
