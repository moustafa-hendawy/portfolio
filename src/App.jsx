import './index.css'
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Contact from "./components/4-contact/Contact"
import Footer from "./components/5-footer/Footer"
import { useEffect, useState } from 'react'


function App() {
const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
   window.addEventListener('scroll', () => {
     if (scrollY < 300) {
      setShowArrow(false)
    } else {
      setShowArrow(true);
    }
   })
  }, [])
  return (
    <div id='up' className="container">
      <Header />
     
      <Hero />
            <div className="divider" />

      <Main />
            <div className="divider" />

      <Contact />
            <div className="divider" />

      <Footer />

    <a style={{opacity: showArrow ? 1 : 0, transition: '1s'}} href="#up">
       <button className='icon-circle-up'></button>
     </a>
  
    </div>
  )
}

export default App
