import Vue from 'vue';
import VueRouter from 'vue-router';
import Menu1 from '../pages/menu1/menu-1.vue';
import Menu2 from '../pages/menu2/menu-2.vue';
import BaseMenu from '../pages/base-menu.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/menu1', component: Menu1 },
        { path: '/menu2', component: Menu2 },
        { path: '/', component: BaseMenu},
    ],
});

Vue.use(VueRouter);

export default router;
