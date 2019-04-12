const store: any = {
    state: {
        footerMessage: 'Init Footer Message',
        sideBar: false,
    },
    getters: {
        footerMessage: (state: any) => state.footerMessage,
        sideBar: (state: any) => state.sideBar,
    },
    mutations: {
        setFooter: (state: any, data: any) => {
            state.footerMessage = data;
        },
        setSideBarStatus: (state: any, data: boolean) => {
            state.sideBar = data;
        },
    },
    actions: {
        setFooter({commit}: {commit: any}, data: any) {
            commit('setFooter', data);
        },
        setSideBarStatus({commit}: {commit: any}, data: boolean) {
            commit('setSideBarStatus', data);
        },
    },
};
export default store;
