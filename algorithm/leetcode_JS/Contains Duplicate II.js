/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hs = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hs.has(nums[i]) && Math.abs(i - hs.get(nums[i])) <= k) {
      return true;
    }
    hs.set(nums[i], i);
  }

  return false;
};
