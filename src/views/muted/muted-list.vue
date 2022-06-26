<template>
  <list-view
    :thead="THEAD"
    :tbody="TBODY"
    :form-config="FORM_CONFIG"
    :default-col-width="250"
    :action-config="ACTION_CONFIG"
  />
</template>

<script>
import FORM_CONFIG from './list-form';
import ACTION_CONFIG from './actions';
import { THEAD, TBODY } from './table';

export default {
  name: 'muted-list',
  data() {
    return {
      FORM_CONFIG,
      THEAD,
      TBODY,
      isOpenDialog: false,
      reason: ''
    };
  },
  methods: {
    ACTION_CONFIG
  }
};
</script>
