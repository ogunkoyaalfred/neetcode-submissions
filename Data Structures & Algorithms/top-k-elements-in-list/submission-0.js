class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numbers = new Map()
        const output = []

        for(const num of nums){
            if(!numbers.has(num)){
                numbers.set(num, 0)
            }
            numbers.set(num, numbers.get(num) + 1)
        }

        const sorted = [...numbers.entries()].sort((a,b) => b[1] - a[1])
        for(let i =0; i < k; i++){
            output.push(sorted[i][0])
        }
      return output
    }

}
