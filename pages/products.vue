<template>
  <div>
    <div class="hero-section d-flex align-center">
      <v-container class="">
        <h1 class="white--text text-center text-h1 mb-4">Product Center</h1>
        <h2 class="text-h4 white--text text-center font-weight-light mb-5">
          Keda Enterprise Development Co. has long been focusing on the
          semiconductor field as a first-level agent for multiple brands.
        </h2>
      </v-container>
    </div>
    <v-container>
      <v-text-field
        class="mt-4"
        v-model="search"
        label="Search Product"
        clearable
        outlined
        autofocus
      ></v-text-field>
      <v-data-table
        :headers="[
          { text: '', align: 'left', value: 'logo', width: '120' },
          { text: 'Part No', align: 'left', value: 'name' },
          { text: 'Brand', align: 'left', value: 'brand' },
        ]"
        :items="products"
        :search="search"
        class="elevation-1"
        no-data-text="Product is not listed. Please contact us via info@kedachip.com"
        no-results-text="Product is not listed. Please contact us via info@kedachip.com"
      >
        <template v-slot:item.logo="{ item }">
          <v-img
            width="80"
            height="40"
            :alt="`${item.name} logo`"
            :src="`logo/${item.brand.toLowerCase()}_logo.png`"
          ></v-img>
        </template>

        <template v-slot:item.name="{ item }">
          <span class="font-weight-bold">{{ item.name }}</span>
          <v-chip v-if="item.hot" class="ma-2" color="red" outlined small>
            <v-icon left> mdi-trending-up </v-icon>
            Hot
          </v-chip>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import HotChips from "@/data/hotchips.json";

export default {
  data() {
    return {
      search: "",
      products: HotChips,
    };
  },
  watch: {
    // watch route query
    "$route.query"() {
      this.search = this.$route.query.name || "";
    },
  },
  created() {
    this.search = this.$route.query.name;
  },
};
</script>

<style scoped lang="scss">
.hero-section {
  background-image: url("/bg/bg-pcb.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  .nav {
    display: none;
  }
}
</style>
