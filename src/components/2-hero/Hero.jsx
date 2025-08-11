import React, { useRef } from 'react'
import './hero.css'
import Lottie from "lottie-react"
import devAnimation from '../../../public/animations/dev.json'
import { motion } from "motion/react"                          
function Hero() {
  const ref = useRef(null);
  return (
   <section className='hero-section flex'>
      <div className="left-section">
          <div className="parent-avatar">
                <motion.img
                 src="/me.png" className='avatar' alt=""
                   initial={{transform: "scale(0)"}}
                animate={{transform: "scale(1.1)"}}
                transition={{damping: 6, type: 'spring', stiffness: 100}}
                 
                 
                 />
              
                <span className='icon-verified'> </span>
          </div>
          <motion.h1 className='title' style={{display: 'flex', flexWrap: 'wrap'}}
            initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
          
          >Software designer, founder,
             and amateur astronaut.</motion.h1>
          <p className='sub-title'>I’m Spencer, a software designer
             and entrepreneur based in New York City. I’m the founder and CEO of Planetaria,
              where we develop technologies that empower regular people to explore space on their own terms.</p>
          <div className="icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github1"></div>
            <div className="icon icon-linkedin"></div>
          </div>
      </div>
      <div className="right-section">
          <Lottie 
          // https://lottiereact.com
            lottieRef={ref}
            onLoadedImages={() => {
              ref.current.setSpeed(0.5)
            }}
            className='animation' animationData={devAnimation} style={{width: '100%', translate: '100px 55px'}} />
      </div>
   </section>
  )
}

export default Hero
