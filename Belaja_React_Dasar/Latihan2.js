const siswa = {
    nama: "Budi",
    kelas: "11 PPLG",
    nilai: 90
};

// const namaSiswa = siswa.nama;

const { nama, kelas, nilai } = siswa;

console.log(`Siswa bernama ${nama} dari ${kelas} mendapat nilai ${nilai}.`);