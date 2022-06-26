<template>
  <v-col cols="12">
    <v-text-field></v-text-field>
  </v-col>
</template>

<script>
import {
  default as formControls,
  namePrefix,
} from "comp/controls/form/mixins/form-controls";
export default {
  name: `${namePrefix}Text`,
  mixins: [formControls],
};
</script>
