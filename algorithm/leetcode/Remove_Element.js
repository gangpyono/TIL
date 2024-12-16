/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) nums[i] = "-";
  }

  nums.sort().reverse();
  return nums.filter((n) => n !== "-").length;
};
