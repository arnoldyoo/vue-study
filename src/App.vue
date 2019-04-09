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
