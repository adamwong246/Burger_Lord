// adam wong 2020
// 
// The testing strategy focuses on state-tests.
// Each test should create the store, then pass the state of that store to a selector, then test the output of that selector.
// don't forget to recreate the store for every test!

import assert from "assert";

import { NewOrderSelector } from "./components/newOrder/selector.js";
import newOrderTests from "./components/newOrder/test/index.js";
import stateTests from "./state/test/index.js";
import reduxReselectCucumber from "./reduxReselectCucumber.js";
import initialState from "./state/initialState.js";
import storeCreator from "./state/store.js";

// we can do unit-ish tests
describe('Initial state', () => {
  it('gratuity should be 25', () => {
    const store = storeCreator(initialState);
    assert.equal(store.getState().gratuity, 25);
  });
});

describe('Initalization', () => {
  it('initialized should be false, then true', () => {
    const store = storeCreator(initialState);
    assert.equal(store.getState().INITAILIZED, false);
    store.dispatch({ type: "INITIALIZE" })
    assert.equal(store.getState().INITAILIZED, true);
  });
});

describe('Selectors', () => {
  it('you can change the name of a sandwich', () => {
    const store = storeCreator(initialState);
    const sandwichName = "The new name of a sandwich";

    store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })
    assert.equal(NewOrderSelector(store.getState()).stagedSandwich, sandwichName);

  });

  it('you can add sandwiches', () => {
    const store = storeCreator(initialState);
    const sandwichName = "The new name of a sandwich";

    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 0);
    store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })
    store.dispatch({ type: "ADD_SANDWICH" })
    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 1);
    store.dispatch({ type: "ADD_SANDWICH" })
    store.dispatch({ type: "ADD_SANDWICH" })
    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 3);
  });

  it('you compute the cost of a sandwich', () => {
    const store = storeCreator(initialState);
    const sandwichName = "The new name of a sandwich";

    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 0);
    store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })
    store.dispatch({ type: "ADD_SANDWICH" })
    store.dispatch({ type: "SELECT_INGREDIENT_TO_PUSH", payload: { sandwichName: sandwichName, ingredientId: 5 } })
    store.dispatch({ type: "PUSH_INGREDIENT", payload: 0 })
    assert.equal(NewOrderSelector(store.getState()).sandwiches[0].cost, 5);
  });

});

// we can also do cucumber-ish tests combining a component's and it's associated state's test configurations
reduxReselectCucumber(newOrderTests, stateTests)
 