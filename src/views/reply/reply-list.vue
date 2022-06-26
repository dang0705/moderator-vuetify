<template>
  <list-view
    :thead="THEAD"
    :tbody="TBODY"
    :form-config="FORM_CONFIG"
    :action-config="ACTION_CONFIG"
  >
    <template #topic="{ data: { topic, url } }">
      <a :href="url" target="_blank" v-text="topic" rel="noopener" />
    </template>
    <template #subject="{ data: { subject } }">
      <span v-text="subject" :title="subject" />
    </template>
  </list-view>
</template>

<script>
import FORM_CONFIG from './list-form';
import ACTION_CONFIG from './actions';
import { THEAD, TBODY } from './table';

export default {
  name: 'reply-list',
  data() {
    return {
      FORM_CONFIG,
      THEAD,
      TBODY,
      ACTION_CONFIG
    };
  }
};
</script>
