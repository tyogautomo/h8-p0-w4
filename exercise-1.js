// Angka Prima

function angkaPrima(num) {

    for (var i = 2; i < num; i++) {

        if (num % i == 0) {
            return false;
        }
    }

    return true
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false