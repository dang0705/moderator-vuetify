import { createModelApis } from 'utils';
import { muted } from 'models/models';
export default Object.assign(
  {},
  createModelApis({ model: muted, backend: 'blacklist', includes: ['list'] })
);
