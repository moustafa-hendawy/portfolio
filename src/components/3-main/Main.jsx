import React, { useState } from 'react'
import './main.css'
import {myProjects} from './myProjects'
function Main() {
  // const myProjects = [
  //   {'projectTitle': 'react project', 'category': 'react', 'imgPath': '/imgs/1.jpg'},
  //   {'projectTitle': 'css', 'category': 'css', 'imgPath': '/imgs/2.jpg'},
  //   {'projectTitle': 'javascript', 'category': 'javascript', 'imgPath': '/imgs/3.jpg'},
  //   {'projectTitle': 'react & MUI', 'category': 'react & MUI', 'imgPath': '/imgs/4.jpg'},
  //   {'projectTitle': 'Node & express', 'category': 'Node & express', 'imgPath': '/imgs/5.jpg'},
  // ]


  const [currentActive, setCurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

const handleClick = (buttonCategory) => {
  setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((i) => {
      const zzz = i.category.find((item) => {
          return item === buttonCategory
      })
      return zzz === buttonCategory;
    })
   setArr(newArr);
}


  return (
      <section className='flex'>
      <div className="left-section flex">
        <button 
            className={currentActive === 'all' ? 'active' : null}  
            onClick={
          () => {
              setCurrentActive('all');
              setArr(myProjects)
            }
          }

          
          >all projects</button>

        <button className={currentActive === 'css' ? 'active' : null}
         onClick={() => {
        //  setCurrentActive('css')
        //       setArr(myProjects.filter((i) => {
        //         return i.category === 'css'
        //       }
        //     ))
        //     }
        handleClick('css')}
         
         }>HTML & CSS</button>
        <button className={currentActive === 'js' ? 'active' : null}
         onClick={() => {
        //  setCurrentActive('javascript')
        //       setArr(myProjects.filter((i) => {
        //         return i.category === 'javascript'
        //       }))
            
      handleClick('js')
      }
         
         }>javascript</button>
        <button className={currentActive === 'react' ? 'active' : null}
         onClick={() => {
        //  setCurrentActive('react & MUI')
        //       setArr(myProjects.filter((i) => {
        //         return i.category === 'react & MUI'
        //       }))
            
      handleClick('react')
      }
         
         }>react & MUI</button>
        <button className={currentActive === 'node' ? 'active' : null}
         onClick={() => {
        //  setCurrentActive('Node & express')
        //       setArr(myProjects.filter((i) => {
        //         return i.category === 'Node & express'
        //       }))
            
     handleClick('node')
      }
         
         }>Node & express</button>


        {/* <button className='active'>all projects</button>
        <button>HTML & CSS</button>
        <button>javascript</button>
        <button>react & MUI</button>
        <button>Node & express</button> */}
      </div>

      <div className="right-section flex">
          {arr.map((item) => (

     <article className='card' style={{width: '266px'}}>
              {/* <img width={264 } src="/imgs/1.jpg" alt="" /> */}
              <img width={264 } src={item.imgPath} alt="" />
              <div className="box">
                {/* <h1 className="title">Landing Page 2</h1> */}
                <h1 className="title">{item.projectTitle}</h1>
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
