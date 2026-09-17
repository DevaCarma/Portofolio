
function hitungDiskon() {

    // Mengambil nilai input harga
    let hargaInput = document.getElementById("harga").value;

    // Mengambil nilai input diskon
    let diskonInput = document.getElementById("diskon").value;

    // Mengubah input menjadi angka
    let harga = Number(hargaInput);
    let diskon = Number(diskonInput);

    // Validasi input
    if (
        hargaInput === "" ||
        diskonInput === "" ||
        harga <= 0 ||
        diskon < 0 ||
        diskon > 100
    ) {
        alert("Masukkan harga dan diskon yang valid!");
        return;
    }

    // Menghitung potongan harga
    let jumlahDiskon = harga * diskon / 100;

    // Menghitung harga akhir
    let hargaAkhir = harga - jumlahDiskon;

    // Menampilkan bagian hasil
    document.getElementById("hasil")
        .classList.remove("hidden");

    // Menampilkan jumlah potongan
    document.getElementById("tampilDiskon")
        .textContent =
        "Potongan harga: Rp" +
        jumlahDiskon.toLocaleString("id-ID");

    // Menampilkan harga akhir
    document.getElementById("tampilHargaAkhir")
        .textContent =
        "Harga akhir: Rp" +
        hargaAkhir.toLocaleString("id-ID");

}