import React, { useState } from 'react';
import axios from 'axios';

const AddArtikelForm = () => {
  const [judul, setJudul] = useState('');
  const [konten, setKonten] = useState('');
  const [tanggalPublikasi, setTanggalPublikasi] = useState('');
  const [gambar, setGambar] = useState(null); // Ubah menjadi null sebagai tipe awal
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('gambar', gambar); // Tambahkan gambar ke objek FormData

    const artikelData = {
      judul,
      konten,
      tanggalPublikasi,
      categoryId
    };

    try {
      // Kirim permintaan multipart form data
      const response = await axios.post('http://localhost:5000/artikel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: artikelData
      });
      console.log(response.data);
      // Lakukan tindakan setelah berhasil menambahkan artikel
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setGambar(e.target.files[0]); // Ambil file gambar dari input
  };

  return (
    <div>
      <h2>Form Tambah Artikel</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data"> {/* Tambahkan encType */}
        <div>
          <label>Judul:</label>
          <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />
        </div>
        <div>
          <label>Konten:</label>
          <textarea value={konten} onChange={(e) => setKonten(e.target.value)} />
        </div>
        <div>
          <label>Tanggal Publikasi:</label>
          <input type="date" value={tanggalPublikasi} onChange={(e) => setTanggalPublikasi(e.target.value)} />
        </div>
        <div>
          <label>Gambar:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} /> 
        </div>
        <div>
          <label>Category ID:</label>
          <input type="number" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
        </div>
        <button type="submit">Tambah Artikel</button>
      </form>
    </div>
  );
};

export default AddArtikelForm;
