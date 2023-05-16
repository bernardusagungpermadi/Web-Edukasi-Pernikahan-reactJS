import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';
import './post.css';

const SidebarArtikel = () => {
  const [artikelList, setArtikelList] = useState([]);
  const [kategoriTerkini, setKategoriTerkini] = useState([]);

  useEffect(() => {
    fetchArtikelList();
    
  }, []);

  const fetchArtikelList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artikel'); // Ganti URL API dengan URL yang sesuai
      setArtikelList(response.data);
      setKategoriTerkini([...new Set(response.data.map((artikel) => artikel.category))]);
    } catch (error) {
      console.error(error);
    }
  };

  const getArtikelByKategori = (kategori) => {
    return artikelList.filter((artikel) => artikel.category === kategori);
  };

  return (
    <aside className="sidebar-artikel">
      <Container>
        <div className="sidebar-section">
          <h4>Topik Terkini</h4>
          <ul className="topik-list">
            {kategoriTerkini.map((kategori, index) => (
              <li key={index}>
                <Link to={`/kategori/${kategori}`}>{kategori}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h4>Artikel Terkait</h4>
          <ul className="artikel-list">
            {kategoriTerkini.map((kategori) => (
              <li key={kategori}>
                <h5>{kategori}</h5>
                <ul>
                  {getArtikelByKategori(kategori).map((artikel) => (
                    <li key={artikel.id}>
                      <Link to={`/artikel/blog/${artikel.id}`}>{artikel.judul}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </aside>
  );
};

export default SidebarArtikel;
