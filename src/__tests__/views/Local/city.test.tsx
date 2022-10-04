import City from 'src/views/Local/city'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'src/redux/Store'

// eslint-disable-next-line react/display-name
jest.mock('src/views/Local/components/cityCard', () => () => {
  return <div data-testid="cityCard">City card</div>
})
// eslint-disable-next-line react/display-name
jest.mock('src/views/Local/components/CallToAction', () => () => {
  return <div data-testid="CallToAction">Call To Action</div>
})

describe('City', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <City />
      </Provider>,
    )
    expect(getByTestId('city')).toBeTruthy()
    expect(getByTestId('cityCard')).toBeTruthy()
    expect(getByTestId('CallToAction')).toBeTruthy()
  })
})
