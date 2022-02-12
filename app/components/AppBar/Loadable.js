/**
 *
 * Asynchronously loads the component for Appbar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
