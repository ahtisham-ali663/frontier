import GetFastInternetSection from 'src/views/Local/components/GetFastInternetSection'
import { render, screen } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

describe('GetFastInternetSection', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      title: { value: 'test title' },
      description: { value: 'test description' },
      image: { value: 'imageURL' },
    }))
    const { getByText } = render(<GetFastInternetSection />)
    expect(getByText('test title')).toBeInTheDocument()
    expect(getByText('test description')).toBeInTheDocument()
    const image = screen.getByTestId('sectionImage')
    expect(image).toHaveAttribute('src', 'imageURL')
  })
})
