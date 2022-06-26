import store from "@/store";
export const useStore = store;
export default {
  install(Vue) {
    Vue.prototype.$store = store;
  },
};
