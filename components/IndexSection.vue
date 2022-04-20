<template>
  <div class="my-10" :id="id">
    <!-- 标题 -->
    <div class="d-flex flex-column align-center mb-4">
      <h2 class="text-h2 mb-3 primary--text">{{ title }}</h2>
      <p class="text-center mb-4">
        {{ subtitle }}
      </p>
    </div>
    <!-- 展示区 -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style></style>
