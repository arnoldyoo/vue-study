<template>
    <footer>
        <p>Posted by: arnoldyoo {{test}}</p>
        <p>Contact information: arnoldyoo@itam.games</p>
    </footer>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
        get test() {
                return this.$store.state.test
        }
    }
</script>

<style scoped>
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
}

</style>
