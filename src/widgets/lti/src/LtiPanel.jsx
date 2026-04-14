import React, { useContext } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Icon } from '@openedx/paragon';
import {
  IntegrationInstructions,
  Launch,
  CheckCircle,
  Schedule,
  PlayCircleOutline,
  Science,
  Assignment,
  VideoCall,
} from '@openedx/paragon/icons';
import classNames from 'classnames';

import SidebarContext from '@src/courseware/course/sidebar/SidebarContext';
import SidebarBase from '@src/courseware/course/sidebar/common/SidebarBase';

import { ID } from './LtiTrigger';
import messages from './messages';
import './LtiPanel.scss';

/**
 * Demo LTI tool card data.
 * In production this would be fetched from the LTI configuration API.
 */
const DEMO_TOOLS = [
  {
    id: 'quiz-tool',
    name: 'Interactive Quiz',
    description: 'Adaptive quizzes with instant feedback and detailed analytics.',
    icon: Assignment,
    status: 'active',
    color: '#3b82f6',
    bgColor: '#eff6ff',
  },
  {
    id: 'video-tool',
    name: 'Video Annotations',
    description: 'Annotate and comment on course videos in real-time.',
    icon: VideoCall,
    status: 'available',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
  },
  {
    id: 'simulation-tool',
    name: 'Lab Simulation',
    description: 'Virtual lab experiments with physics and chemistry simulations.',
    icon: Science,
    status: 'available',
    color: '#06b6d4',
    bgColor: '#ecfeff',
  },
  {
    id: 'media-player',
    name: 'Enhanced Media',
    description: 'Rich media playback with transcripts, speed controls, and bookmarks.',
    icon: PlayCircleOutline,
    status: 'completed',
    color: '#10b981',
    bgColor: '#ecfdf5',
  },
];

const STATUS_CONFIG = {
  active: { label: 'Active', className: 'lti-tool-status--active', icon: Schedule },
  available: { label: 'Available', className: 'lti-tool-status--available', icon: null },
  completed: { label: 'Completed', className: 'lti-tool-status--completed', icon: CheckCircle },
};

const ToolCard = ({ tool }) => {
  const intl = useIntl();
  const statusConfig = STATUS_CONFIG[tool.status] || STATUS_CONFIG.available;

  return (
    <div className="lti-tool-card">
      {/* Icon area */}
      <div
        className="lti-tool-card__icon-wrap"
        style={{ backgroundColor: tool.bgColor }}
      >
        <Icon
          src={tool.icon}
          className="lti-tool-card__icon"
          style={{ color: tool.color }}
        />
      </div>

      {/* Content */}
      <div className="lti-tool-card__content">
        <div className="lti-tool-card__header">
          <span className="lti-tool-card__name">{tool.name}</span>
          <span className={classNames('lti-tool-status', statusConfig.className)}>
            {statusConfig.icon && (
              <Icon src={statusConfig.icon} className="lti-tool-status__icon" />
            )}
            {statusConfig.label}
          </span>
        </div>
        <p className="lti-tool-card__description">{tool.description}</p>
        <button
          type="button"
          className="lti-tool-card__launch-btn"
          aria-label={`${intl.formatMessage(messages.launchTool)} ${tool.name}`}
          style={{ '--lti-tool-color': tool.color }}
        >
          <Icon src={Launch} className="lti-tool-card__launch-icon" />
          {intl.formatMessage(messages.launchTool)}
        </button>
      </div>
    </div>
  );
};

const LtiPanel = () => {
  const intl = useIntl();
  const { shouldDisplayFullScreen } = useContext(SidebarContext);

  return (
    <SidebarBase
      title={intl.formatMessage(messages.ltiTitle)}
      ariaLabel={intl.formatMessage(messages.ltiPanel)}
      sidebarId={ID}
      width="45rem"
      className={classNames('lti-panel ml-4', { 'lti-panel--fullscreen': shouldDisplayFullScreen })}
    >
      <div className="lti-panel__body">

        {/* Hero header */}
        <div className="lti-panel__hero">
          <div className="lti-panel__hero-icon-ring">
            <Icon src={IntegrationInstructions} className="lti-panel__hero-icon" />
          </div>
          <div className="lti-panel__hero-text">
            <h2 className="lti-panel__hero-title">
              {intl.formatMessage(messages.ltiTitle)}
            </h2>
            <p className="lti-panel__hero-subtitle">
              {intl.formatMessage(messages.ltiSubtitle)}
            </p>
          </div>
          <span className="lti-panel__version-badge">
            {intl.formatMessage(messages.connectedBadge)}
          </span>
        </div>

        {/* Description */}
        <p className="lti-panel__description">
          {intl.formatMessage(messages.ltiDescription)}
        </p>

        {/* Connection status bar */}
        <div className="lti-panel__status-bar">
          <span className="lti-panel__status-dot" />
          <span className="lti-panel__status-label">Secure connection established</span>
        </div>

        {/* Divider */}
        <div className="lti-panel__divider" />

        {/* Tools list */}
        <div className="lti-panel__tools">
          <p className="lti-panel__tools-heading">Available Tools</p>
          {DEMO_TOOLS.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Footer */}
        <div className="lti-panel__footer">
          <Icon src={IntegrationInstructions} className="lti-panel__footer-icon" />
          <span>{intl.formatMessage(messages.poweredBy)}</span>
        </div>

      </div>
    </SidebarBase>
  );
};

export default LtiPanel;
