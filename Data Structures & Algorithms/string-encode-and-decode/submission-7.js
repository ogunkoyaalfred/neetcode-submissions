class Solution {
    encode(strs) {
        let string = "";
        for (const str of strs) {
            string += `${str.length}#${str}#`;  // Add # at end too
        }
        return string;
    }

    decode(str) {
        const output = [];
        let i = 0;
        
        while (i < str.length) {
            // Find the first # (end of length)
            let hashIndex = str.indexOf('#', i);
            
            // Extract the length
            const length = Number(str.substring(i, hashIndex));
            
            // Extract the string
            const start = hashIndex + 1;
            const decodedStr = str.substring(start, start + length);
            
            output.push(decodedStr);
            
            // Move to next encoded string
            i = start + length + 1;  // +1 to skip the trailing #
        }
        
        return output;
    }
}