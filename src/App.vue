<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" :style="fontSizeMob">Donna's Home</router-link>
      |
      <router-link to="/project" :style="fontSizeMob">Project</router-link>
      |
      <router-link to="/about" :style="fontSizeMob">About</router-link>
    </div>
    <router-view
      :isMobile="isMobile"
      :style="{
        width: isMobile ? '100%' : '70%',
        margin: isMobile ? '80px auto 0' : '120px auto 0',
      }"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
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
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  margin: 0 auto;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px;
  color: #2e2e2c;
  background: rgba(0, 0, 0, 0.5);
}

#nav a {
  padding: 0 8px;
  text-decoration: none;
  font-weight: bold;
  color: #2e2e2c;
}

#nav a.router-link-exact-active {
  color: #fff;
}
ul,
ol {
  list-style: none;
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
