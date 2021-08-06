/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { ZInput as lit } from './input/index_lit';
import { ZInput as vanilla } from './input/index_vanilla';

export * from './input/index';

customElements.define('z-input-lit', lit);
customElements.define('z-input-vanilla', vanilla);
