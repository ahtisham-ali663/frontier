import StatesWeOperate from 'src/libs/local/components/StatesWeOperate'
import { render } from '@testing-library/react'

describe('StatesWeOperate', () => {
  it('should render correctly', () => {
    const mockData = {
      title: { value: 'States We Operate In' },
      imageSrc: {
        src: 'https://frontier.com/helpcenter/~/media/City/images/mapImage.ashx?la=en&hash=41F104140ED076805D1A3F834CE62CAA327E4708',
      },
      states: {
        value: `<ul>
          <li>Alabama</li>
          <li>Arizona</li>
          <li><a href="https://frontier.com/local/california">California</a></li>
        </ul>`,
      },
    }
    const { getByTestId } = render(<StatesWeOperate data={mockData} />)
    const statesWeOp = getByTestId('statesWeOperate')
    expect(statesWeOp).toBeTruthy()
    expect(statesWeOp.querySelectorAll('li').length).toBe(3)
  })
})
