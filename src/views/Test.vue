<template>
  <div class="test">
    <ul>
      <li>
        <video width="320" height="240" controls>
          <source src="../assets/lovely.mp4" type="video/mp4" />
        </video>
      </li>
      <li>
        <a
          href="https://donna6355.github.io/myportfolio/media/lovely.94bcc1f2.mp4"
          download
          >mp4 video</a
        >
      </li>
      <li>
        <a
          href="https://drive.google.com/uc?export=download&id=158AJX_lVdxUu5SjLxaspk3AWMQZttjqo"
          download
          >google drive link</a
        >
      </li>
      <li>
        <a href="../assets/swift.pdf" download="pdf">pdf file</a>
      </li>
      <li>
        <a href="../assets/swift.pdf" download="pdf">apk file</a>
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
