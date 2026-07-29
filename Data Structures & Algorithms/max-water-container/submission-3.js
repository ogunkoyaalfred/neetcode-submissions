class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    //     Pseudo code
    //     left = 0, right = length - 1
    // max_area = 0
    // while left < right:
    //     compute area = min(heights[left], heights[right]) * (right - left)
    //     update max_area if bigger
    //     if heights[left] < heights[right]:
    //         move left inward
    //     else:
    //         move right inward
    // return max_area
    maxArea(heights) {
        let i = 0;
        let vol = 0;
        let sc = heights.length - 1;
        while (i < sc) {
            let currVol = Math.min(heights[i], heights[sc]) * (sc - i)
            if(currVol > vol){
                vol = currVol
            }
            if(heights[i] < heights[sc]){
                i++
            }else{
                sc--
            }
        }

        return vol;
    }
}
