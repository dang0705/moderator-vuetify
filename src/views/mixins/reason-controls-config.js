import { useStore } from "@/plugins/$store";
const $store = useStore();
const {
  accountsNode: { board: boardId },
} = $store;
export default (userId, extraConfig) => ({
  ele: [
    {
      label: "理由",
      required: true,
      type: "chips",
      model: "mute-reasons",
      key: "reasonText",
      exclude: true,
      value: "",
      change: (_, fm, label) => (fm.reason = label),
      params: {
        boardId,
        userId,
      },
    },
    {
      type: "textarea",
      required: true,
      key: "reason",
      value: "",
      rows: 6,
      cols: 60,
      maxlength: 100,
      placeholder: "请认真填写，以便追溯",
    },
    ...(extraConfig ? [extraConfig] : []),
  ],
  validations: {
    reason: {
      label: "理由",
      validator: "required",
    },
  },
});
