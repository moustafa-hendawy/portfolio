import React, { useEffect } from 'react'
import './header.css'
import { useState } from 'react'
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');

    useEffect(() => {
      if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    },[theme])


  return (
    <header className='flex'>
        <button className='menu icon-menu' onClick={() => setShowMenu(true)}></button>
        <div />
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
      <button className='moon-mode' onClick={() => {
        //add to LS
        localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark');
        //Get value from LS
        setTheme(localStorage.getItem('currentMode'));
      }}>
        {theme === 'dark' ? (<span className='icon-IcoMoon'></span>) : (<span className='icon-sun'></span>)  }
      </button>
 
   

    {showMenu && (
          <div className='fixed'>
        <ul className='model flex'>
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
