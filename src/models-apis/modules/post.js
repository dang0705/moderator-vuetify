import { createModelApis } from 'utils';
import { post, report } from 'models/models';

export default Object.assign(
  {},
  createModelApis({
    model: post,
    backend: 'post',
    // 模块的子列表接口 注册样例
    /*    children: [
      {
        model: report,
        includes: ['list'],
        children: [
          {
            model: 'report-child',
            includes: ['list'],
            custom: {
              list: 'ddd/adb'
            }
          }
        ]
      }
    ],*/
    custom: {
      move: 'index/move',
      block: 'index/disable',
      unblock: 'index/enable',
      sticky: 'index/stick',
      unSticky: 'index/unstick',
      highlight: 'index/highlight',
      unHighlight: 'index/unHighlight',
      mute: 'index/addBlack',
      unMute: 'index/removeBlack',
      recommend: 'index/recommend',
      unRecommend: 'index/unRecommend',
      getTagsOptions: 'index/getTargets',
      setPremium: 'index/setPremium',
      unsetPremium: 'index/unsetPremium'
    },
    includes: ['list']
  })
);
