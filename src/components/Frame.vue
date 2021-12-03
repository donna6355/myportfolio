<template>
  <div class="cont" :style="{ display: !isMobile ? 'flex' : 'block' }">
    <hooper
      class="imgSlide"
      :style="{
        width: !isMobile ? (mode == 'vertical' ? '277px' : '60%') : '100%',
        'margin-right': !isMobile ? '24px' : '0',
      }"
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
    <div style="text-align: left">
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
      <h5>{{ period }}</h5>
      <a :href="url" target="_blank">{{ url }}</a>
      <h4>주요 기술 스택</h4>
      <ul>
        <li>details</li>
        <li>details</li>
        <li>details</li>
        <li>details</li>
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
    // details: {
    //   type: Array,
    //   require: true,
    // },
  },
  computed: {
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
</style>
