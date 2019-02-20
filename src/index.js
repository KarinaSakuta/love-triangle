/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var count = 0;
    for(var i = 0; i < preferences.length; i++){
        var a = i + 1;
        var b = preferences[a - 1];
        var c = preferences[b - 1];
        var d = preferences[c - 1];
        if(a == d && a !== b){
            count++;
        }
    }
    return count/3;
};
