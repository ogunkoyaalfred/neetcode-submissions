class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const sa = [];
        const pairs = {
            "(": ")",
            "[": "]",
            "{": "}",
        };

        for (let c in s) {
            if (c in pairs) {
                sa.push(s[c]);
            } else if (s[c] === pairs[sa[sa.length-1]]) {
                sa.pop();
            } else {
                sa.push(s[c]);
            }
        }

        if (sa.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
