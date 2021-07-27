const assert = require('chai').assert
const eqArrays = require('../eqArrays')

describe("#tail", () => {
    it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
      assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });
});