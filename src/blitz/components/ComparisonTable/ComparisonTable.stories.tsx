import { ComponentStory, ComponentMeta } from '@storybook/react'
import ComparisonTable from './ComparisonTable'

export default {
  title: 'Components/ComparisonTable',
  component: ComparisonTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ComparisonTable>

const Template: ComponentStory<typeof ComparisonTable> = (args) => (
  <ComparisonTable {...args} />
)

const COLUM_DATA = {
  logo: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/logo-frontier.png?rev=78dfde7215fe416d80e38143dcebfa57',
  headerDescription: 'Learn More',
  headerDescriptionLink: 'https://www.google.com',
  properties: [
    {
      name: 'Speed',
      textValue:
        '<div> <span>2000 </span> Mbps download <br />\n<span>2000</span> Mbps upload</div>',
      value: false,
    },
    {
      name: 'Lowest latency',
      textValue: '',
      value: true,
    },
  ],
}

export const ComparisonTableStories = Template.bind({})
ComparisonTableStories.args = {
  addBorderToHeader: false,
  items: [COLUM_DATA],
}

export const ComparisonTableTwoColumns = Template.bind({})
ComparisonTableTwoColumns.args = {
  addBorderToHeader: false,
  items: [COLUM_DATA, COLUM_DATA],
}

export const ComparisonTableThreeColumns = Template.bind({})
ComparisonTableThreeColumns.args = {
  addBorderToHeader: false,
  items: [COLUM_DATA, COLUM_DATA, COLUM_DATA],
}

export const ComparisonTableWithHeaderAsName = Template.bind({})
const rowData = {
  ...COLUM_DATA,
  logo: '',
  headerDescription: '',
  header: 'Gig Service',
}

ComparisonTableWithHeaderAsName.args = {
  addBorderToHeader: true,
  items: [rowData, rowData],
}

export const ComparisonTableFourColumns = Template.bind({})
ComparisonTableFourColumns.args = {
  addBorderToHeader: false,
  items: [COLUM_DATA, COLUM_DATA, COLUM_DATA, COLUM_DATA],
}

export const ComparisonTableFiveColumns = Template.bind({})
ComparisonTableFiveColumns.args = {
  addBorderToHeader: false,
  items: [COLUM_DATA, COLUM_DATA, COLUM_DATA, COLUM_DATA, COLUM_DATA],
}
