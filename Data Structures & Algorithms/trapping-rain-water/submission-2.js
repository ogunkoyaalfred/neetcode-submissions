class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let rightMax = [];
        let sum = 0

        for (let i = 0; i < height.length; i++) {
            if (i === 0) {
                leftMax.push(height[i]);
            } else if (leftMax[i - 1] > height[i]) {
                leftMax.push(leftMax[i - 1]);
            } else {
                leftMax.push(height[i]);
            }
        }

        for (let i = height.length - 1; i >= 0; i--) {
            if (i === height.length - 1) {
                rightMax[i] = height[i];
            } else if (rightMax[i + 1] > height[i]) {
                rightMax[i] = rightMax[i + 1];
            } else {
                rightMax[i] = height[i];
            }
        }

        for(let i=0;i<height.length;i++){
            sum += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i])
        }

        return sum
    }
}
