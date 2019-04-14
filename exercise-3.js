function cariMedian(arr) {

    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)]
    } else if (arr.length % 2 == 0) {
        var angka1 = arr[(arr.length / 2) - 1];
        var angka2 = arr[(arr.length / 2)]
        return (angka1 + angka2) / 2
    }
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5