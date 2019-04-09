<template>
    <footer class="layout-footer">
        <p>Posted by: arnoldyoo {{test}}</p>
        <p>Contact information: arnoldyoo@itam.games</p>
    </footer>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Action } from 'vuex';

    @Component
    export default class Footer extends Vue {
        get test() {
                return this.$store.state.test
        }
    }
</script>

<style scoped>


</style>
