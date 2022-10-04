import { storiesOf } from '@storybook/react'
import * as Icons from './react-icons'

const iconsList = Object.keys(Icons)

for (const icon of iconsList) {
  storiesOf('React Icons', module).add(icon, () => {
    //@ts-ignore
    const Component: any = Icons[icon]
    return (
      <div style={{ backgroundColor: '#F4F4F4', padding: 20 }}>
        <Component />
      </div>
    )
  })
}
