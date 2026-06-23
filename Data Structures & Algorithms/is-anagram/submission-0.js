class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let ssort = s.split('').sort().join('')
        let tsort = t.split('').sort().join('')

        if( ssort == tsort){
            return true
        } else{
            return false
        }
    }
}
