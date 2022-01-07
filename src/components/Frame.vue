<template>
  <div
    class="cont"
    :style="{
      display: !isMobile ? 'flex' : 'block',
    }"
    style="align-items: center"
  >
    <hooper
      class="imgSlide"
      :style="{
        width: mode == 'vertical' ? '239px' : isMobile ? '100%' : '60%',
        margin: mode == 'vertical' ? '0 auto' : '0',
      }"
      style="background: #fff"
      :infiniteScroll="true"
      :wheelControl="false"
    >
      <slide v-for="img in imgs" :key="img"
        ><img
          :src="require(`@/assets/${img}`)"
          alt="img"
          style="display: block; width: 100%; object-fit: contain"
      /></slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <HooperPagination slot="hooper-addons"></HooperPagination>
    </hooper>
    <div
      style="text-align: left"
      :style="{
        padding: !isMobile ? '0 24px' : '0',
        order: !isMobile && mode == 'vertical' ? '-99' : '99',
        width: isMobile ? '100%' : mode == 'vertical' ? '58%' : '35%',
      }"
    >
      <div class="flexRow">
        <div style="width: 60px; height: 60px" class="center">
          <img
            :src="require(`@/assets/${img}`)"
            alt="img"
            style="width: 100%; object-fit: contain"
          />
        </div>
        <h3 style="margin-left: 8px">
          {{ title }}
        </h3>
      </div>
      <h4>{{ period }}</h4>
      <a
        :href="url"
        target="_blank"
        :style="{
          color: darkMode ? '#ceecf8' : '#0492c2',
        }"
        >{{ url }}</a
      >
      <h4>주요 스택</h4>
      <p style="display: flex; flex-flow: row wrap; row-gap: 4px">
        <span
          v-for="(detail, idx) in stacks"
          :key="idx"
          class="roundBox"
          :style="{
            border: darkMode ? '0.4px solid #cecece' : '0.4px solid gray',
          }"
          >{{ detail }}</span
        >
      </p>
      <h4>Check Point</h4>
      <ul>
        <li v-for="(detail, idx) in details" :key="idx">{{ detail }}</li>
        <!-- <li>What I have learnt from thie project</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Frame",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  props: {
    mode: {
      type: String,
      require: true,
    },
    isMobile: {
      type: Boolean,
      require: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      require: true,
    },
    period: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    imgs: {
      type: Array,
      require: true,
    },
    details: {
      type: Array,
      require: true,
    },
    stacks: {
      type: Array,
      require: true,
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters.isDarkMode;
    },
    howToAlign() {
      return this.isMobile && this.mode !== "vertical"
        ? null
        : "display:flex;flex-flow: row wrap;";
    },
  },
};
</script>
<style scoped>
.cont {
  flex-flow: row wrap;
  justify-content: start;
}
.imgSlide {
  border: 1px solid gray;
  border-radius: 16px;
  overflow: hidden;
}
.roundBox {
  padding: 4px 8px;
  margin: 0 4px;
  border-radius: 8px;
}
</style>
