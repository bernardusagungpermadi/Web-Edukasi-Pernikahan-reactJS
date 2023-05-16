import React, { useState, useEffect } from 'react';
import { Container,Row } from 'reactstrap';
import axios from 'axios';
import '../Search/search.css';

export const Search = () => {
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
    <Container>
      <Row>
      <section className="search__container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button className="btn__search" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>
        {searchText && (
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
        )}
      </section>
      </Row>
    </Container>
  );
};
