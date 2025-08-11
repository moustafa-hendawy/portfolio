import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react"
import done from '../../../public/animations/Success.json'
import contactAnimation from '../../../public/animations/Contact us.json'
function Contact() {
    const [state, handleSubmit] = useForm("xanbaolo");
    console.log(state)
  // if (state.succeeded) {
  //     return <h1>Thanks for joining!</h1>;
  // }

  return (
   <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail-envelope-closed'></span>
        Contact us
      </h1>
      <p className='sub-title'>contact us fo more information and get notified
        when I publish something new
      </p>
   <div className="flex" style={{justifyContent: 'space-between'}}>
       <form onSubmit={handleSubmit}>
       <div className='flex' style={{marginBottom: '2rem'}}>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
      />
       </div>

        <div className='flex'>
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message"></textarea> 
              <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
      />  
          </div>  
        <button type="submit" disabled={state.submitting} className='submit'>
          {state.submitting ? 'submitting...' : 'Submit'}
          </button>
        {state.succeeded && (
          <p className='flex' style={{fontSize: '18px', marginTop: '1.7rem'}}>
           <Lottie animationData={done} loop={false} style={{height: '2rem', translate: '0 -70px'}}/>
            Your message has been sent successfully</p>)}
      </form>
      <div className="animation">
          <Lottie className='contact-animation' animationData={contactAnimation} style={{height: 300}} />
      </div>
   </div>
   </section>
  )
}

export default Contact

