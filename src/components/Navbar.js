import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {

 

    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${props.color}  navbar-dark bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand dark ${props.color}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active ${props.color}`} aria-current="page" to="/">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${props.color}`} aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${props.color}`} href="/">{props.links}</a>

        </li>
        
        
      </ul>
           <input type="color" name="colors" id={props.colorID} className="mx-3 color-value" />
      <div className="form-check form-switch mg-3">
  <input className="form-check-input" type="checkbox" onClick={props.Red} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.redbtn}</label>
</div>

      <div className="form-check form-switch mg-3">
  <input className="form-check-input" type="checkbox" onClick={props.change} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.changerbtn}</label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
  };