class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        strs.forEach(s => {
            let key = s.split("").sort().join("")
            if(!groups.has(key)){
                groups.set(key, [])
            }
                groups.get(key).push(s)
        })
        return Array.from(groups.values())
    }
}
