/* ============================================================
   KOLEKSI TANAMAN — data resmi museum
   Tiap kelompok tinggal tambah object baru di array COLLECTION
   buat masukin spesies baru. Field wajib: id, nama, latin,
   kategori (Hias/Obat/Pangan/Langka), img, ringkas, deskripsi,
   manfaat (array string), cara (array string).
   ============================================================ */

const COLLECTION = [

];

/* Kategori styling helper dipakai bareng di semua halaman */
function kategoriClass(k) {
    const map = { "Hias": "hias", "Obat": "obat", "Pangan": "pangan", "Langka": "langka" };
    return map[k] || "hias";
}