import { ABLE_TYPE as options } from 'constants/options';

export default [
  {
    type: 'select',
    label: '是否屏蔽',
    key: 'disabled',
    options
  },
  {
    type: 'text',
    label: '帖子ID',
    key: 'postId'
  },
  {
    type: 'select',
    label: '是否精华',
    key: 'highlighted',
    options
  },
  {
    type: 'select',
    label: '是否置顶',
    key: 'sticky',
    options
  },
  {
    type: 'select',
    label: '是否推荐',
    key: 'recommended',
    options
  },
  {
    type: 'select',
    label: '是否标记优质',
    key: 'isPremium',
    options
  }
];
