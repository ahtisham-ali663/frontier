import { RichText } from 'src/blitz'
import { render } from '@testing-library/react'
const mockData = {
  image: {
    src: 'https://dummyimage.com/104x48.jpg',
    alt: 'test image',
  },
  content: {
    value: 'rich text content',
  },
}
describe('RichText', () => {
  it('should render correctly', () => {
    const { getByText } = render(<RichText data={mockData} />)
    expect(getByText('rich text content')).toBeInTheDocument()
  })
})
