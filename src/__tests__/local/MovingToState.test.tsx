import MovingToState from 'src/libs/local/components/MovingToState'
import { render, screen } from '@testing-library/react'
const movingToStateData = {
  heading: {
    value: 'Moving to California',
  },
  subHeading: {
    value:
      'Are you considering moving to California? Whether you’re a new or existing customer, Frontier makes setting up your home internet a little easier. Just check availability to see what services are available in your area and order your preferred plan. You can also call or chat with us to schedule installation and activation.',
  },
  mobileBackgroundImage: {
    src: 'move_to_staet.png',
    alt: 'Move to TBD',
  },
  tabletBackgroundImage: {
    src: 'move_to_staet.png',
    alt: 'Move to TBD',
  },
  desktopBackgroundImage: {
    src: 'move_to_staet.png',
    alt: 'Move to TBD',
  },
}
describe('Competition', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MovingToState data={movingToStateData} />)
    expect(getByText(movingToStateData.heading.value)).toBeInTheDocument()
    expect(getByText(movingToStateData.subHeading.value)).toBeInTheDocument()

    const desktopImage = screen.getByRole('img')
    expect(desktopImage).toHaveAttribute(
      'src',
      movingToStateData.desktopBackgroundImage.src,
    )
    expect(desktopImage).toHaveAttribute(
      'alt',
      movingToStateData.desktopBackgroundImage.alt,
    )

    const tabletImage = screen.getByRole('img')
    expect(tabletImage).toHaveAttribute(
      'src',
      movingToStateData.tabletBackgroundImage.src,
    )
    expect(tabletImage).toHaveAttribute(
      'alt',
      movingToStateData.tabletBackgroundImage.alt,
    )

    const mobileImage = screen.getByRole('img')
    expect(mobileImage).toHaveAttribute(
      'src',
      movingToStateData.mobileBackgroundImage.src,
    )
    expect(mobileImage).toHaveAttribute(
      'alt',
      movingToStateData.mobileBackgroundImage.alt,
    )
  })
})
