import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgBanner from '../../asset/Download People Working On Project On Laptop for free.png';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import SidebarArtikel from './ArtikelSidebar';

const BlogPost = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get(`http://localhost:5000/artikel/${id}`)
      .then(response => {
        setArtikel(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : '';
  };

  return (
    <Container>
      <div className='breadcrumbs'>
        <Breadcrumbs/>
      </div>

      <div className="blog-post">
        <Row>
          <Col>
            <div>
            <h2 className="blog-title">{artikel ? artikel.judul : "Loading..."}</h2>
            </div>
            
            <div className="blog-meta"> 
              <span className="blog-date">{artikel ? artikel.tanggalPublikasi : "Loading..."}</span> |
              <span className="blog-author">{artikel ? artikel.id : "Loading..."}</span> |
              <span className="blog-category">{artikel ? getCategoryName(artikel.categoryId) : "Loading..."}</span>
            </div>
            <span className="blog-gambar">{artikel ? <img src={imgBanner} alt='' /> : "Loading..."}</span>
            <p>{artikel ? artikel.konten : "Loading..."}</p>
          </Col>

          <Col>
          <SidebarArtikel/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BlogPost;
