import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './user.css';

const EditPost = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [userId, setUserId] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${postId}`)
      .then(response => {
        const post = response.data;
        setTitle(post.title);
        setBody(post.body);
        setThumbnail(post.thumbnail);
        setCategoryId(post.categoryId.toString());
        setUserId(post.userId.toString());
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:5000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [postId]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleUserChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const category = categories.find(cat => cat.name === categoryId);
      const categoryIdValue = category ? category.id : '';

      const postData = {
        title: title,
        body: body,
        thumbnail: thumbnail,
        categoryId: Number(categoryIdValue),
        userId: Number(userId),
      };

      await axios.put(`http://localhost:5000/posts/${postId}`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Post updated successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={handleThumbnailChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={categoryId}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="user">User ID:</label>
          <input
            type="number"
            id="user"
            value={userId}
            onChange={handleUserChange}
          />
          </div>
          <button type="submit">Update Post</button>
        </form>
      </div>
    );
};

export default EditPost;
