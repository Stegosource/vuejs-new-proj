import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: (state, payload) => {
            return state.counter += payload;
        },
        decrement: (state, payload) => {
            return state.counter -= payload;
        }
    },
    actions: {
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
    }
});