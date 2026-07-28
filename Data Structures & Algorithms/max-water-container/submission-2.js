class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let vol = 0
        for (let i = 0; i < heights.length - 1; i++) {
            let sc = heights.length - 1;

            while (sc > i) {
                let currVol = 1;
                if (heights[sc] > heights[i]) {
                    currVol = heights[i] * (sc - i);
                } else {
                    currVol = heights[sc] * (sc - i);
                }
                if (currVol > vol) {
                    vol = currVol;
                }
                sc--;
            }
        }

        return vol
    }
}
