<template>
  <div>
    <div class="hero-section d-flex align-center">
      <v-container class="">
        <h1 class="white--text text-center text-h1 mb-4">
          Keda Enterprise Development Co.
        </h1>
        <h2 class="text-h4 white--text text-center font-weight-light mb-5">
          Keda Enterprise Development Co. was established in 1997. The company
          has long been focusing on the semiconductor field as a first-level
          agent for multiple brands.
        </h2>
      </v-container>
    </div>
    <div>
      <v-container>
        <IndexSection
          id="suppliers"
          title="Brands We Supply"
          subtitle="We are the first-level agency in Asia for semiconductor brands
              such as Nuvoton, HuaDa Semiconductor, Nations Technologies Inc,
              Quectel, EM Microelectronic, etc."
        >
          <v-row>
            <v-col cols="6" md="3" v-for="(item, index) in brands" :key="index">
              <v-card class="mx-auto" max-width="344">
                <v-img :src="item.img" :alt="item.title + 'logo'" contain />
              </v-card>
            </v-col>
          </v-row>
        </IndexSection>

        <v-divider class="my-6"></v-divider>

        <IndexSection
          id="products"
          title="Hot Products"
          subtitle="We also provide substitutions of common chips, such as ST, TI, etc. For more information, please contact us via email info@kedachip.com"
        >
          <v-row>
            <v-col cols="12" md="4" v-for="col in 3" :key="col">
              <v-list subheader class="elevation-1">
                <v-list-item
                  v-for="item in products.slice(5 * (col - 1), 5 * col)"
                  :key="item.name"
                  :to="`/products?name=${item.name}`"
                >
                  <v-list-item-avatar width="80" height="40" rounded="0">
                    <v-img
                      :alt="`${item.name} logo`"
                      :src="`logo/${item.brand.toLowerCase()}_logo.png`"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <div class="d-flex justify-center">
            <v-btn class="mx-auto my-2" color="primary" text to="/products">
              View All Products
            </v-btn>
          </div>
        </IndexSection>

        <v-divider class="my-6"></v-divider>

        <IndexSection
          id="catalog"
          title="Catalog"
          subtitle="Our product catalog is range from MCU, Communication Module, Speech IC, Analog Device, Memory, and so on. "
        >
          <v-row>
            <v-col
              cols="6"
              md="3"
              v-for="(item, index) in catalog"
              :key="index"
            >
              <!-- 卡片 -->
              <v-card class="mx-auto" max-height="230">
                <v-img
                  :src="item.img"
                  :alt="item.title + 'logo'"
                  contain
                  height="150"
                />
                <v-card-title class="justify-center">
                  {{ item.title }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </IndexSection>

        <v-divider class="my-6"></v-divider>

        <IndexSection id="contact" title="Contact" subtitle="">
          <ContactBlock :value="contact"></ContactBlock>
        </IndexSection>
      </v-container>
    </div>
  </div>
</template>

<script>
import HotChips from "@/data/hotchips.json";

export default {
  data: () => ({
    news: [],
    hotProducts: [],
    brands: [
      { title: "TI", url: "", img: "logo/ti_logo.png" },
      { title: "ST", url: "", img: "logo/ST_logo.png" },
      { title: "Lattice", url: "", img: "logo/lattice_logo.png" },
      { title: "Nuvoton", url: "", img: "logo/nuvoton_logo.png" },
      { title: "HDHC", url: "", img: "logo/hdhc_logo.png" },
      { title: "EM", url: "", img: "logo/em_logo.png" },
      { title: "Giantec", url: "", img: "logo/giantec_logo.png" },
      { title: "Quectel", url: "", img: "logo/quectel_logo.png" },
      { title: "Nation", url: "", img: "logo/nation_logo.png" },
      { title: "Onbright", url: "", img: "logo/onbright_logo.png" },
      { title: "Inplay", url: "", img: "logo/inplay_logo.png" },
      { title: "Syncmos", url: "", img: "logo/syncmos_logo.png" },
    ],
    catalog: [
      { title: "MCU", url: "", img: "chip/mcu_icon.png" },
      { title: "MPU", url: "", img: "chip/cpu_icon.png" },
      { title: "Audio IC", url: "", img: "chip/audio_icon.png" },
      { title: "Communication", url: "", img: "chip/tel_icon.png" },
      { title: "Smart Card", url: "", img: "chip/sim_icon.png" },
      { title: "Memory", url: "", img: "chip/rom_icon.png" },
      { title: "Battery Mgmt", url: "", img: "chip/battery_icon.png" },
      { title: "3D TOF", url: "", img: "chip/3d_icon.png" },
    ],
    products: HotChips,
    contact: {
      title: "Keda Enterprise Development Co.",
      address:
        "Flat 9D 9/E High Win Factory Building, 47 Hoi Yuen Road, Kwun Tong KL",
      hour: "Mon to Fri 9:00 ~ 18:00",
      phone: "852 400-886-8889",
      email: "info@kedachip.com",
    },
  }),
  created() {
    // get hotchips
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  background-image: url("/bg/bg-chips.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
  .nav {
    display: none;
  }
}
</style>
