<template>
    <div>
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
    div {
        height: 50px;
    }
    ul {
        height: inherit;
        background-color: black;
    }
    ul li {
        width: 100px;
        padding-top: 15px;
    }
    ul a {
        color: white;
        margin-top: 25px;
        text-decoration: none;
    }
</style>
