class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}
        for( let s of strs){
            let key = s.split("").sort().join("")
            if(!Object.keys(groups).includes(key)){
                groups[key] = []
            } 
                groups[key].push(s)
        }
        return Object.values(groups)
    }
}
