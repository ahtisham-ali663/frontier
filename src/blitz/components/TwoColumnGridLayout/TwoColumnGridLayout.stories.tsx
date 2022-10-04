import { ComponentStory, ComponentMeta } from '@storybook/react'
import TwoColumnGridLayout from './TwoColumnGridLayout'

export default {
  title: 'Components/TwoColumnGridLayout',
  component: TwoColumnGridLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TwoColumnGridLayout>

const Template: ComponentStory<typeof TwoColumnGridLayout> = (args) => (
  <TwoColumnGridLayout {...args} />
)

export const TwoColumnGridLayoutStories = Template.bind({})
TwoColumnGridLayoutStories.args = {
  leftContent: 'Heading Here',
  rightContent: 'Paragraph here lorem ipsum solor domet..',
}
