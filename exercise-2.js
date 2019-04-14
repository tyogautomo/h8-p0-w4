function fpb(angka1, angka2) {

    var arr = [];
    arr.push(angka1);
    arr.push(angka2);
    arr.sort(function (a, b) {
        return a - b
    })

    var store = [];
    for (var i = 1; i <= arr[0]; i++) {
        if (angka1 % i == 0 && angka2 % i == 0) {
            store.push(i)
        }
    }

    return store[store.length - 1];
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1