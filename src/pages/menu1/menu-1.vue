<template>
    <div>
        <button v-on:click="commitState()">change state</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Menu1 extends Vue {
        commitState() {
            this.$store.commit('setTest', 'zzzzzzzzzzz');
        }
    }
</script>

<style scoped>

</style>
