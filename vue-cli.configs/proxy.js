const target = require("./target");
const contexts = ["/fmoderator"];

let proxy = {};

contexts.forEach(
  (context) =>
    (proxy[context] = {
      target,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp("^\\{" + context + "}"), ""),
    })
);
module.exports = proxy;
