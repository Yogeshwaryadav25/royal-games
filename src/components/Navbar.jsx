import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { cart =[], favorites =[]} = useStore();
  return (
    <header className="navbar">
      <Link to="/"></Link>
      <div className="nav-left">
        <div className="logo">
          <span className="icon">🎮</span> 

        </div>

        <nav className="nav-links">
          <a href="#store">Store</a>
          <a href="#news">News</a>
          <Link to="/browse">Browse</Link>
          
          
        </nav>
      </div>

      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="icon">🔍</span>
        </div>

        <Link to="/favorites">❤️({favorites.length})</Link> 
        <Link to="/cart">🛒({cart.length})</Link> 
<Link to="/login">
        <button className="login-btn">Sign In</button></Link>
      </div>
    </header>
  );
}
