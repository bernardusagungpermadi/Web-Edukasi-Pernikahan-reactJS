import React , {useState} from 'react';
import './user.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const saveUser = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role
            });
            navigate("/dashboard/user")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
   

  return (
    <div className='users'>
      
      <h2 className='title'>Users</h2>
      <h3 className='subtitle'>List of Users</h3>
      
      <form onSubmit={saveUser}>
        <p className='has-text-center'>{msg}</p>
            <div className="field">
                <label className='label'>Name</label>
                    <div className="control">
                        <input type="text" 
                        className='input' 
                        value={name} onChange={(e)=> setName(e.target.value)} 
                        placeholder='name' />
                    </div>
                </div>

            <div className="field">
                <label className='label'>Email</label>
                    <div className="control">
                        <input type="email" 
                        className='input' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                        placeholder='email' />
                    </div>
            </div>

            <div className="field">
            <label className='label'>Password</label>
                <div className="control">
                    <input type="password" className='input' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='*******' />
                </div>
            </div>

            <div className="field">
                <label className='label'>Confirm Password</label>
                    <div className="control">
                        <input type="password" className='input' value={confPassword} onChange={(e)=> setConfPassword(e.target.value)} placeholder='*******' />
                    </div>
            </div>

            <div className="field">
                <label className='label'>Role</label>
                    <div className="control">
                        <div className="select">
                            <select value={role} onChange={(e)=> setRole(e.target.value)} name="" id="">
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
            </div>

            <div className="field">
                <div className="control">
                    <button 
                    className='button-save' 
                    type='submit'>Save</button>
                </div>
            </div>
        </form>
    </div> 
  )
}

export default FormAddUser;