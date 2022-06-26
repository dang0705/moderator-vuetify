let topRoute = "";
let routePath = "";
export function createModelViews({
  modelName,
  menuName,
  list = null,
  detail = null,
  children = null,
  isMinors = false,
}) {
  !isMinors ? (topRoute = modelName) : (routePath += `${modelName}/`);
  const majorList = {
    path: isMinors ? `/${topRoute + "/" + routePath}list` : `/${topRoute}/list`,
    name: `${modelName}.list`,
    component: list,
    meta: {
      menuName,
      ...(isMinors ? { isMinors: true } : {}),
    },
  };
  return {
    ...(children // 当有子路由, model作为一整个模块
      ? {
          path: `/${topRoute}/${routePath}`,
          name: `${modelName}.index`,
          component: () => import("comp/layouts/blank.vue"),
          redirect: { name: `${modelName}.list` }, // 默认显示主列表
          meta: {
            menuName,
          },
          children: [
            // 模块默认列表
            majorList,
            // 模块默认列表详情
            ...(Array.isArray(detail)
              ? detail
              : detail
              ? [
                  {
                    path: "/:id?",
                    name: `${modelName}.detail`,
                    component: detail,
                    meta: {
                      menuName,
                    },
                  },
                ]
              : []),

            // 子模块
            ...children.map(({ modelName, list, detail, menuName, children }) =>
              createModelViews({
                modelName,
                menuName,
                list,
                detail,
                children,
                isMinors: true,
              })
            ),
          ],
        }
      : list
      ? majorList // 无次要路由, model直接作为路由
      : {}),

    ...(Array.isArray(detail)
      ? detail
      : detail
      ? {
          path: "/:id?",
          name: `${modelName}.detail`,
          component: detail,
          meta: {
            menuName,
          },
        }
      : {}),
  };
}
