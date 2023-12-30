var dataBarang = [
    {kode:"001", barang: "Barang A", harga: "10000"},
    {kode:"002", barang: "Barang B", harga: "20000"},
    {kode:"003", barang: "Barang C", harga: "30000"}
];

function beli() {
    var kodeBarang = document.getElementById("kodeBarang").value;
    var banyakBarang = parseInt(document.getElementById("banyakbarang").value);

    var cariBarang = dataBarang.find((item) => item.kode == kodeBarang);

    if (cariBarang) {
        var harga = cariBarang.harga;
        var total = harga * banyakBarang;
        window.alert("Total Pembayaran ="+total);
        var uangBayar = window.prompt("masukkan pembayaran");
        var kembalian = uangBayar - total;
        window.alert("Kembalian anda ="+kembalian);
    } else {
        window.alert("Kode barang tidak ada");
    }
}