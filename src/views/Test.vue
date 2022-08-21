<template>
  <div class="test">
    <ul>
      <li>
        <a href="@/assets/profile.png" download>png image</a>
      </li>
      <li>
        <a href="@/assets/lovely.mp4" download>mp4 video</a>
      </li>
      <li>
        <a href="@/assets/resume.pdf" download>pdf file</a>
      </li>
      <li>
        <a href="@/assets/resume.pdf" download>apk file</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Test",
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>
<style scoped>
.test {
  text-align: left;
}
.git {
  margin: 8px 0;
  font-weight: bold;
}
</style>
