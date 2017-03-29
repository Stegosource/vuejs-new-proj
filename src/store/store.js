import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

// import getters
import * as getters from './getters';
// import mutations
import * as mutations from './mutations';
// import actions
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});