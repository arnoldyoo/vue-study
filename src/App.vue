<template>
  <div id="app">
    <Menu></Menu>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './components/menu.vue';
import Contents from './components/contents.vue';
import Footer from './components/footer.vue';

@Component({
  components: {
    Menu,
    Contents,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style>
html {
   height: 100%;
}
body {
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

</style>
