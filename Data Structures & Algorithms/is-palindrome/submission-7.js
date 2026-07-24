class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //    let formatStr = ""
        //    let revStr = ""
        //     for(let i of s){
        //         if(/[^a-zA-Z0-9]/.test(i)){
        //             continue
        //         } else{
        //             formatStr+=i
        //         }
        //     }
        //     for(let i=formatStr.length - 1; i>=0;i--){
        //         revStr+=formatStr[i]
        //     }
        //     return(formatStr.toLowerCase() === revStr.toLowerCase())

        let leftP = 0;
        let rightP = s.length - 1;

        while (leftP <= rightP) {
            while (/[^a-zA-Z0-9]/.test(s[leftP]) === true && leftP < rightP) {
                leftP++
            }
            while(/[^a-zA-Z0-9]/.test(s[rightP]) === true && rightP > leftP){
                rightP--
            }

            if(s[leftP].toLowerCase() === s[rightP].toLowerCase()){
                leftP++
                rightP--
            }else{
                return false
            }
        }

        return true
    }
}
