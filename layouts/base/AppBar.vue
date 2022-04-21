<template>
  <div>
    <!-- 顶部导航栏 -->
    <v-app-bar app fixed color="white" height="65" width="100%">
      <v-container class="d-flex align-center">
        <!-- LOGO -->
        <nuxt-link to="/">
          <img
            src="/logo.png"
            alt="恒森科技 Logo"
            style="width: 140px; height: 50px"
          />
        </nuxt-link>

        <!-- 占位 -->
        <v-spacer></v-spacer>

        <!-- 导航目录 -->
        <div class="d-none d-md-block">
          <v-btn
            v-for="([text, link], i) in items"
            :key="i"
            :color="i + 1 < items.length ? '' : 'primary'"
            text
            :to="link"
            class="font-weight-bold ms-1"
          >
            <span class="d-none d-md-block">{{ text }}</span>
          </v-btn>
        </div>

        <!-- 折叠按钮 -->
        <div class="d-md-none">
          <v-app-bar-nav-icon
            text
            light
            @click="drawer = true"
          ></v-app-bar-nav-icon>
        </div>
      </v-container>
    </v-app-bar>

    <!-- 顶部导航折叠抽屉 -->
    <v-navigation-drawer width="320" v-model="drawer" fixed temporary>
      <AppBarMobile :items="items">
        <template v-slot:userDrawerCloseButton>
          <v-btn icon color @click.stop="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </AppBarMobile>
    </v-navigation-drawer>
  </div>
</template>
<script>
import AppBarMobile from "./AppBarMobile.vue";
export default {
  components: {
    AppBarMobile,
  },
  data() {
    return {
      drawer: false,
      items: [
        ["Home", "/"],
        ["Suppliers", "/#suppliers"],
        ["Products", "/#products"],
        ["Catalog", "/#catalog"],
        ["Contact", "/#contact"],
      ],
    };
  },
  methods: {},
};
</script>
<style scoped></style>
