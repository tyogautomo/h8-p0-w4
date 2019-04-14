function checkAB(str) {

    var indexA = [];
    var indexB = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            indexA.push(i);
        } else if (str[i] == "b") {
            indexB.push(i);
        }
    }

    // console.log(indexA);
    // console.log(indexB);

    for (var a = 0; a < indexA.length; a++) {

        for (var b = 0; b < indexB.length; b++) {
            if (Math.abs(indexA[a] - indexB[b]) - 1 == 3) {
                return true;
            }
        }
    }

    return false;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false