import React from 'react';
import PropTypes from 'prop-types';
import { useModel } from '@src/generic/model-store';
import UpgradeButton from '@src/generic/upgrade-button/UpgradeButton';
import {
  VerifiedCertBullet,
  UnlockGradedBullet,
  FullAccessBullet,
  SupportMissionBullet,
} from '@src/generic/upgrade-bullets/UpgradeBullets';

const UpgradeContent = ({ courseId }) => {
  const { verifiedMode, offer } = useModel('courseHomeMeta', courseId);

  if (!verifiedMode) {
    return null;
  }

  return (
    <div className="p-3">
      <ul className="fa-ul upgrade-bullets-list mb-3">
        <VerifiedCertBullet />
        <UnlockGradedBullet />
        <FullAccessBullet />
        <SupportMissionBullet />
      </ul>
      <UpgradeButton
        offer={offer}
        verifiedMode={verifiedMode}
        block
      />
    </div>
  );
};

UpgradeContent.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export { UpgradeContent };


import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';
import { upgradeWidgetConfig } from './src/widgets/upgrade/src/index';
import { ltiWidgetConfig } from './src/widgets/lti/src/index';

// Load environment variables from .env file
const config = {
  ...process.env,
  SIDEBAR_WIDGETS: [upgradeWidgetConfig, ltiWidgetConfig],
  pluginSlots: {
    'org.openedx.frontend.learning.upgrade_panel.v1': {
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'upgrade_content',
            type: DIRECT_PLUGIN,
            priority: 1,
            RenderWidget: UpgradeContent,
          },
        },
      ],
    },
  },
};

export default config;
