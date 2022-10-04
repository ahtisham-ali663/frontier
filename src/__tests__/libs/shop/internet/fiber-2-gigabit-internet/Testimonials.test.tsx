import { Testimonials } from 'src/libs/shop/internet/fiber-2-gigabit-internet'
import { useAppData } from 'src/hooks'
import { render } from '@testing-library/react'
jest.mock('src/hooks')

describe('Testimonials', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      list: {
        targetItems: [
          {
            testimony: { value: 'test testimony' },
            author: { value: 'test author' },
          },
        ],
      },
    }))
    const { getAllByTestId } = render(<Testimonials />)
    expect(getAllByTestId('testimonyDescription').length).toBe(1)
    const firstTestimony = getAllByTestId('testimony')[0]
    expect(
      firstTestimony.querySelector('[data-testid=testimonyDescription]')
        ?.innerHTML,
    ).toBe('test testimony')
    expect(
      firstTestimony.querySelector('[data-testid=testimonyAuthor]')?.innerHTML,
    ).toBe('test author')
  })

  it('Should not display any Testimonials where there is no data provided', () => {
    ;(useAppData as any).mockImplementation(() => [])
    const { queryAllByTestId } = render(<Testimonials />)
    expect(queryAllByTestId('testimonyDescription').length).toBe(0)
  })
})
