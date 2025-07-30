import React from 'react'
import './main.css'

function Main() {
  return (
      <section className='flex'>
      <div className="left-section flex">
        <button className='active'>all projects</button>
        <button>HTML & CSS</button>
        <button>javascript</button>
        <button>react & MUI</button>
        <button>Node & express</button>
      </div>

      <div className="right-section flex">
          {['aa', 'bb', 'cc','dd', 'ee', 'ff'].map((item) => (

     <article className='card' style={{width: '266px'}}>
              <img width={264 } src="/imgs/1.jpg" alt="" />
              <div className="box">
                <h1 className="title">Landing Page 2</h1>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Reprehenderit, unde odit autem laborum recusandae quo eius ex fugiat sint,
                   maiores officia, ea dolorem architecto eum vel! Omnis saepe velit veritatis.</p>
               
                <div className="flex icons">
                  <div style={{gap: '11px'}} className="flex">
                    <div className='icon-link'></div>
                  <div className='icon-github'></div>
                  </div>
                  <a className='flex link' href="">more
                    <span style={{alignSelf: "center", marginLeft: '4px'}} className='icon-arrow-right2'></span>
                  </a>
                </div>
              </div>
          
          </article>
          )) }

     
      </div>
    </section>
  )
}

export default Main
