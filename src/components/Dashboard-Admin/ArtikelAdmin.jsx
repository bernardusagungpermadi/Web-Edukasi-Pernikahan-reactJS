import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArtikelAdmin = () => {
  const [artikels, setArtikels] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getArtikels();
    getCategories();
  }, []);

  const getArtikels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artikel');
      setArtikels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteArtikel = async (artikelId) => {
    try {
      await axios.delete(`http://localhost:5000/artikel/${artikelId}`);
      getArtikels(); // Panggil fungsi getArtikels() untuk memperbarui daftar artikel setelah menghapus
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : '';
  };

  return (
    <div className='users'>
      <h2 className='title'>Artikel</h2>
      <h3 className='subtitle'>List of Artikel</h3>

      <div className="add-artikel">
        <Link to="addArtikel">
          <button className='button-add'>Add Artikel</button>
        </Link>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {artikels.map((artikel, index) => (
            <tr key={artikel.id}>
              <td>{index + 1}</td>
              <td>{artikel.judul}</td>
              <td>{getCategoryName(artikel.categoryId)}</td>
              <td>
                <Link className='button-edit' to={`editArtikel/${artikel.id}`}>
                  Edit
                </Link>
                <button
                  onClick={() => deleteArtikel(artikel.id)}
                  className='button-delete'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtikelAdmin;
