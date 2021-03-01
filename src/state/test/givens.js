// This file holds the "given" statements.
// "Givens" always correspond to an alteration of the initial state of the store
export default [
    { matcher: /an inital store with ingredient #(\d*) amount '(\d*)'/gm, modifier: (state) => state }
]
