/**
 *
 * Asynchronously loads the component for ColorPallet
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
