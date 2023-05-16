import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../Courses/courses.css';

function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => {
        const posts = response.data;
        const courses = posts.map(post => {
          const category = categories.find(cat => cat.id === post.categoryId);
          return {
            id: post.id,
            category: category ? category.name : '',
            title: post.title,
            body: post.body,
            thumbnail: `https://img.youtube.com/vi/${post.videoId}/sddefault.jpg`,
            cover: post.cover, // Tambahkan properti cover untuk gambar cover
            views: `${post.views} view`
          };
        });
        setCoursesData(courses);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedCategory, categories]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCoursesData = selectedCategory
    ? coursesData.filter(course => course.category === selectedCategory)
    : coursesData;

  return (
    <section>
      <Container>
        <div className='category__courses d-flex'>
          <h5>Kategori :</h5>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className='courses'>
          {filteredCoursesData.map((course, index) => (
            <div className='course__container' key={index}>
              <div className='course__image__container'>
                {course.cover ? (
                  <img src={course.cover} alt="Course Cover" />
                ) : (
                  <div className="placeholder">Cover Not Available</div>
                )}
              </div>
              <div className="course__body">
                <div className="course__category">
                  <p>{course.category}</p>
                </div>
                <div className="course_title">
                  <Link to={`content/${course.id}`}>{course.title}</Link>
                </div>
                <div className='card-body'>
                  <p>{course.body}</p>
                </div>
                <div className="course__respons d-flex">
                  <div className="course-like">
                    <span>Love</span>
                  </div>
                  <div className="courses__views">
                    {course.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Courses;
