import reasonControlsConfig from "pages/mixins/reason-controls-config";
const body = "评论";
const idModel = "commentId";
export default ({ isDisabled, id, user: { id: userId } }) => [
  {
    type: isDisabled ? "toggle" : "dialog",
    text: isDisabled ? "解屏蔽" : "屏蔽",
    color: isDisabled ? "enabled" : "disabled",
    ...(isDisabled
      ? {
          idModel,
          body,
          operate: "解屏蔽",
          storeMethod: "unBlockReply",
        }
      : {
          title: {
            id,
            body: "评论",
            operate: "屏蔽",
          },
          ...reasonControlsConfig(userId),
          request: {
            storeMethod: "blockReply",
            params: { commentId: id },
          },
        }),
  },
];
