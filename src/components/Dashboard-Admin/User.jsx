import React, {useState, useEffect} from 'react'
import './user.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  }


  return (
    <div className='users'>
      
      <h2 className='title'>Users</h2>
      <h3 className='subtitle'>List of Users</h3>

      <div className="add-user"><Link to= "add">
        <button className='button-add' > 
        Add User
        </button>
        </Link>
      </div>
      
      <table className='table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key = {user.uuid}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <Link className='button-edit'
              to={`edit/${user.uuid}`}>
                Edit
              </Link>

              <button
              onClick={() => deleteUser(user.uuid)}
              className='button-delete'>
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User