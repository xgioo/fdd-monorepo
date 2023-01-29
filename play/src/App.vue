<template>
  <div id="app">
    <fdd-button />
    <fdd-tag />
  </div>
</template>

<script>
import { Button, Tag } from "fdd-ui";
console.log(Button, "Button");
import Vue from "vue";
Vue.use(Button, Tag);
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
