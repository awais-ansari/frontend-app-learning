import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import SidebarTriggerBase from '@src/courseware/course/sidebar/common/TriggerBase';

import LtiIcon from './LtiIcon';
import messages from './messages';

export const ID = 'LTI';

const LtiTrigger = ({ onClick }) => {
  const intl = useIntl();

  return (
    <SidebarTriggerBase
      onClick={onClick}
      ariaLabel={intl.formatMessage(messages.openLtiTrigger)}
    >
      <LtiIcon />
    </SidebarTriggerBase>
  );
};

LtiTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LtiTrigger;
