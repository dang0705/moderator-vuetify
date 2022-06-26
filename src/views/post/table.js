import { columnFormat } from 'utils';
const { ableType, actions, boolean, userId, userName } = columnFormat;
export const THEAD = [
  '帖子ID',
  '用户姓名',
  '用户ID',
  '标题',
  '状态',
  '是否置顶',
  '是否精华',
  '是否推荐',
  '发布时间',
  '评论数',
  '操作'
];
export const TBODY = [
  { field: 'id', fixed: 'left', width: 180 },
  userName(),
  userId(),
  { slot: 'subject', width: 500 },
  ableType(),
  boolean('isSticky'),
  boolean('isHighlighted'),
  { slot: 'recommended', width: 300 },
  'created',
  { field: 'contains', width: 100 },
  actions(350)
];
