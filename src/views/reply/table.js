import { columnFormat } from 'utils';
const { ableType, actions, boolean, userId, userName } = columnFormat;
export const THEAD = [
  '评论ID',
  '评论者ID',
  '评论者姓名',
  // "评论者IP和端口",
  '评论内容',
  '被回复的评论ID',
  '帖子ID',
  '状态',
  '是否删除',
  '发表时间',
  '操作'
];
export const TBODY = [
  {
    field: 'id',
    fixed: 'left',
    width: 300
  },
  userId({ columnOptions: { width: 250 } }),
  userName({ columnOptions: { width: 250 } }),
  // "remote",
  { slot: 'subject', width: 250 },
  'replyTo',
  { slot: 'topic' },
  ableType(),
  boolean('isDeleted'),
  'created',
  actions(80)
];
