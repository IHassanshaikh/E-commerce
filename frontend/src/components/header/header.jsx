// Header.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./header.css";
import FullPageSearchModal from "./SearchModal";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <header
      className={`navbar p-3 bg-primary text-white ${
        scroll ? "stickynav1" : ""
      }`}
    >
      <div className="nav_main d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <NavLink
            to="/"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <ul className="nav mb-2">
            <li>
              <NavLink to="/" className="navs nav-link text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllProduct" className="navs nav-link text-white">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className="navs nav-link text-white">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navs nav-link text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="nav_button btn btn-outline-light me-2"
          >
            Login
          </button>
          <button type="button" className="nav_button btn btn-warning">
            Sign-up
          </button>
        </div>
        <div className="icons">
          <NavLink to="#">
            <a className="icon" onClick={openModal}>
              <i className="cart bi bi-search"></i>
            </a>
          </NavLink>
          <NavLink to="/Cart">
            <a className="icon">
              <i className="search bi bi-cart-fill"></i>
            </a>
          </NavLink>
        </div>
      </div>
      <FullPageSearchModal show={showModal} handleClose={closeModal} />
    </header>
  );
};

export default Header;
