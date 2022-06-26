<template>
  <list-view
    :thead="THEAD"
    :tbody="TBODY"
    :form-config="FORM_CONFIG"
    :action-config="ACTION_CONFIG"
  >
    <template #subject="{ data: { subject, url } }">
      <a :href="url" rel="noopener" target="_blank">{{ subject }}</a>
    </template>
    <template #recommended="{ data: { isRecommended, recommendedTarget } }">
      <template v-if="!isRecommended">否</template>
      <template v-else>
        <span class="enabled">是</span>
        <template v-if="recommendedTarget.length">
          (
          <span v-for="(target, index) in recommendedTarget" :key="index">
            {{ target.name }}
            <template v-if="index < recommendedTarget.length - 1">、</template>
          </span>
          )
        </template>
      </template>
    </template>
  </list-view>
</template>

<script>
import FORM_CONFIG from "./list-form";
import ACTION_CONFIG from "./actions";
import { THEAD, TBODY } from "@/views/post/table";

export default {
  name: "post-list",
  data() {
    return {
      FORM_CONFIG,
      THEAD,
      TBODY,
      nodes: this.$store.accountsNode,
    };
  },
  computed: {
    otherForums() {
      return this.nodes.board
        ? this.$store.multiSelectOptions["my-forum-node"]?.filter(
            (forum) => forum.value !== this.nodes.board
          )
        : [];
    },
  },

  methods: {
    ACTION_CONFIG,
  },
};
</script>
