function urutkanAbjad(str) {

    var kamus = "abcdefghijklmnopqrstuvwxyz";
    var newStr = ""

    for (var i = 0; i < kamus.length; i++) {

        for (var j = 0; j < str.length; j++) {
            if (kamus[i] == str[j]) {
                newStr += str[j];
            }
        }
    }

    return newStr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'