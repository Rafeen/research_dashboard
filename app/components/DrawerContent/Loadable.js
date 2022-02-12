/**
 *
 * Asynchronously loads the component for DrawerContent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
