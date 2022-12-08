const nums = [3, 4, 9, 6, 2];

function isdivby2(nums) {
  for (let i = 0; i < nums.length; i++) {
    // check the whole array
    if (nums[i] % 2 === 0) {
      // div by 2 remnant is 0
      console.log(nums[i], ": osztható");
    } else {
      // every other case
      console.log(nums[i], ": nem osztható");
    }
  }
}
