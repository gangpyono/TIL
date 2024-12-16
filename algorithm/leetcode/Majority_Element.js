/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort();
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count = count + 1;
      if (count > Math.floor(nums.length / 2)) {
        return nums[i];
      }
    } else {
      count = 1;
    }
  }
};
