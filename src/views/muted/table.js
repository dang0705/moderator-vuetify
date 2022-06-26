export const THEAD = [
  '用户ID',
  '用户昵称',
  '真实姓名',
  '所在学校',
  '禁言原因',
  '禁言次数',
  '解封时间',
  /*"手机号",*/ '操作'
];
export const TBODY = [
  { field: 'userId', fixed: 'left', width: 250 },
  'nick',
  'name',
  { field: 'schoolName', width: 350 },
  { field: 'reason', width: 600 },
  'times',
  'expired',
  { slot: 'actions', fixed: 'right' }
];
