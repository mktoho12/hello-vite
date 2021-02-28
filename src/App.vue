<template lang="pug">
aside
  nav
    ul
      li #[router-link(to="/") Hello world!]
      li #[router-link(to="/firebase-auth") Firebase authentication]
div
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
}

nav {
  width: 270px;
  min-height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.65);
  text-align: left;
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
    list-style: none;
    li {
      margin: 10px 0 0;
      &:first-child {
        margin: 0;
      }
      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>