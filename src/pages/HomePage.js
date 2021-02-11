import React from 'react';
import "../App.css";


function HomePage() {
    return (
<div >
    <img
        src="https://i.imgur.com/DFjZCkS.png"
        class="navbar-logo"
        alt="React Bootstrap logo"
      />
    <div className="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
</div>
        
        
    )
}

export default HomePage
