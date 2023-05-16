import React, { useState, useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPosts();
    getCategories();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
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

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`);
      getPosts(); // Panggil fungsi getPosts() untuk memperbarui daftar postingan setelah menghapus
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
      <h2 className='title'>Post</h2>
      <h3 className='subtitle'>List of Post</h3>

      <div className="add-post">
        <Link to="addPost">
          <button className='button-add'>Add Post</button>
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
        {posts.map((post, index) => (
  <tr key={post.id}>
    <td>{index + 1}</td>
    <td>{post.title}</td>
    <td>{getCategoryName(post.categoryId)}</td>
    <td>
      <Link className='button-edit' to={`editPost/${post.id}`}> 
        Edit
      </Link>
      <button
        onClick={() => deletePost(post.id)} 
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

export default PostAdmin;
