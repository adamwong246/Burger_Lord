// These scenarios use cucumber syntax to interogate selectors. 
// Given statements setup the initial state.
// When statements make actions
// Then statements make assertions on the output of the selector.

export default {
  "very simple scenarios": {
    "My first scenario": {
      givens: ["an inital store with ingredient #1 amount '100'"],
      whens: [
        "I change the staged sandwich name to 'Adams sandwich'",
        "I add the sandwich",
        "I select the ingredient '1' for 'Adams sandwich'",
        "I push the selected ingredient for sandwich '0'"
      ],
      thens: [
        "the running tally for ingredient '1' should be '99'"
      ]
    },
    "Test 2": {
      givens: ["an inital store with ingredient #1 amount '100'"],
      whens: [
        "I change the staged sandwich name to 'Chaches sandwich'",
        "I add the sandwich",
        "I select the ingredient '1' for 'Chaches sandwich'",
        "I push the selected ingredient for sandwich '0'"
      ],
      thens: [
        "the running tally for ingredient '1' should be '99'"
      ]
    },
  }
};