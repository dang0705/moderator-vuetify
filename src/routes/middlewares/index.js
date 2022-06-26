export default function (router) {
  router.beforeEach(async (to, from, next) => {
    next();
  });
}
