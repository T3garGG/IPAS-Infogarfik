/* ============================================================
   KOLEKSI TANAMAN — data resmi museum
   Tiap kelompok tinggal tambah object baru di array COLLECTION
   buat masukin spesies baru. Field wajib: id, nama, latin,
   kategori (Hias/Obat/Pangan/Langka), img, ringkas, deskripsi,
   manfaat (array string), cara (array string).
   ============================================================ */

const COLLECTION = [
  {
    id: "melati",
    nomor: "001",
    nama: "Melati Putih",
    latin: "Jasminum sambac",
    kategori: "Hias",
    img: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=800&auto=format&fit=crop",
    ringkas: "Bunga bangsa dengan aroma khas, sering dipakai upacara adat Jawa.",
    deskripsi: "Melati putih adalah semak merambat kecil dengan bunga putih bertangkai pendek yang mekar malam hari dan menebarkan aroma kuat. Ditetapkan sebagai puspa bangsa Indonesia, tanaman ini tumbuh subur di dataran rendah tropis dan sering dijadikan hiasan pengantin serta bahan teh melati.",
    manfaat: ["Bahan utama teh melati", "Pengharum alami ruangan & pengantin", "Minyak atsiri untuk aromaterapi", "Simbol kesucian dalam upacara adat"],
    cara: ["Tanam di lahan dengan sinar matahari penuh 6-8 jam", "Siram rutin tapi hindari genangan air", "Pangkas ranting tua tiap 2-3 bulan agar rajin berbunga", "Beri pupuk kandang tiap awal musim hujan"]
  },
  {
    id: "kunyit",
    nomor: "002",
    nama: "Kunyit",
    latin: "Curcuma longa",
    kategori: "Obat",
    img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=800&auto=format&fit=crop",
    ringkas: "Rimpang kuning-oranye, tulang punggung jamu tradisional Nusantara.",
    deskripsi: "Kunyit adalah tanaman rimpang dari keluarga jahe-jahean dengan warna oranye khas akibat kandungan kurkumin. Rimpangnya diolah menjadi jamu, bumbu dapur, hingga pewarna alami. Tanaman ini tumbuh baik di tanah gembur dengan kelembapan cukup.",
    manfaat: ["Anti-inflamasi & antioksidan alami", "Bahan jamu kunyit asam", "Pewarna alami makanan", "Membantu pencernaan"],
    cara: ["Tanam rimpang di tanah gembur berdrainase baik", "Siram teratur, jangan sampai becek", "Panen setelah 8-10 bulan saat daun menguning", "Simpan rimpang di tempat kering setelah panen"]
  },
  {
    id: "singkong",
    nomor: "003",
    nama: "Singkong",
    latin: "Manihot esculenta",
    kategori: "Pangan",
    img: "https://images.unsplash.com/photo-1595855759920-86582396756c?q=80&w=800&auto=format&fit=crop",
    ringkas: "Umbi sumber karbohidrat rakyat, tahan banting di lahan kering.",
    deskripsi: "Singkong atau ubi kayu adalah tanaman perdu dengan umbi akar sebagai sumber karbohidrat penting bagi jutaan orang Indonesia. Tanaman ini sangat toleran terhadap lahan kering dan minim perawatan, menjadikannya andalan ketahanan pangan.",
    manfaat: ["Sumber karbohidrat pengganti nasi", "Bahan baku tepung tapioka", "Daunnya bisa jadi sayur", "Tahan kekeringan, cocok lahan marjinal"],
    cara: ["Tanam stek batang sepanjang 20-25 cm", "Pilih lahan dengan drainase baik", "Bersihkan gulma tiap 1-2 bulan", "Panen umbi setelah 8-12 bulan tanam"]
  },
  {
    id: "anggrek-bulan",
    nomor: "004",
    nama: "Anggrek Bulan",
    latin: "Phalaenopsis amabilis",
    kategori: "Langka",
    img: "https://images.unsplash.com/photo-1524598171353-e5f5c1c46f83?q=80&w=800&auto=format&fit=crop",
    ringkas: "Puspa pesona nasional, populasi liarnya kian terancam deforestasi.",
    deskripsi: "Anggrek bulan adalah epifit dengan bunga putih besar berbentuk seperti bulan purnama saat mekar. Ditetapkan sebagai puspa pesona Indonesia, populasi liarnya kian menyusut akibat hilangnya habitat hutan hujan tempat ia menempel pada batang pohon.",
    manfaat: ["Tanaman hias bernilai ekonomi tinggi", "Indikator kesehatan ekosistem hutan", "Objek penelitian konservasi anggrek", "Simbol kekayaan flora Indonesia"],
    cara: ["Tempel pada media pakis/serat kelapa, bukan tanah", "Semprot air tiap pagi, jaga kelembapan udara", "Letakkan di tempat teduh dengan cahaya tidak langsung", "Beri pupuk khusus anggrek tiap 2 minggu"]
  },
  {
    id: "sirih",
    nomor: "005",
    nama: "Sirih Hijau",
    latin: "Piper betle",
    kategori: "Obat",
    img: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800&auto=format&fit=crop",
    ringkas: "Daun merambat serbaguna, dari obat kumur hingga tradisi menyirih.",
    deskripsi: "Sirih adalah tanaman merambat dengan daun berbentuk jantung dan aroma khas karena kandungan minyak atsiri. Sejak lama dipakai dalam tradisi menyirih serta sebagai bahan obat herbal untuk kesehatan mulut dan luka ringan.",
    manfaat: ["Antiseptik alami & obat kumur", "Membantu menyembuhkan luka ringan", "Bagian dari tradisi adat menyirih", "Meredakan gatal akibat gigitan serangga"],
    cara: ["Rambatkan pada tiang atau pagar", "Siram secukupnya, hindari tanah tergenang", "Tumbuh baik di tempat teduh sebagian", "Petik daun tua untuk hasil terbaik"]
  },
  {
    id: "kantong-semar",
    nomor: "006",
    nama: "Kantong Semar",
    latin: "Nepenthes ampullaria",
    kategori: "Langka",
    img: "https://images.unsplash.com/photo-1622467827417-bbe6bde27fbf?q=80&w=800&auto=format&fit=crop",
    ringkas: "Tanaman karnivora endemik rawa gambut, kian langka tergerus alih fungsi lahan.",
    deskripsi: "Kantong semar adalah tanaman karnivora dengan kantong khusus untuk menjebak serangga sebagai sumber nutrisi tambahan di tanah miskin hara. Habitat rawa gambut dan hutan tropisnya terus menyusut akibat alih fungsi lahan, menjadikannya spesies yang dilindungi.",
    manfaat: ["Pengendali populasi serangga alami", "Indikator ekosistem rawa gambut sehat", "Objek riset botani karnivora", "Nilai koleksi konservasi tinggi"],
    cara: ["Gunakan media campuran pakis & sphagnum moss", "Jaga kelembapan tinggi, hindari air keran berkapur", "Letakkan di tempat teduh dengan sirkulasi udara baik", "Jangan beri pupuk kimia, biarkan menangkap serangga sendiri"]
  },
  {
    id: "jahe",
    nomor: "007",
    nama: "Jahe Merah",
    latin: "Zingiber officinale var. rubrum",
    kategori: "Obat",
    img: "https://images.unsplash.com/photo-1615485925873-63f61bf4d7c8?q=80&w=800&auto=format&fit=crop",
    ringkas: "Rimpang pedas-hangat andalan wedang, kaya senyawa gingerol.",
    deskripsi: "Jahe merah adalah varietas jahe dengan rimpang lebih kecil, berserat, dan berwarna kemerahan dengan rasa lebih pedas dibanding jahe biasa. Kandungan gingerolnya tinggi sehingga populer sebagai bahan wedang penghangat tubuh.",
    manfaat: ["Menghangatkan tubuh & meredakan masuk angin", "Bahan wedang & jamu tradisional", "Membantu meredakan mual", "Anti-inflamasi alami"],
    cara: ["Tanam rimpang bertunas di polybag atau tanah gembur", "Siram secukupnya, jaga kelembapan sedang", "Letakkan di tempat dengan sinar matahari cukup", "Panen setelah 10-12 bulan tanam"]
  },
  {
    id: "pisang",
    nomor: "008",
    nama: "Pisang Kepok",
    latin: "Musa acuminata × balbisiana",
    kategori: "Pangan",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800&auto=format&fit=crop",
    ringkas: "Buah serbaguna, dari gorengan hingga tepung MPASI.",
    deskripsi: "Pisang kepok memiliki bentuk buah agak pipih dengan daging padat berwarna kuning, populer diolah menjadi pisang goreng, kolak, hingga tepung. Tanaman ini mudah tumbuh di berbagai kondisi tanah dataran rendah tropis.",
    manfaat: ["Sumber energi & serat tinggi", "Bahan olahan pangan serbaguna", "Daun untuk pembungkus makanan tradisional", "Batang bisa jadi pakan ternak"],
    cara: ["Tanam anakan (bonggol) di lubang tanam subur", "Siram rutin terutama musim kemarau", "Buang daun kering & anakan berlebih", "Panen setelah 10-14 bulan saat buah penuh"]
  }
];

/* Kategori styling helper dipakai bareng di semua halaman */
function kategoriClass(k){
  const map = { "Hias":"hias", "Obat":"obat", "Pangan":"pangan", "Langka":"langka" };
  return map[k] || "hias";
}
