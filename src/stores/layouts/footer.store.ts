const store: any = {
    state: {
        footerMessage: 'Test Data',
    },
    getters: {
        footerMessage: (state: any) => state.footerMessage,
    },
    mutations: {
        setFooter: (state: any, data: any) => {
            state.footerMessage = data;
        },
    },
    actions: {
        setFooter({commit}: {commit: any}, data: any) {
            commit('setFooter', data);
        },
    },
};
export default store;
