/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    const length = nums.length;
    if (length === 0) return init;
    let accum = init;
    for (let i = 0; i < length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
}
