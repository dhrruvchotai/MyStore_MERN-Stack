import React from "react";
import './Layout.css'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-collapse navbar-collapse-lg navbar-expand-lg bg-slate-50 navbar-bg-body-tertiary mb-4 sticky-top opacity-90" style={{ width: "98.70vw"}}>
        <div className="container-fluid">
          <img src="/images/MyLogo.png" style={{ width: '11vh'}} alt="Logo"/>

          <div className="flex-grow-1 mt-2 text-center">
            <form className="d-flex justify-content-center font-sans font-bold" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "40vw" , height:"7vh",borderColor:"black",borderWidth:0.2+"vh"}} 
              />
              <button className="btn bg-slate-900 w-24 text-lg rounded-xl text-white" type="submit" style={{height:6+"vh",marginTop:0.5+"vh",letterSpacing:"0.8px"}}>
                Search
              </button>
            </form>
          </div>

          <div className="d-flex justify-content-space-between me-5">   
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link btn  active fs-5 me-2 font-sans" aria-current="page" to="/home">
                <img src="/images/homeicon.png" alt="Image not found!!" style={{height:6+"vh",width:"3vw"}} className=" text-slate-900"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn  active fs-5 me-2 font-sans " aria-current="page" to="/cart">
                  <img src="/images/shopping-bag.png" alt="Image not found!!" style={{height:6+"vh",width:"3.2vw"}} className="text-slate-900" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mt-2 fs-5 h-20 font-sans ms-3 me-3 bg-slate-900 text-white rounded-xl" to="/login" style={{width:5.5+"vw", textAlign:"center", height:6.3+"vh", verticalAlign:"center",letterSpacing:"1px"}}>
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mt-2 fs-5 font-sans bg-slate-900 text-white rounded-xl" to="/signup" style={{width:5.8+"vw", textAlign:"center", height:6.3+"vh", verticalAlign:"center",letterSpacing:"1px"}}>
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

