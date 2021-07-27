const assert = require('chai').assert
const tail = require('../tail')

describe("#tail", () => {
    it("returns true for array length of 2", () => {
      assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
    });
});