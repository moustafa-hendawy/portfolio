import React from 'react'
import './header.css'
import { useState } from 'react'
function Header() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='flex'>
        <button className='menu icon-menu' onClick={() => setShowMenu(true)}></button>
      <nav>
       <ul className='flex'>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="">Articles</a>
        </li>
        <li>
            <a href="">Projects</a>
        </li>
        <li>
            <a href="">Speaking</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
       </ul>
      </nav>
      <button className='moon-mode'>
        <span className='icon-IcoMoon'></span>
      </button>

    {showMenu && (
          <div className='fixed'>
        <ul className='model'>
            <li><button className='icon-cross' onClick={() => setShowMenu(false)}></button></li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </div>
    )}
    </header>
  )
}

export default Header
