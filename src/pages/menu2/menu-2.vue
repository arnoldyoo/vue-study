<template>
    <span style="font-size:30px;cursor:pointer" @click="openSideNav">&#9776; OPEN</span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {Action} from 'vuex-class';

    @Component
    export default class Menu2 extends Vue {
        @Action('setSideBarStatus') setSideBarStatus: any;

        private openSideNav() {
            this.setSideBarStatus(true);
        }
    }
</script>

<style scoped>

</style>
