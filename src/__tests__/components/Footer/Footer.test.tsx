import Footer from 'src/components/Footer'
import { mountWithMock } from 'src/__utils__'

const FooterCopyRights = () => <div>FooterCopyRights</div>
const FooterSocialMediaShare = () => <div>FooterSocialMediaShare</div>

jest.mock('src/components/FooterCopyRights', () => FooterCopyRights)

jest.mock('src/components/FooterSocialMediaShare', () => FooterSocialMediaShare)

describe('Footer', () => {
  it('Should render correctly', () => {
    const mockFooterLinks = {
      footer_links: [
        {
          name: 'Home',
          path: '/',
        },
      ],
    }
    const wrapper = mountWithMock(Footer, {
      common: {
        footer: mockFooterLinks,
      },
    })
    expect(wrapper.html()).toBeTruthy()
  })
})
