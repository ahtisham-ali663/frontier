import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonWithChatLink from './ButtonWithChatLink'

export default {
  title: 'Components/ButtonWithChatLink',
  component: ButtonWithChatLink,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ButtonWithChatLink>

const Template: ComponentStory<typeof ButtonWithChatLink> = (args) => (
  <ButtonWithChatLink {...args} />
)

export const CardAndImageStories = Template.bind({})
CardAndImageStories.args = {
  hoverVariant: 'primary',
  buttonName: 'VIEW INTERNET PLANS',
  buttonLink: 'https://internet.frontier.com/youtubetv/',
  labelLinkText: 'Already a customer?',
  labelName: 'Chat now',
  bgType: 'dark',
  labelNameColor: 'black',
  labelLinkTextColor: 'red',
  labelFontType: 'mediumFont',
  labelStyleType: 'p1',
  labelTagType: 'p',
  buttonTarget: '_self',
  btnClassName: '',
}
