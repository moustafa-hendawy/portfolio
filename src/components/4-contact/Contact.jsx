import React from 'react'
import './contact.css'

function Contact() {
  return (
   <section className='cotact-us'>
      <h1 className='title'>
        <span className='icon-mail-envelope-closed'></span>
        Contact us
      </h1>
      <p className='sub-title'>contact us fo more information and get notified
        when I publish something new
      </p>
   <div className="flex">
       <form>
       <div className='flex' style={{marginBottom: '2rem'}}>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="" id="email" />
       </div>

        <div className='flex'>
            <label htmlFor="message">Your Message</label>
            <textarea name="" id="message"></textarea>   
          </div>  
        <button className='submit'>Submit</button>
      </form>
      <div className="animation"></div>
   </div>
   </section>
  )
}

export default Contact

