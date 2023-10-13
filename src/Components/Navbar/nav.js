import React from 'react'
import './nav.css';
import { FiHome } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function nav({ handleInputChange, search }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={search}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link to="/">
          <FiHome className="nav-icons" />
        </Link>
        <Link to="/Cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link to="/Login">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}
