import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Post-Artikel/post.css';
import imgArtikel01 from '../../asset/Download People Working On Project On Laptop for free.png';
import imgBanner from '../../asset/Download People Working On Project On Laptop for free.png';
import { Link } from 'react-router-dom';

export const Post = () => {
  const [artikels, setArtikels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lastArticle, setLastArticle] = useState(null);

  useEffect(() => {
    getArtikels();
    getCategories();
  }, []);

  const getArtikels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artikel');
      setArtikels(response.data);
      if (response.data.length > 0) {
        setLastArticle(response.data[response.data.length - 1]);
      }
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

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : '';
  };

  return (
    <section className='post__container'>
      <section className='artikel-populer'>
        <h5>Artikel Populer</h5>
        <div className='artikel-populer-container'>
          <div className='banner-container'>
            {lastArticle && (
              <article className='banner-container' key={lastArticle.id}>
                <div className='banner-container'>
                  <Link to={`blog/${lastArticle.id}`} className='banner-img'><img src={imgBanner} alt='' /></Link>
                    <div className='judul-terkini'>
                      <h4>{lastArticle.judul}</h4>
                    </div>
                </div>
              </article>
            )}
          </div>

          <section className='artikel-list-container'>
            <div className='artikel-list'>
              <table>
                <thead>
                  <tr>
                    <th>List Artikel</th>
                  </tr>
                </thead>
                <tbody>
                  {artikels
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 5)
                    .map((artikel) => (
                      <tr key={artikel.id}>
                        <div className='navigate-judul'>
                        <td><Link to={`blog/${artikel.id}`}>{artikel.judul}</Link></td>
                        </div>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </section>

      <section className='artikel-terbaru-container'>
        <div className='artikel__terbaru'>
          <h5>Artikel Terbaru</h5>
          <div className='artikel__container'>
            {artikels.map((artikel) => (
              <article className='artikel' key={artikel.id}>
                <div className='edukasi__image'>
                  <img src={imgArtikel01} alt='' />
                  <Link to={`blog/${artikel.id}`} className='article__btn'>Lanjut</Link>
                </div>
                <p className='artikel__category'>{getCategoryName(artikel.categoryId)}</p>
                <h5>{artikel.judul}</h5>
                <div><p>{artikel.konten}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};