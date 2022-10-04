import { StreamingOptions } from 'src/libs/shop/tv'
import { render, screen } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

describe('StreamingOptions', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      listItems: {
        list: [
          {
            title: {
              value: 'TITLE_ITEM',
            },
          },
        ],
      },
      header: {
        value: 'HEADER',
      },
      title: {
        value: 'TITLE_COMP',
      },
      description: {
        value: 'DESCRIPTION',
      },
      sectionImage: {
        src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/shop/frontier-secure/tech-support.png?rev=2cf26a00577e41b58c3ad7132d661fee',
        alt: 'ALT_IMAGE',
      },
      helpMeChooseLink: { url: '/' },
      helpMeChooseText: { value: 'CTA_TEXT' },
    }))
    const { getByText } = render(<StreamingOptions />)
    expect(getByText('HEADER')).toBeInTheDocument()
    expect(getByText('TITLE_COMP')).toBeInTheDocument()
    expect(getByText('DESCRIPTION')).toBeInTheDocument()
    expect(getByText('TITLE_ITEM')).toBeInTheDocument()
    expect(getByText('CTA_TEXT')).toBeInTheDocument()

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute(
      'src',
      'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/shop/frontier-secure/tech-support.png?rev=2cf26a00577e41b58c3ad7132d661fee',
    )
    expect(img).toHaveAttribute('alt', 'ALT_IMAGE')
  })
})
