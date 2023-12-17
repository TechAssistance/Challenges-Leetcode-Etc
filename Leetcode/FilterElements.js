/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var result = new Array(arr.length); 
    var j = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result[j++] = arr[i];
        }
    }
    result.length = j; 
    return result;
};
