const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        return state.counter += payload;
    },
    decrement: (state, payload) => {
        return state.counter -= payload;
    }
};

const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrement: ({commit}, payload) => { // Uses ES6 object destructuring to pull out just commit from the 'context' object
        commit('decrement', payload);
    },
    asyncIncrement: ({commit}, payload) => {
        setTimeout( () => {
            commit('increment', payload.by);
        }, payload.duration );
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout( () => {
            commit('decrement', payload.by);
        }, payload.duration );
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}