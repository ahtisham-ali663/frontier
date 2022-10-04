import FilterCities from 'src/libs/local/components/FilterCities'
import { render } from '@testing-library/react'

jest.mock('src/hooks')

const dataArr = [
  {
    title: {
      value: 'string',
    },
    description: {
      value: 'string',
    },
    statesList: {
      name: {
        value: 'string',
      },
      code: {
        value: 'string',
      },
      cityList: {
        char: 'string',
        list: {
          char: 'string',
          list: {
            name: {
              value: 'string',
            },
            url: {
              value: 'string',
            },
            link: {
              value: false,
            },
          },
        },
      },
    },
  },
]
describe('FilterCities', () => {
  it('should render correctly', () => {
    // ;(useAppData as any).mockImplementation(() => ({
    //   dataArr,
    // }))
    const { getByTestId } = render(<FilterCities data={dataArr} />)
    const citynameOp = getByTestId('citiesContainer')
    expect(citynameOp).toBeTruthy()
  })
})
