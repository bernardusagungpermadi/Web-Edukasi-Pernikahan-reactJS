import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './artikelSection.css';
import artikelImg01 from '../../asset/Free Photo _ Senior couple waving their hands during online video call on laptop.png';

const Artikel = () => {
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    getArtikels();
  }, []);

  const getArtikels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artikel');
      setArtikels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const sortedArtikels = [...artikels].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const getFirstTenSentences = (text) => {
    const sentences = text.split('.').map((sentence) => sentence.trim()).filter((sentence) => sentence !== '');
    return sentences.slice(0, 10).join('. ') + '.';
  };

  return (
    <section>
      <Container>
        <Row>
          <div className='article__title'>
            <h2>Artikel Terkini</h2>
          </div>

          <Col>
            <div className='article d-flex'>
              {sortedArtikels.slice(0, 3).map((artikel) => (
                <div className='article__content' key={artikel.id}>
                  <div className='article__img'>
                    <img src={artikelImg01} alt='' />
                    <Link to={`artikel/blog/${artikel.id}`} className='article__btn'>Lanjut</Link>
                    <h5>{artikel.judul}</h5>
                    <p>{getFirstTenSentences(artikel.konten)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Artikel;
