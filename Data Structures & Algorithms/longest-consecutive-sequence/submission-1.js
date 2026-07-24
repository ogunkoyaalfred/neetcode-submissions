class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums)
        let totalLen = 0

        for(let num of numSet){
            let length = 1
            if(numSet.has(num - 1)){
                continue
            } else{
               let current = num
               while(numSet.has(current + 1)){
                length += 1
                current++
               }
            }
            if(length > totalLen){
                totalLen = length
            }
        }

        return totalLen
    }
}
