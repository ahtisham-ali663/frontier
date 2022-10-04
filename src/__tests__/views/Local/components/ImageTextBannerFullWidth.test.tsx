import ImageTextBannerFullWidth from 'src/views/Local/components/ImageTextBannerFullWidth'
import { render } from '@testing-library/react'

describe('The full width image and text should render correctly', () => {
  it('should render title, description, image', () => {
    const { getAllByTestId } = render(<ImageTextBannerFullWidth />)
    expect(getAllByTestId('title')).toBeTruthy()
    expect(getAllByTestId('description')).toBeTruthy()
    expect(getAllByTestId('sectionImage')).toBeTruthy()
  })
})
