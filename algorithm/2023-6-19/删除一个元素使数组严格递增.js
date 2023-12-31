/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let cnt = 0;
    for (let i = 1; i < nums.length && cnt <= 1; i++) {
        if (nums[i] > nums[i - 1]) continue; // 当前值比前面大，跳过
        cnt++;
        /**
         * 思路：每次把当前元素和前一个元素比较，不符合就确定谁应该覆盖谁，始终保证数组非严格递增
         * 当出现递减时，判断应该覆盖当前位置的元素还是前面那个元素，我们需要跟前面的前面一个进行比较，
         * 如果当前元素小于前面的前面一个，显然，我们需要删除当前元素，才能使得数组递增，否则，我们删除前面一个
         * 注：优先删除的是前面那个大的数，除非删除后数组不能非严格递增，那么我们才删除当前的数，也就是优先使得递增数列的增速比较低，这样更有利于后面的数符合递增
         *
         * 例：[1,13,10,9,15,20]
         * i=1时，
         *       v  v
         *      [1,13,10,9,15,20]
         *      递增成立，保持不变
         * i=2时，
         *          v  v
         *      [1,13,10,9,15,20]
         *      递增不成立，10 < 13，此时我们需要判断把哪个覆盖掉，才能保证数组非严格递增，发现 10 !< 1,那我们覆盖前一个，也就是 [1,13,10,9,15,20] -> [1,10,10,9,15,20]
         * i=3时，
         *             v v
         *      [1,10,10,9,15,20]
         *      递增不成立，9 < 10,此时我们需要判断把哪个覆盖掉，才能保持数组非严格递增，发现 9 < 10, 那我们必须覆盖当前位置的值， 也就是 [1,10,10,9,15,20] -> [1,10,10,10,15,20]
         * ...
         */
        if (i - 1 > 0 && nums[i] <= nums[i - 2]) {
            nums[i] = nums[i - 1];
        }
        // else {
        //     nums[i - 1] = nums[i];
        // }
    }
    return cnt <= 1;
};

const arr = [1,13,10,9,15,20]
console.log(canBeIncreasing(arr));

