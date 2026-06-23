class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsArr = [...nums]
        for(let i = 0;i < numsArr.length; i++){
            for( let j = i + 1; j < numsArr.length; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}
