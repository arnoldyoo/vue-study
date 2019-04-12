import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layouts/layout.store';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        layout,
    },
});
