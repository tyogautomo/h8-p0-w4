function ubahHuruf(kata) {

    var kamus = "abcdefghijklmnopqrstuvwxyz"

    var newKata = "";

    for (var i = 0; i < kata.length; i++) {
        // console.log(kata[i]);

        for (var j = 0; j < kamus.length; j++) {
            if (kata[i] == kamus[kamus.length - 1]) {
                newKata += kamus[0]
                break;
            } else if ((kata[i] == kamus[j])) {
                newKata += kamus[j + 1]
            }
        }
    }

    return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu