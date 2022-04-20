<template>
  <v-list dense>
    <!-- <v-list-item-title class="text-h5 ma-4">
      {{ value.title }}
    </v-list-item-title> -->

    <v-list-item v-for="(item, index) in items" :key="index">
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    value: {},
  },
  computed: {
    items() {
      const ret = [];
      for (let key in this.mapping) {
        if (this.value[key]) {
          ret.push({ ...this.mapping[key], value: this.value[key] });
        }
      }
      return ret;
    },
  },
  data: () => ({
    mapping: {
      phone: {
        icon: "mdi-phone",
        label: "Phone",
      },
      fax: {
        icon: "mdi-fax",
        label: "Fax",
      },
      email: {
        icon: "mdi-email",
        label: "Email",
      },
      address: {
        icon: "mdi-map-marker",
        label: "Address",
      },
      hour: {
        icon: "mdi-clock",
        label: "Working Hour",
      },
    },
  }),
};
</script>

<style></style>
