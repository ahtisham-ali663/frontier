import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

export const Accordion = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, .05)',
    borderBottom: '1px solid rgba(0, 0, 0, .05)',
    boxShadow: 'none',
    width: '100%',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

export const AccordionSummary = withStyles({
  root: {
    borderBottom: 'none',
    padding: '0 40px',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(0, 0, 0, .05)',
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

export const SupportAccordion = withStyles({
  root: {
    marginTop: 15,
    boxShadow: '2px 2px 10px 0 rgb(50 50 50 / 30%)',
    width: '100%',
    '&:not(:last-child)': {
      borderBottom: 0,
      marginTop: '15px!important',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: `15px 0 15px`,
      '&:first-child': {
        marginTop: 15,
      },
    },
  },
})(MuiAccordion)

export const SupportAccordionSummary = withStyles({
  root: {
    borderBottom: 'none',
    padding: 0,
    minHeight: 0,
    '&$expanded': {
      minHeight: 0,
      borderBottom: '1px solid #ddd',
    },
  },
  expandIcon: {
    position: 'absolute',
    right: 30,
    margin: 0,
    padding: 0,
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordionSummary)

export const AccordionDetails = withStyles(() => ({
  root: {
    padding: '0 40px',
  },
}))(MuiAccordionDetails)
