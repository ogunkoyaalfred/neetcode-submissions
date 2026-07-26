class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sumSort = nums.sort((a, b) => a - b);
        let output = [];

        for (let i = 0; i < sumSort.length - 1; i++) {
            if (i > 0 && sumSort[i] === sumSort[i - 1]) {
                continue;
            } else {
                let left = i + 1;
                let right = sumSort.length - 1;

                while (left < right) {
                    let sum = nums[left] + nums[right] + nums[i];

                    if (sum === 0) {
                        output.push([nums[i], nums[left], nums[right]]);
                        right--;
                        left++;
                        while (left < right && nums[left] === nums[left - 1]) {
                            left++;
                        }
                        while (right > left && nums[right] === nums[right + 1]) {
                            right--;
                        }
                    } else if (sum > 0) {
                        right--;
                    } else {
                        left++;
                    }
                }
            }
        }

        return output;
    }
}
