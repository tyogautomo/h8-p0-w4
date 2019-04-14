function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var hasil = [];

    for (var i = 0; i < arrPenumpang.length; i++) {

        // code untuk bayar angkot
        var index = [];
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] == rute[j]) {
                index.push(j);
            }
            if (arrPenumpang[i][2] == rute[j]) {
                index.push(j)
            }
        }

        // code untuk object
        var obj = {
            penumpang: "",
            naikDari: "",
            tujuan: "",
            bayar: (index[1] - index[0]) * 2000
        }

        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]

        hasil.push(obj);
    }

    if (hasil.length > 0) {
        return hasil;
    } else {
        return []
    }
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]