import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import '../Slider/sliderArtikel.css';
import populerImg from '../../asset/Download People Working On Project On Laptop for free.png';
import { Link } from 'react-router-dom';

const SimpleSlider = () => {
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
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <section className="slider__container">
      <Slider {...settings}>
        {artikels.map((artikel) => (
          <div className="artikel-box" key={artikel.id}>
            <div className="artikel-populer">
            <Link to={`blog/${artikel.id}`} > <img src={populerImg} alt="" /></Link>
              <p>{artikel.judul}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SimpleSlider;
