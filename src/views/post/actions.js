import { useStore } from "@/plugins/$store";
import reasonControlsConfig from "pages/mixins/reason-controls-config";

console.log(useStore);
const body = "帖子";
const idModel = "postId";
const $store = useStore();
const {
  accountsNode: { board: boardId },
} = $store;
export default function ({
  id,
  isDisabled,
  isSticky,
  isHighlighted,
  isRecommended,
  isPremium,
  user: { isBannedInBoard: isMute, id: userId, name, nick, blacklist },
}) {
  const { expired, times, days } = blacklist || {};
  return [
    {
      type: "dialog",
      text: "移动",
      ...(this.otherForums.length && boardId
        ? {
            title: {
              id,
              body: "帖子",
              operate: "移动至",
            },
            ele: [
              {
                key: "boardId",
                type: "radio",
                options: this.otherForums,
                value: this.otherForums[0].value,
              },
            ],
            request: {
              storeMethod: "movePost",
              params: {
                [idModel]: id,
              },
            },
            confirmText: "移动",
          }
        : {
            invalid: {
              handler: () => !boardId || !this.otherForums.length,
              msg: "暂无其他版块可供移动",
            },
          }),
    },
    {
      type: isDisabled ? "toggle" : "dialog",
      text: isDisabled ? "解屏蔽" : "屏蔽",
      color: isDisabled ? "enabled" : "disabled",
      ...(isDisabled
        ? {
            idModel,
            body,
            operate: "解屏蔽",
            storeMethod: "unBlockPost",
          }
        : {
            title: {
              id,
              body: "帖子",
              operate: "屏蔽",
            },
            ...reasonControlsConfig(userId),
            request: {
              storeMethod: "blockPost",
              params: { postId: id },
            },
          }),
    },
    {
      type: "toggle",
      text: isSticky ? "取消置顶" : "置顶",
      idModel,
      body,
      operate: isSticky ? "取消置顶" : "置顶",
      storeMethod: isSticky ? "unSticky" : "sticky",
    },
    {
      type: "toggle",
      text: isHighlighted ? "取消加精" : "加精",
      idModel,
      body,
      operate: isHighlighted ? "取消加精" : "加精",
      storeMethod: isHighlighted ? "unHighlight" : "highlight",
    },
    {
      type: "dialog",
      text: isMute ? "解除禁言" : "禁言",
      title: {
        name: name || nick,
        body: "用户",
        operate: isMute ? "解除禁言" : "禁言",
      },
      ...(isMute
        ? {
            ele: [
              {
                type: "mute-info",
                key: "days",
                onlyInfo: true,
                options: {
                  nextTimes: times,
                  nextDays: days,
                  nextExpired: expired,
                },
                params: {
                  boardId,
                  userId,
                },
              },
            ],
          }
        : reasonControlsConfig(userId, {
            type: "mute-info",
            key: "days",
            onlyInfo: false,
            options: {},
            value: 0,
            params: {
              boardId,
              userId,
            },
          })),

      request: {
        storeMethod: isMute ? "unMute" : "mute",
        params: { userId },
      },
      confirmText: isMute ? "解禁" : "禁言",
    },
    {
      type: isRecommended ? "toggle" : "dialog",
      text: isRecommended ? "取消推荐" : "推荐",
      ...(isRecommended
        ? {
            storeMethod: "unRecommend",
            body: "帖子",
            idModel: "postId",
            operate: "取消推荐",
          }
        : {
            title: {
              id,
              body: "帖子",
              operate: "设为推荐",
            },
            ele: [
              {
                type: "chips",
                key: "tag",
                label: "选择标签",
                cache: true,
                model: "tags",
                params: { boardId },
                required: true,
                helper:
                  "标签只能选择一个，选择“思政课”标签的帖子会展示在思政成果展示系统。若要修改标签请取消推荐后重新推荐。",
              },
            ],
            validations: {
              tag: {
                label: "标签",
                validator: "required",
              },
            },
            request: {
              storeMethod: "recommend",
              params: { postId: id },
            },
            confirmText: "设为推荐",
          }),
    },
    {
      type: "toggle",
      text: isPremium ? "取消标优" : "标记优质",
      idModel,
      body,
      operate: isPremium ? "取消标优" : "标记优质",
      storeMethod: isPremium ? "unsetPremium" : "setPremium",
    },

    // test minorList
    /*  {
      type: 'link',
      text: '报告',
      url: () => ({
        name: 'report.list'
      })
    }*/
  ];
}
