import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round( stock.price * ( 1 + Math.random() - 0.5 ) );
            // Generate a random number between 0.0 and 0.999.
            // Add 1 to it so we are between 1 and 1.999
            // Subtract .5 so we can be between .5 - 1.499 (either the stock went up or down)
            // Multiply by the last stock price
            // Round
        });
    }
};

const actions = {
    buyStock: ( { commit }, order ) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ( { commit } ) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}