<template>
    <div class="sidenav" ref="sidebar" :style="">
        <a href="javascript:void(0)" class="closebtn" @click="closeSideNav">&times;</a>
        <a href="#"> SIDE_1</a>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import {Action, Getter} from 'vuex-class';

    @Component
    export default class SideBar extends Vue {
        @Action('setSideBarStatus') setSideBarStatus: any;
        @Getter('sideBar') sideBar !: any;

        mounted() {
            // 모든 state 변경을 감지하기 때문에 좋아보이지 않음..
            // this.$store.subscribeAction((action, state) => {
            //   if (action.type === 'setSideBarStatus') {
            //       const el: any = this.$refs['sidebar'];
            //       if (action.payload) {
            //           el.style.width = '250px';
            //       } else {
            //           // close
            //           el.style.width = '0';
            //       }
            //   }
            // })
        }

        @Watch('sideBar')
        sideBarStatusChange(currentValue: boolean, oldValue: boolean) {
            const el: any = this.$refs['sidebar'];
            if (currentValue) {
                el.style.width = '250px';
            } else {
                el.style.width = '0';
            }
        }

        private closeSideNav() {
            this.setSideBarStatus(false);
        }
    }
</script>
