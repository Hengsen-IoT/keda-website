<template>
  <div>
    <!-- LOGO  -->
    <div class="d-flex justify-space-between align-center pa-3">
      <img
        src="/logo.png"
        alt="恒森科技 Logo"
        style="width: 140px; height: 50px"
      />
      <slot name="userDrawerCloseButton"></slot>
    </div>

    <!-- 横线 -->
    <v-divider />

    <!-- 导航 -->
    <v-list>
      <v-list-item v-for="[text, link] in items" :key="link" link :to="link">
        <v-list-item-content>
          <v-list-item-title>
            {{ text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item></v-list
    >
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
