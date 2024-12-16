/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== temp) {
      nums[count++] = nums[i];
      temp = nums[i];
    }
  }

  return count;
};
