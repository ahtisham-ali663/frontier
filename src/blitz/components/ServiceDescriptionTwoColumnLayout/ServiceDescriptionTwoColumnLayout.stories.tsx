import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import ServiceDescriptionTwoColumnLayout from './ServiceDescriptionTwoColumnLayout'
import { ServiceDescriptionTwoColumnLayoutProps } from './types'

export default {
  title: 'Components/ServiceDescriptionTwoColumnLayout',
  component: ServiceDescriptionTwoColumnLayout,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ServiceDescriptionTwoColumnLayoutProps> = (args) => {
  return <ServiceDescriptionTwoColumnLayout {...args} />
}

// Reuse that template for creating different stories

export const Primary = Template.bind({})
Primary.args = {
  image: {
    src: '/images/ookla-verified.png',
  },
  title: {
    value: 'Fastest internet in Los Angeles',
  },
  subtitle: {
    value: `Based on an analysis by Ookla® of Speedtest
  Intelligence® for aggregated median download and upload speeds in Los Angeles County,
  California, Q1 2022.`,
  },
}
