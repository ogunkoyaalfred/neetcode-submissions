class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
    let output = []

        for(let i = 0; i < nums.length; i++){
                output.push(i)
            for(let j = i + 1; j < nums.length; j++){
                output.push(j)
                if(nums[i] + nums[j] === target){
                    return output
                } else{
                    output.pop()
                }
            }
            output.pop()
        }
    }
}
