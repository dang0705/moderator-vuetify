<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
      />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      :mobile-breakpoint="$vuetify.breakpoint.thresholds.xs"
      :mini-variant.sync="mini"
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item-group>
          <router-link
            v-for="{ name } in routes"
            :to="{ name }"
            :key="name"
            #default="{
              isActive,
              navigate,
              route: {
                meta: { title },
              },
            }"
            custom
          >
            <v-list-item :class="{ active: isActive }" @click="navigate">
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
      <template #append>
        <v-list>
          <v-list-item @click="mini = !mini" v-if="!$vuetify.breakpoint.xs">
            <v-list-item-title
              class="d-flex flex-row-reverse"
              v-text="stretchText"
            />
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { routes } from "@/routes";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    routes,
    drawer: false,
    mini: false,
    //
  }),
  computed: {
    stretchText() {
      return this.mini ? "展开" : "收起";
    },
  },
  watch: {
    "$vuetify.breakpoint.xs": {
      immediate: true,
      handler(phone) {
        this.drawer = !phone;
        this.mini = false;
      },
    },
  },
  created() {
    console.log(this.$vuetify.breakpoint);
  },
};
</script>
