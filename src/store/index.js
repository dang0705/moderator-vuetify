import Vue from "vue";
import { isDev, API_TOKEN_KEY, cookies } from "@/configs";
import devTools from "@/store/for-dev-tools";
const isAuthenticated = !!cookies.get(API_TOKEN_KEY);

export default new Vue({
  name: "store",
  mixins: [isDev ? devTools : {}],
  data: () => ({ isAuthenticated }),
  methods: {
    getUser() {},
  },
});
