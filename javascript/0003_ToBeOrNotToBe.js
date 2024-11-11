/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(value2) {
      if (val === value2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe(value2) {
      if (val !== value2) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
