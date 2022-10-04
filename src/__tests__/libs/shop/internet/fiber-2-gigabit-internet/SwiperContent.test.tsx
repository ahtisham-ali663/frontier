import { SwiperContent } from 'src/libs/shop/internet/fiber-2-gigabit-internet'
import { fireEvent, render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

describe('SwiperContent', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      list: {
        targetItems: [
          {
            title: {
              value: 'FIRST',
            },
            subTitle: {
              value: 'FIRST SUBTITLE',
            },
          },
          {
            title: {
              value: 'SECOND',
            },
            subTitle: {
              value: 'SECOND SUBTITLE',
            },
          },
          {
            title: {
              value: 'THIRD',
            },
            subTitle: {
              value: 'THIRD SUBTITLE',
            },
          },
        ],
      },
    }))
    const { getByText, getByTestId, getAllByTestId } = render(<SwiperContent />)
    expect(getByText('FIRST')).toBeInTheDocument()
    expect(getByText('SECOND')).toBeInTheDocument()
    expect(getByText('THIRD')).toBeInTheDocument()
    const lastTab = getByTestId('Swiper-tabs-2')
    fireEvent.click(lastTab)
    expect(getAllByTestId('subTitle-2')[0].innerHTML).toContain(
      'THIRD SUBTITLE',
    )
  })
})
