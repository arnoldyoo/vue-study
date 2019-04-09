<template>
    <div class="layout-menu">
        <ul class="nav">
            <li class="nav-item">
                <router-link to="/menu1">Menu1</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu2">Menu2</router-link>
            </li>
        </ul>
    </div>

</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Menu extends Vue {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
