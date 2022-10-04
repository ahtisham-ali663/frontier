import { ComponentStory, ComponentMeta } from '@storybook/react'
import Hero from './Hero'

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const HeroStories = Template.bind({})
HeroStories.args = {
  title1: 'Introducing ',
  title2: 'Fiber 2 Gig Internet',
  subHeader: 'For your devices, data and identity',
  backgroundImage: 'https://via.placeholder.com/1732x860/141928',
  mobileBackgroundImage: 'https://via.placeholder.com/1732x860/141928',
  primaryButton: {
    text: 'SIGN UP NOW',
    type: 'link',
    href: 'http://frontier.com',
    variant: 'primary',
  },
  secondaryButton: {
    text: 'LEARN MORE',
    type: 'link',
    href: 'http://frontier.com',
    variant: 'secondary',
  },
  legalText: 'Max speeds are wired. Wi-Fi, actual & average speeds vary.',
}
