/**
 * @param {array} arr
 *
 * @example
 * input: [{ key1, value1, label1 }, { key2, value2, label2 }]
 * output: {
 *   key1: value1,
 *   key2: value2
 * }
 */
export const constantsToObject = (arr, reversed = false) =>
  Object.assign(
    {},
    ...arr.map(({ key, value }) =>
      reversed ? { [value]: key } : { [key]: value }
    )
  );

/**
 * @param {array} arr
 *
 * @example
 * input: [{ key1, value1, label1 }, { key2, value2, label2 }]
 * output: [{
 *   label: label1,
 *   value: value1
 * }, {
 *   label: label2,
 *   value: value2
 * }]
 */
export const constantsToList = (arr) =>
  arr.map(({ value, label }) => ({
    label,
    value,
  }));

export const createUid = () =>
  Math.floor((1 + Math.random()) * 0x10000).toString(16) + "-" + Date.now();

export const capitalizeTheFirstLetter = (letter) =>
  letter?.replace(/^\S/, (s) => s.toUpperCase());

export function openInNewTab(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.click();
}
export function generateRandomAlphaNum(len) {
  let rdmString = "";
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random().toString(36).substr(2)
  );
  return rdmString.substr(0, len);
}

export const convertValue = (value) =>
  value !== "" ? (typeof +value === "number" ? +value : value) : "";

export function formatOptions(model, options, optionKey) {
  let label = "name";
  let value = "id";
  return optionKey.length
    ? options
    : options.map((option) => {
        let result = {
          label: option[label] || option.label,
          value: option[value] || option.value,
          data: option,
        };

        if (option.selected) {
          result.selected = true;
        }

        return result;
      });
}
/**
 * 时间对象的格式化
 * @format YYYY-mm-dd HH:ii:ss
 */
export const dateFormat = (timestamp, format) => {
  const date = new Date(timestamp * 1e3);

  const o = {
    "m+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "H+": date.getHours(), // hour
    "i+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  };

  if (/(Y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }

  return format;
};

export const trueOrFalse = (boolean) => (boolean ? "是" : "否");

//  表格列的数据格式统一化
export const columnFormat = {
  userId: ({ field = "user", columnOptions } = {}) => ({
    field,
    fn: ({ [field]: { id } }) => id,
    ...columnOptions,
  }),
  userName: ({ field = "user", columnOptions } = {}) => ({
    field,
    fn: ({ [field]: { name, nick } }) => name || nick,
    ...columnOptions,
  }),
  ableType: (
    field = "isDisabled",
    disabledText,
    columnOptions = { width: 100 }
  ) => ({
    field,
    class: (data) => (data[field] ? "disabled" : "enabled"),
    fn: (data) => (data[field] ? disabledText || "已屏蔽" : "正常"),
    ...columnOptions,
  }),
  boolean: (field, columnOptions = { width: 100 }) => ({
    field,
    class: (data) => (data[field] ? "enabled" : ""),
    fn: (data) => trueOrFalse(data[field]),
    ...columnOptions,
  }),
  actions: (width = 120, fixed = "right") => ({
    slot: "actions",
    fixed,
    width,
  }),
};
export const toCamelCase = (str) => {
  let s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
export function createModelApis({
  model,
  backend,
  custom = {},
  children = null,
  includes = [],
  excludes = [],
}) {
  const {
    list = "",
    detail = "",
    add = "",
    edit = "",
    down = "",
    delete: del = "",
    ...othersCustom
  } = custom;
  const apisTemplate = {
    list: `/${backend}/${list || "index"}`,
    detail: `/${backend}/${detail || "info"}`,
    create: `/${backend}/${add || "add"}`,
    update: `/${backend}/${edit || "edit"}`,
    delete: `/${backend}/${del || "delete"}`,
    /*   down: down || `/${backend}/export`,
    ...(includes.includes('down')
      ? { down: down || '/statistics/salarylog/export' }
      : {})*/
  };

  let apis = {};
  if (includes.length) {
    includes.forEach(
      (type) => apisTemplate[type] && (apis[type] = apisTemplate[type])
    );
  } else if (excludes.length) {
    excludes.forEach((type) => apisTemplate[type] && delete apisTemplate[type]);
    apis = apisTemplate;
  } else {
    apis = apisTemplate;
  }

  let childrenModels = {};
  children?.forEach(
    ({
      model = "",
      custom = {},
      children = null,
      includes = [],
      excludes = [],
    }) =>
      (childrenModels[toCamelCase(model)] = createModelApis({
        model,
        backend,
        custom,
        children,
        includes,
        excludes,
      })[model])
  );

  return {
    [model]: {
      ...apis,
      ...othersCustom,
      ...(children ? { children: childrenModels } : {}),
    },
  };
}
