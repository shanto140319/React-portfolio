import React from 'react'
import About from '../components/About'
const Home = () => {

 return (
  <div>
   <section className="hero">
    <div className='hero-img'>
     <img src="./images/me1.jpg" alt="my"/>
    </div>
    <div className='hero-content'>
     <p>WELCOME TO MY WORLD</p>
     <h1>Hi, I’m Jahidul haque shanto</h1>
     <h2><span>frontend developer - react</span></h2>
     <h2>Based in bangladesh</h2>
    </div>
   </section>
   <About/>
  </div>
 )
}

export default Home
