/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let current = nums[0];
  let temp = [current];
  const answer = [];

  for (let i = 1; i <= nums.length; i++) {
    if (current + 1 === nums[i]) {
      temp.push(nums[i]);
      current = nums[i];
    } else {
      if (temp.length === 1) {
        answer.push(`${temp[0]}`);
      } else {
        answer.push(`${temp[0]}->${temp[temp.length - 1]}`);
      }
      current = nums[i];
      temp = [current];
    }
  }
  return answer;
};
