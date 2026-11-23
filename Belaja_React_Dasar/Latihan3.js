const daftarSiswa = ["Andi", "Budi", "Citra"];

// map akan melakukan perulangan dan
// mengubah setiap item

const sapaSemua = daftarSiswa.map((nama) => {
    return `Selamat pagi, ${nama}!`;
});

console.log(sapaSemua);