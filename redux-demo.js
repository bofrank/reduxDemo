const redux = require('redux');

const counterReducer = (state, action) => {
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counter);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);