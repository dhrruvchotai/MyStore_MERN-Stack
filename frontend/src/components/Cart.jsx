import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  async function fetchData() {
    try {
      const result = await axios.get('http://localhost:4140/cart/items');
      console.log(result.data[0].products);
      setData(result.data[0].products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function deleteItem(objid) {

    try {
      const result = await axios.delete(`http://localhost:4140/cart/delete/${objid}`);
      console.log(result.data);
      navigate('/collection')

    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

  }


  useEffect(() => {
    fetchData();
  }, []);

  const finalData = data.map((obj) => (
    <div className='col col-3 mt-4' key={obj.id}>
      <div className="card mt-4 h-100" style={{ width: '20rem' }}>
        <img src={obj.images[0]} className="card-img-top" alt={obj.title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title text-center text-xl">{obj.title}</h5>
            <h5 className="card-title text-center text-xl mt-3"> Quantity : {obj.quantity}</h5>
          </div>
          <div>
            <p className="card-text text-2xl text-center mt-1">
              <b className="font-sans">Buy at just </b>
              <h3 className="mt-2 font-sans">{obj.price}$</h3>
            </p>
            <button
              className="btn bg-slate-900 text-white font-semibold font-sans d-flex mt-3 justify-center w-full hover:bg-slate-800"
              onClick={() => {
                deleteItem(obj.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container mt-3">
        <div className="row">{finalData}</div>
      </div>
    </>
  );
};

export default Cart;


