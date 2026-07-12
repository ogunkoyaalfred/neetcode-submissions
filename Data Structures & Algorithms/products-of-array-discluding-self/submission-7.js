class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                product *= nums[j];
            }
            output.push(product);
            product = 1;
        }

        return output;
    }
}
