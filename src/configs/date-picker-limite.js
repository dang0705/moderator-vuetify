import { dateFormat } from "@/utils";

export const dateLimitConfig = () => {
  const date = new Date();
  const timestamp = date.getTime() / 1000;
  let lastMonthDays = 31;
  return {
    lastOneMonth: [
      dateFormat(timestamp - lastMonthDays * 24 * 60 * 60, "YYYY-mm-dd"),
      dateFormat(timestamp, "YYYY-mm-dd"),
    ],
  };
};
