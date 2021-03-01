// test.js
// adam wong 2020
// 
// The testing strategy focuses on state-tests, which are much easier than integration tests, a bit easier than component tests and almost as fast as unit tests.
// Each test should create the store, then pass the state of that store to a selector, then test the output of that selector.
// don't forget to recreate the store for every test!

import assert from "assert";

import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";
import { NewOrderSelector } from "./components/newOrderSelector.js";

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
    store.dispatch({ type: "ADD_SANDWICH"})
    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 1);
    store.dispatch({ type: "ADD_SANDWICH"})
    store.dispatch({ type: "ADD_SANDWICH"})
    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 3);
  });

  it('you compute the cost of a sandwich', () => {
    const store = storeCreator(initialState);
    const sandwichName = "The new name of a sandwich";

    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 0);
    store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })
    store.dispatch({ type: "ADD_SANDWICH"})
    store.dispatch({ type: "SELECT_INGREDIENT_TO_PUSH", payload: { sandwichName: sandwichName, ingredientId: 5 }})
    store.dispatch({ type: "PUSH_INGREDIENT", payload: 0})
    assert.equal(NewOrderSelector(store.getState()).sandwiches[0].cost, 5);
  });

  it('you compute the remaining stock', () => {
    const store = storeCreator(initialState);
    const sandwichName = "The new name of a sandwich";

    assert.equal(NewOrderSelector(store.getState()).sandwiches.length, 0);
    store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })
    store.dispatch({ type: "ADD_SANDWICH"})
    store.dispatch({ type: "SELECT_INGREDIENT_TO_PUSH", payload: { sandwichName: sandwichName, ingredientId: 1 }})
    store.dispatch({ type: "PUSH_INGREDIENT", payload: 0})
    assert.equal(NewOrderSelector(store.getState()).runningTally['1'], 99);
  });
});