import { createModelApis } from 'utils';
import { reply } from 'models/models';
export default Object.assign(
  {},
  createModelApis({
    model: reply,
    backend: 'comment',
    custom: {
      block: 'index/disableReply',
      unBlock: 'index/enableReply'
    },
    includes: ['list']
  })
);
