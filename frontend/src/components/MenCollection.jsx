import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MenCollection = () => {
  const [data, setData] = useState([]);
  const [varname, setVarname] = useState('cap');
  const navigate = useNavigate();
  

  async function fetchData() {
    try {
      const result = await axios.get('http://localhost:4140/product/products');
      // console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function addToCart(objid){
    const result = await axios.get(`http://localhost:4140/product/products/${objid}`);
    // console.log(objid)
    console.log(result.data);
    navigate('/home');

  }

  useEffect(() => {
    fetchData();
  }, []);

  const SearchChange = (obj) => {
    setVarname(obj.target.value);
  };

  const SearchSubmit = (obj) => {
    obj.preventDefault();
    fetchData(varname);
  };

  let finalData = data.map((obj) => {
    return (
      <div className='col col-3 mt-4' key={obj.id}>
        <div className="card mt-4 h-100" style={{ width: '20rem' }}>
          <img src={obj.images[0]} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{obj.name}</h5>
              <p className="card-text text-center text-xl">{obj.title}</p>
            </div>
            <div>
              <p className="card-text text-2xl text-center mt-1">
                <b className="font-sans">Buy at just </b>
                <h3 className="mt-2 font-sans">{obj.price}$</h3>
              </p>
              <Link
                to={`/cart/product/${obj._id}`}
                className="btn bg-slate-900 text-white font-semibold font-sans d-flex mt-3 justify-center hover:bg-slate-800"
                onClick={() => addToCart(obj._id)}
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <img src="images/categoryspecials.webp" alt="Image not found!!" className="mt-4" />
      <div className="container mt-3">
        <div className="row">{finalData}</div>
      </div>
    </>
  );
};

export default MenCollection;
