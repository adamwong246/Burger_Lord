import assert from "assert";

import storeCreator from "./store.js";
import initialState from "./initialState.js";
import { NewOrderSelector, OrdersSelector } from "./selectors.js";

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
});