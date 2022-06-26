<template>
  <div class="page--not-found">
    <p>系统检测到您可能不是管理员，请检查账号权限。</p>
  </div>
</template>

<script>
export default {
  name: "not-found",
};
</script>
<style lang="scss">
.page--not-found {
  padding: 50px;
  //font-size: map-get($font-size, xl);
  font-weight: bold;
  //color: map-get($status-color, disabled);
}
</style>
