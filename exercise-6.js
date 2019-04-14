/* the Algorithm

1. iterasi pertama mencoba i = 0 dikali dengan j = 0
2. apakah bila dikalikan menghasilkan "angka"?
3. bila ya, maka push ke array
4. bila tidak maka lakukan iterasi kedua dengan menambahkan nilai i dan j menggunakan loop
5. lakukan iterasi selama i dan j kurang dari "angka"
*/

function digitPerkalianMinimum(angka) {

    var faktor = [];

    // loop untuk mengecek apakah i * j == angka?
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i * j == angka) {
                faktor.push("" + i + j)
            }
        }
    }

    // mengurutkan array dari angka terkecil
    faktor.sort(function (a, b) {
        return a - b
    });
    // console.log(faktor);
    return faktor[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2