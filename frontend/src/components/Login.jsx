import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try { 
      const response = await axios.post("http://localhost:4140/user/login", {
        email,password
      });

      const handleResponse = (response) => {
        if (response.status === 200) { 

          localStorage.setItem('email', response.data.email);

          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful.',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/collection');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      };

      handleResponse(response);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center text-5xl font-semibold'>Login</h1>
      <form onSubmit={submit} className='bg-light p-4 mt-4 border-slate-200 drop-shadow-lg border-4 rounded shadow mx-auto' style={{ maxWidth: '400px', minHeight: '360px' }}>
        <div className='mt-3 mb-4  '>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn bg-slate-900  hover:bg-slate-800 text-white w-100'>
          Log In
        </button>
        <div className='mt-4 float-start'>New Here?<Link className='ms-1 text-blue-900 text-bold' to='/signup'>Signup</Link></div>

      </form>

    </div>
  );
}

export default Login;