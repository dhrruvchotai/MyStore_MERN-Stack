import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
     const response =  await axios.post("http://localhost:4140/user/signup", {
        email,
        password,
        username
      });

      const handleResponse = (response) => {
        if (response.status === 200) { 
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/home');
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
      <h1 className='text-center text-5xl font-semibold '>Sign Up</h1>
      <form onSubmit={submit} className='bg-light p-4 mt-4 drop-shadow-lg border-4 border-slate-200  rounded shadow mx-auto mt-3' style={{ maxWidth: '450px', minHeight: '450px'  }}>
      <div className='mt-3 mb-4'>
          <label htmlFor='email' className='form-label'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter your Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
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
        <button type='submit' className='btn btn-primary w-100'>
          Sign Up
        </button>

        <div className='mt-4 float-start'>Already have an account?<Link className='ms-1' to='/login'>Login</Link></div>
      </form>

      
    </div>
  );
}

export default Signup;