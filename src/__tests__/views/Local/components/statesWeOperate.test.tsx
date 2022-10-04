import StatesWeOperate from 'src/views/Local/components/statesWeOperate'
import { render } from '@testing-library/react'
import { useAppData } from 'src/hooks'

jest.mock('src/hooks')

describe('StatesWeOperate', () => {
  it('should render correctly', () => {
    ;(useAppData as any).mockImplementation(() => ({
      title: { value: 'States We Operate In' },
      imageSrc: {
        src: 'https://frontier.com/helpcenter/~/media/City/images/mapImage.ashx?la=en&hash=41F104140ED076805D1A3F834CE62CAA327E4708',
      },
      highlightColor: { value: 'rgb(255, 0, 55)' },
      highlightDescription: { value: 'States with Frontier service' },
      states: {
        value: `<ul>
          <li>Alabama</li>
          <li>Arizona</li>
          <li><a href="https://frontier.com/local/california">California</a></li>
        </ul>`,
      },
    }))
    const { getByTestId } = render(<StatesWeOperate />)
    const statesWeOp = getByTestId('statesWeOperate')
    expect(statesWeOp).toBeTruthy()
    expect(statesWeOp.querySelectorAll('li').length).toBe(3)
    expect(getByTestId('highlightIndicator').style.background).toBe(
      'rgb(255, 0, 55)',
    )
  })
})
