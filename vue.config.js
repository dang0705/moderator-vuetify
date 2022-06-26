const proxy = require("./vue-cli.configs/proxy");
const resolve = require("./vue-cli.configs/alias");
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: "@forward '@/styles/global/_index.scss';",
      },
    },
  },
  configureWebpack: {
    resolve,
  },
  devServer: {
    host: "local.qinglipai.cn",
    port: 3003,
    proxy,
  },
  transpileDependencies: ["vuetify"],
};
