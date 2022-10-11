import { ComponentStory, ComponentMeta } from '@storybook/react'

import ToggleButton from './ToggleButton'

export default {
  title: 'Components/Buttons/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>

// const Template = (args) => <ToggleButton {...args} />
const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
)

export const FullToggle = Template.bind({})
FullToggle.args = {
  toggle_type: 'FullToggle',
  size: 'large',
  checked: true,
  isDisabled: false,
}
