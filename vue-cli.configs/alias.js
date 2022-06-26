const path = require("path");
const workspace = path.join(__dirname, "..");
const resolve = (src) => path.resolve(workspace, src);
module.exports = {
  alias: {
    vue$: "vue/dist/vue.esm.js",
    "@": resolve("src"),
    constants: resolve("src/constants"),
    comp: resolve("src/components"),
    control: resolve("src/components/controls"),
    controlMixins: resolve("src/components/control/mixins"),
    mainInterface: resolve("src/components/interface/main"),
    minorInterface: resolve("src/components/interface/minor"),
    asyncBalm: resolve("src/components/balm-ui"),
    models: resolve("src/models-apis"),
    pages: resolve("src/views"),
    plugins: resolve("src/plugins"),
    store: resolve("src/store"),
    utils: resolve("src/utils"),
    asyncCompStyle: resolve("src/styles/components/balm-ui/async"),
  },
};
