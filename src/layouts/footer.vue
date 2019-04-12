<template>
    <footer class="layout-footer">
        <p>Posted by: arnoldyoo {{footerMessage}}</p>
        <p>Contact information: arnoldyoo@itam.games</p>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    @Component
    export default class Footer extends Vue {
        // @Getter('footerMessage') footerMessage: any;
        get footerMessage() {
            return this.$store.getters.footerMessage;
        }
    }
</script>

<style scoped>


</style>
