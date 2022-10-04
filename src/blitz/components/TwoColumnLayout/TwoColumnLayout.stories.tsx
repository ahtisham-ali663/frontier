import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import TwoColumnLayout, { TwoColumnLayoutProps } from '.'

export default {
  title: 'Components/TwoColumnLayout',
  component: TwoColumnLayout,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<TwoColumnLayoutProps> = (args) => {
  return <TwoColumnLayout {...args} />
}

// Reuse that template for creating different stories

export const Primary = Template.bind({})
Primary.args = {
  content: `<div><p>Hello world</p><p>Hello world</p>
    <p>Hello world</p><p>Hello world</p><p>Hello world</p>
    <p>Hello world</p><p>Hello world</p><p>Hello world</p><div>`,
  image: 'https://www.csimagazine.com/csi/images/frontier2gig.png',
  title: 'LOGO',
}
