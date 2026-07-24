class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let formatStr = ""
       let revStr = ""
        for(let i of s){
            if(/[^a-zA-Z0-9]/.test(i)){
                continue
            } else{
                formatStr+=i
            }
        }
        for(let i=formatStr.length - 1; i>=0;i--){
            revStr+=formatStr[i]
        }
        return(formatStr.toLowerCase() === revStr.toLowerCase())
    }
}
