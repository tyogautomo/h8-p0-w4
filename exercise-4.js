function cariModus(arr) {
    // you can only write your code here!
    var temp = 1;
    var item;

    for (var i = 0; i < arr.length; i++) {

        var same = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                same++
            }

            if (temp < same) {
                temp = same
                item = arr[i]
            }
        }
    }

    if (temp == 1) {
        return -1
    } else if (temp == arr.length) {
        return -1
    } else {
        return item
    }
    // return item;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4 
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1