<template>
  <v-main class="main-content bg-body" style="margin-top: 65px">
    <v-fade-transition mode="out-in">
      <Nuxt keep-alive />
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {
  name: "BaseView",
};
</script>
<style lang="scss" scoped>
.main-content {
  padding: 0px 0px 0px !important;
  min-height: 80vh;
}
</style>
