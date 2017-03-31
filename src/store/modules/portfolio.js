import stocks from '../../data/stocks';

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK' (state, {stockId, stockPrice, quantity} ) {
        // Check if we already have the stock
        const record = state.stocks.find( element => element.id === stockId );
        // If payload stockId matches any stock in our state, the statement is true and returns the element.

        if ( record ) {
            // If the record already exists, we have that stock. So we just update the quantity
            record.quantity += quantity
        } else {
            // Otherwise, we add the stock to our state
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' ( state, {stockId, stockPrice, quantity} ) {
        const record = state.stocks.find( element => element.id === stockId );
        if ( record.quantity > quantity ) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio ) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock ({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        // We inject the other getters in order to access more info. For example, a stock name.
        return state.stocks.map(stock => {
            // getters refers to global state getters.
            const record = getters.stocks.find(element => element.id === stock.id);
            // stock.id is for the stock element in this Array.map() method. element.id is from state.stocks elements

            // Local stocks array only has id and qty. We reach out to global array to get the rest then return.
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}