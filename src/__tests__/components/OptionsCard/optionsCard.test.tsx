import OptionCards from 'src/views/Resources/components/OptionCards'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'
jest.mock('src/hooks')

const mockData = {
  title: {
    value: 'test heading',
  },
  subtitle: {
    value: 'test subheading',
  },
  optionCards: {
    cards: [
      {
        image: {
          src: '/test/id',
        },
        title: {
          value: 'card title',
        },
        types: {
          list: [
            {
              title: {
                value: 'list title',
              },
            },
          ],
        },
        perks: {
          list: [
            {
              title: {
                value: 'perks title',
              },
            },
          ],
        },
        learnMoreLink: {
          url: 'test/learnmorelink',
        },
        learnMoreText: {
          value: 'test learn more text',
        },
        additionInfoText: {
          value: 'test addition Info text',
        },
        additionInfoLink: {
          url: 'test/additionInfoLink',
        },
      },
    ],
  },
}
describe('OptionCards', () => {
  it('should render correctly With Title', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    const { getByTestId } = render(<OptionCards withTitle />)
    expect(getByTestId('heading')).toHaveTextContent('test heading')
  })
})

describe('OptionCards', () => {
  it('should render correctly Without Title', () => {
    ;(useAppData as any).mockImplementation(() => mockData)
    const { getAllByTestId } = render(<OptionCards />)

    expect(getAllByTestId('card')).toHaveLength(1)
    const firstCard = getAllByTestId('card')[0]
    expect(firstCard.querySelector('[data-testid=cardTitle]')?.innerHTML).toBe(
      'card title',
    )
    expect(
      firstCard.querySelector('[data-testid=cardImage]')?.getAttribute('src'),
    ).toBe('/test/id')
    expect(
      firstCard.querySelector('[data-testid=cardImage]')?.getAttribute('src'),
    ).toBe('/test/id')
    expect(
      firstCard.querySelector('[data-testid=cardType]')?.children?.length,
    ).toBe(1)
    expect(
      firstCard
        .querySelector('[data-testid=learnMoreButton]')
        ?.getAttribute('href'),
    ).toBe('test/learnmorelink')
    expect(
      firstCard.querySelector('[data-testid=learnMoreButton]')?.innerHTML,
    ).toBe('test learn more text')
    expect(
      firstCard
        .querySelector('[data-testid=additionalInfoButton]')
        ?.getAttribute('href'),
    ).toBe('test/additionInfoLink')
    expect(
      firstCard.querySelector('[data-testid=additionalInfoButton]')?.innerHTML,
    ).toBe('test addition Info text')
  })
})
