import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Icon } from '@openedx/paragon';
import { IntegrationInstructions } from '@openedx/paragon/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';
import './LtiIcon.scss';

const LtiIcon = ({ hasNewActivity }) => {
  const intl = useIntl();

  return (
    <span className="lti-icon-wrapper" aria-hidden="true">
      {/* Animated background glow ring */}
      <span className="lti-icon-glow-ring" />

      {/* Central icon */}
      <span className="lti-icon-inner">
        <Icon
          src={IntegrationInstructions}
          className="lti-icon-svg"
          alt={intl.formatMessage(messages.openLtiTrigger)}
        />
      </span>

      {/* "LTI" text badge */}
      <span className="lti-icon-badge" aria-hidden="true">
        LTI
      </span>

      {/* Notification dot when there is new activity */}
      {hasNewActivity && (
        <span
          className={classNames('lti-icon-dot', 'lti-icon-dot--active')}
          data-testid="lti-activity-dot"
        />
      )}
    </span>
  );
};

LtiIcon.defaultProps = {
  hasNewActivity: false,
};

LtiIcon.propTypes = {
  hasNewActivity: PropTypes.bool,
};

export default LtiIcon;
