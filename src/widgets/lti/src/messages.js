import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  ltiPanel: {
    id: 'lti.container',
    defaultMessage: 'LTI Tools panel',
    description: 'LTI Tools panel container label for accessibility',
  },
  openLtiTrigger: {
    id: 'lti.open.button',
    defaultMessage: 'Show LTI external tools',
    description: 'Button to open the LTI tools panel',
  },
  ltiTitle: {
    id: 'lti.title',
    defaultMessage: 'External Tools',
    description: 'Title text displayed for the LTI tools panel',
  },
  ltiSubtitle: {
    id: 'lti.subtitle',
    defaultMessage: 'Learning Tools Interoperability',
    description: 'Subtitle displayed in the LTI tools panel header',
  },
  ltiDescription: {
    id: 'lti.description',
    defaultMessage: 'Access integrated third-party learning tools for this course, all seamlessly connected via the LTI standard.',
    description: 'Description shown at the top of the LTI panel',
  },
  noToolsMessage: {
    id: 'lti.no.tools',
    defaultMessage: 'No external tools are available for this unit.',
    description: 'Text displayed when no LTI tools are configured',
  },
  launchTool: {
    id: 'lti.launch.tool',
    defaultMessage: 'Launch',
    description: 'Button label to launch an LTI tool',
  },
  toolStatusAvailable: {
    id: 'lti.tool.status.available',
    defaultMessage: 'Available',
    description: 'Status badge text for available tools',
  },
  toolStatusActive: {
    id: 'lti.tool.status.active',
    defaultMessage: 'Active',
    description: 'Status badge text for active/in-progress tools',
  },
  toolStatusCompleted: {
    id: 'lti.tool.status.completed',
    defaultMessage: 'Completed',
    description: 'Status badge text for completed tools',
  },
  responsiveClosePanel: {
    id: 'lti.responsive.close.button',
    defaultMessage: 'Back to course',
    description: 'Responsive button to go back to course and close the LTI panel',
  },
  connectedBadge: {
    id: 'lti.connected.badge',
    defaultMessage: 'LTI 1.3',
    description: 'Badge showing the LTI protocol version',
  },
  poweredBy: {
    id: 'lti.powered.by',
    defaultMessage: 'Powered by LTI Advantage',
    description: 'Footer text in the LTI panel',
  },
});

export default messages;
