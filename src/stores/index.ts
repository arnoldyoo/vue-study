import Vue from 'vue';
import Vuex from 'vuex';
import footer from './layouts/footer.store';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        footer,
    },
});
