// This file holds the "then" statements.
// "Thens" always correspond to an assertion on the output of a selector

import assert from "assert";

export default [
    {
      matcher: /the running tally for ingredient '(.*)' should be '(.*)/gm,
      assert: (match, computed) => {assert.equal(computed.runningTally[match[0][1]], parseInt(match[0][2]))}
    }
  ]
  