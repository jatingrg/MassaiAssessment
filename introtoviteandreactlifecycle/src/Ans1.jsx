import React from 'react'
import './App.css'


function Ans1() {
  return (
   <>
   <div>
   <header className="header">
        <h1>My React Website</h1>
    </header>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <main className="main-content">
        <h2>Welcome to the Website</h2>
        <p>This is a simple layout built with React and Vite.</p>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
   </div>
   </>
  )
}

export default Ans1