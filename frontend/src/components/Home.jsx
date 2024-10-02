import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './Home.css';

const Home = () => {
  useEffect(() => {
    Swal.fire({
      position:"top",
      icon:'warning',
      title: 'Please Login or SignUp First.',
      showConfirmButton: true,

      customClass: {
        popup: 'custom-alert', 
        confirmButton: 'custom-button',
      },
    });
  }, []); 

  return (
    <div className="main">
      <img src="/images/MyLogo.png" alt="Image not found!!"  className=''/>
    </div>
  );
}

export default Home;
