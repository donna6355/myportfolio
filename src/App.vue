<template>
  <div
    id="app"
    :style="{
      background: darkMode ? '#282828' : '#fff',
      color: darkMode ? '#cecece' : '#2c3e50',
    }"
  >
    <div id="nav">
      <router-link to="/" :style="fontSizeMob">Donna's Home</router-link>
      |
      <router-link to="/project" :style="fontSizeMob">Project</router-link>
      |
      <router-link to="/about" :style="fontSizeMob">About</router-link>
      <!-- |
      <router-link to="/test" :style="fontSizeMob">Test</router-link> -->

      <button
        @click="updateDarkMode"
        :style="{ right: isMobile ? '8px' : '12px' }"
        style="
          padding: 4px;
          border-width: 0;
          border-radius: 50%;
          position: absolute;
          top: 12px;
          width: 28px;
          height: 28px;
        "
      >
        <img
          :src="require(`@/assets/${darkMode ? 'dark' : 'light'}.svg`)"
          alt="darkmode"
        />
      </button>
    </div>
    <router-view
      :isMobile="isMobile"
      style="margin: 0 auto; min-height: 90vh"
      :style="{
        width: isMobile ? '90%' : '70%',
        'padding-top': isMobile ? '80px' : '120px',
        'padding-bottom': isMobile ? '20px' : '40px',
      }"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    darkMode() {
      return this.$store.getters.isDarkMode;
    },
    fontSizeMob() {
      return {
        "font-size": this.isMobile ? "16px" : "20px",
      };
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        return true;
      else if (document.body.offsetWidth < 1400) return true;
      else return false;
    },
  },
  methods: {
    updateDarkMode() {
      this.$store.dispatch("changeDarkMode");
    },
    // updateWidth() {
    //   this.width = document.body.offsetWidth;
    // },
  },
  // mounted() {
  //   this.width = document.body.offsetWidth;
  //   window.addEventListener("resize", this.updateWidth);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.updateWidth);
  // },
  // data() {
  //   return {
  //     width: 0,
  //   };
  // },
};
</script>

<style>
#app {
  margin: 0 auto;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 16px;
  color: #2e2e2c;
  background: rgba(0, 0, 0, 0.5);
}
a,
a:visited {
  color: #2e2e2c;
}

#nav a {
  padding: 0 8px;
  text-decoration: none;
  font-weight: bold;
  color: #2e2e2c;
}
#nav a:hover {
  color: #b3b3b3;
}

#nav a.router-link-exact-active {
  color: #fff;
}
ul,
ol {
  list-style: none;
  padding-left: 8px;
}
li {
  line-height: 1.8;
}

.flexRow {
  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
}
.center {
  display: flex;
  justify-items: center;
  justify-content: center;
}

.routerContainer {
  margin: 120px auto 0;
}
</style>

// how to deploy github //
https://medium.com/swlh/deploy-vue-app-to-github-pages-2ada48d7397e //
vue.config.js // deploy.sh // chmod +x deploy.sh // "scripts": { // "serve":
"vue-cli-service serve", // "build": "vue-cli-service build", // "lint":
"vue-cli-service lint", // "deploy": "sh deploy.sh" // }, // git remote add
origin https://github.com/~ // git push -u origin master // npm run deploy
