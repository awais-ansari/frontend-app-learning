import LtiPanel from './LtiPanel';
import LtiTrigger, { ID } from './LtiTrigger';

/**
 * ltiIsAvailable
 *
 * The LTI widget is always available when this config is registered.
 * Override this function in env.config.jsx to add course-specific conditions,
 * e.g. checking for an LTI configuration flag on the course object.
 *
 * @param {Object} context
 * @param {Object} context.course - Merged coursewareMeta + courseHomeMeta
 * @returns {boolean}
 */
export const ltiIsAvailable = () => true;

export const ltiWidgetConfig = {
  id: ID,
  priority: 30,
  Sidebar: LtiPanel,
  Trigger: LtiTrigger,
  isAvailable: ltiIsAvailable,
  enabled: true,
};
