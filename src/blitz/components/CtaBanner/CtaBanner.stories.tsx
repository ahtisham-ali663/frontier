import { ComponentStory, ComponentMeta } from '@storybook/react'
import CtaBanner from './CtaBanner'

export default {
  title: 'Components/CtaBanner',
  component: CtaBanner,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CtaBanner>

const Template: ComponentStory<typeof CtaBanner> = (args) => (
  <CtaBanner {...args} />
)

export const CtaBannerStories = Template.bind({})
CtaBannerStories.args = {
  heading: `What's available with Frontier?`,
  buttonURL: 'https://www.frontier.com/order-online',
}
