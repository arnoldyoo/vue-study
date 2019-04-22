<template>

  <div id="app">
    <SideBar></SideBar>
    <div id="main_container" ref="mainContainer">
      <Menu></Menu>
      <Contents></Contents>
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Menu from './layouts/menu.vue';
import Contents from './layouts/contents.vue';
import Footer from './layouts/footer.vue';
import SideBar from './layouts/side-bar.vue';
import {Getter} from 'vuex-class';

@Component({
  components: {
    Menu,
    Contents,
    Footer,
    SideBar
  },
})
export default class App extends Vue {
  @Getter('sideBar') sideBar !: any;

  mounted() {
    // 모든 state 변경을 감지하기 때문에 좋아보이지 않음..
    // this.$store.subscribeAction((action, state) => {
    //   if (action.type === 'setSideBarStatus') {
    //     const el: any = this.$refs['mainContainer'];
    //     if (action.payload) {
    //       el.style.marginLeft = '250px';
    //     } else {
    //       el.style.marginLeft = '0';
    //     }
    //   }
    // })
  }

  @Watch('sideBar')
  sideBarStatusChange(currentValue: boolean, oldValue: boolean) {
    const el: any = this.$refs['mainContainer'];
    if (currentValue) {
      el.style.marginLeft = '250px';
    } else {
      el.style.marginLeft = '0';
    }
  }
}
</script>
