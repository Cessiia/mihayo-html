<template>
  <div id="app">
    <mynavbar></mynavbar>
    <router-view />
  </div>
</template>

<script>
import mynavbar from "./components/AppComponents/Navbar.vue";
export default {
  name: "App",
  components: {
    mynavbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
