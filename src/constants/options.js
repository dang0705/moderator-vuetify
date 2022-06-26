import { constantsToObject } from "@/utils";

export const ABLE_TYPE = [
  {
    key: "yes",
    label: "是",
    value: 1,
  },
  {
    key: "no",
    label: "否",
    value: 2,
  },
];
export const ABLE_MAP = constantsToObject(ABLE_TYPE);
