import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        test: 'Test Data',
    },
    mutations: {
        setTest: (state, data) => {
            state.test = data;
        },
    },
    actions: {
    },
});
export default store;
