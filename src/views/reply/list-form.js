import { ABLE_TYPE } from "constants/options";
import { constantsToObject } from "@/utils";
import { dateLimitConfig } from "@/configs/date-picker-limite";

const { lastOneMonth } = dateLimitConfig();

const options = [
  {
    key: "byCondition",
    label: "按搜索条件搜索",
    value: 0,
  },
  {
    key: "byCommentId",
    label: "按评论ID搜索",
    value: 1,
  },
];
const optionsMap = constantsToObject(options);

export default [
  {
    type: "select",
    key: "type",
    label: "搜索条件",
    value: 0,
    noDefaultLabel: true,
    control: {
      key: ["disabled", "subject", "userId", "startAndEndTime"],
      display: 0,
    },
    change: (value, formData) =>
      (formData.startAndEndTime = value ? [] : lastOneMonth),
    options,
  },
  {
    type: "text",
    key: "postId",
    label: "帖子ID",
    display: ({ type }) => +type === optionsMap.byCondition,
  },
  {
    type: "select",
    key: "disabled",
    label: "是否屏蔽",
    options: ABLE_TYPE,
  },
  {
    type: "text",
    key: "subject",
    label: "评论内容",
  },
  {
    type: "text",
    key: "userId",
    label: "评论者ID",
  },
  {
    type: "rangepicker",
    label: "起止时间",
    key: "startAndEndTime",
    helper: "（最多支持一个月的时段查询）",
    value: lastOneMonth,
  },
  {
    type: "text",
    key: "commentId",
    label: "评论ID",
    display: ({ type }) => +type === optionsMap.byCommentId,
  },
];
