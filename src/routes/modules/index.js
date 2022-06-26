import { createModelViews } from "@/routes/model";
import { post, reply, muted } from "models/models";

const basicRoutes = [
  {
    path: "/",
    name: "moderator",
    redirect: {
      name: `${post}.list`,
    },
  },
  createModelViews({
    modelName: post,
    menuName: "帖子管理",
    // 模块的子列表路由 注册样例
    /*    children: [
      {
        modelName: 'report',
        menuName: '报告',
        list: () => import('pages/report/report-list.vue'),
        children: [
          {
            modelName: 'report-child',
            menuName: '报告子',
            list: () => import('pages/muted/muted-list.vue')
          }
        ]
      }
    ],*/
    list: () => import("pages/post/post-list"),
  }),
  createModelViews({
    modelName: reply,
    menuName: "评论管理",
    list: () => import("pages/reply/reply-list"),
  }),
  createModelViews({
    modelName: muted,
    menuName: "禁言用户",

    list: () => import("pages/muted/muted-list"),
  }),
  /*  {
    path: '/form-test',
    name: 'test.form',
    component: import('pages/test/form.vue'),
    meta: {
      noLayout: true
    }
  },*/
  {
    path: "*",
    name: "not-found",
    component: () => import("pages/common/not-found"),
  },
];

export default basicRoutes;
