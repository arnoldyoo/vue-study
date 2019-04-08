
const store: any = {
    state: {
        test: 'Test Data',
    },
    mutations: {
        setTest: (state: any, data: any) => {
            state.test = data;
        },
    },
    actions: {
    },
};

export default store;