<template>
    <div>
        <button v-on:click="commitState()">change state</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {Action} from 'vuex-class';
    @Component
    export default class Menu1 extends Vue {
        @Action('setFooter') setFooter: any;
        //
        // beforeCreate() {
        //     console.log('before created');
        // }
        //
        // created () {
        //     console.log('created');
        // }
        //
        // beforeMount() {
        //     console.log('before mounted');
        // }
        //
        // mounted() {
        //     console.log('mounted');
        // }
        //
        // destroyed() {
        //     console.log('destroyed');
        // }

        async commitState() {
            this.setFooter('change state');
            // await this.$store.dispatch('setFooter', 'change state');
        }
    }
</script>

<style scoped>

</style>
