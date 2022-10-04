import StickyHeader from 'src/components/StickyHeader'
import { mountWithMock } from 'src/__utils__'

describe('Sticky Header', () => {
  it('Should render correctly', () => {
    const mockStickyHeaderLinks = {
      stickyHeader_links: [
        {
          name: 'Residential',
          path: '/residential',
        },
      ],
    }
    const wrapper = mountWithMock(StickyHeader, {
      common: {
        stickyHeader: mockStickyHeaderLinks,
      },
    })
    expect(wrapper.html()).toBeTruthy()
  })

  // it('Should render all links correctly', () => {
  //   const mockStickyHeaderLinks = {
  //     stickyHeader_links: [
  //       {
  //         name: 'Residential',
  //         path: '/residential',
  //       },
  //       {
  //         name: 'Small Business',
  //         path: '/small-business',
  //       },
  //     ],
  //   }
  //   const wrapper = mountWithMock(StickyHeader, {
  //     common: {
  //       stickyHeader: mockStickyHeaderLinks,
  //     },
  //   })
  //   expect(wrapper).toBe(2)
  // })
})
