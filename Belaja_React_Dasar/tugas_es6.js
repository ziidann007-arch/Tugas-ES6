// Data array berisi 3 objek produk
const produk = [
    {
        nama: "Laptop",
        harga: 5000000
    },
    {
        nama: "Mouse",
        harga: 75000
    },
    {
        nama: "Keyboard",
        harga: 150000
    }
];

// Function untuk menampilkan promosi
produk.forEach(function(item) {
    console.log(`Promo ${item.nama}! Harga: Rp${item.harga}`);

    if (item.harga > 100000) {
        console.log('"barang mewah"');
    }

    console.log("-------------------");
});