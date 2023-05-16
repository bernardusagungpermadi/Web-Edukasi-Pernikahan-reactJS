import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import heroImg from '../../asset/Couple_talking_online_and_meeting.png';
import './herosection.css';

const HeroSection = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artikel'); // Ganti URL API dengan URL yang sesuai
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/artikel?search=${searchText}`); // Ganti URL API dengan URL yang sesuai
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredResults = searchResults.filter((article) =>
    article.judul.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">PEMBELAJARAN DAN PEDOMAN DALAM PERNIKAHAN</h2>
              <p className="mb-4">
                "Edukasi Pernikahan, Gaya Hidup, Pola Asuh Anak, dan Seputar Rumah Tangga: Panduan Menarik untuk Membangun Keluarga Bahagia dengan Happy Familly!"
              </p>
              <div className="search">
                <input type="text" placeholder="Search" value={searchText} onChange={handleSearchInputChange} />
                <button className="btn__search" onClick={handleSearchButtonClick}>
                  Search
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="hero-img" />
          </Col>
        </Row>

        {searchText && (
          <Row>
            <Col lg="12">
            <div className="hasil-pencarian">
              <h5>Hasil Pencarian:</h5>
              <p>semua hasil pencarian '{searchText}'</p>
              {filteredResults.length > 0 ? (
                <ul>
                  {filteredResults.map((article) => (
                    <li key={article.id}>
                      <a href={`/artikel/blog/${article.id}`}>{article.judul}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-results">No results found.</p>
              )}
            </div>

            </Col>

          </Row>
        )}
      </Container>
    </section>
  );
};

export default HeroSection;
