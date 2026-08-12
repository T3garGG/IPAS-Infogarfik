import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return res.status(500).json({ error: 'DATABASE_URL tidak dikonfigurasi' });
  }

  const sql = neon(connectionString);

  if (req.method === 'GET') {
    try {
      const result = await sql`
        SELECT id, nama, kategori, deskripsi, img, ts
        FROM gallery
        ORDER BY ts DESC
      `;
      return res.status(200).json(result);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Gagal memuat galeri' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { nama, kategori, desc, img, ts } = req.body;
      if (!nama || !img) {
        return res.status(400).json({ error: 'Nama & foto wajib diisi' });
      }
      const result = await sql`
        INSERT INTO gallery (nama, kategori, deskripsi, img, ts)
        VALUES (${nama}, ${kategori || 'Hias'}, ${desc || ''}, ${img}, ${ts || Date.now()})
        RETURNING id, nama, kategori, deskripsi, img, ts
      `;
      return res.status(200).json(result[0]);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Gagal menyimpan foto' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'ID wajib diisi' });
      }
      await sql`DELETE FROM gallery WHERE id = ${id}`;
      return res.status(200).json({ success: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Gagal menghapus foto' });
    }
  }

  return res.status(405).json({ error: 'Method tidak diizinkan' });
}
