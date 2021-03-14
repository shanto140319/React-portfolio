import React , {useState} from 'react'
import {data} from '../data'
const About = () => {
  const[value,setValue] = useState(0);
   const{heading1,desc1,heading2,desc2,heading3,desc3} = data[value];
 return (
  <section className="about">
   <div className="about-img">
    <img src="http://trydo.rainbowit.net/assets/images/about/about-8.jpg" alt="my-image"/>
   </div>
   <div className="about-content">
    <div className="about-me">
     <h2>About Me</h2>
     <p>Hello! I’m Shanto, a software engineer based in Bangladesh,
I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. I love javascript. Currently I am learning React which I love the most .</p>
    </div>
    <div className="about-category">
     {data.map((item,index)=>{
       return(
        <button key={data.id} className={`btn ${index===value && 'active-btn'}`} onClick={()=>setValue(index)}>
         {item.type}
        </button>
       )
     })}
    </div>
    <article className='info'>
     <h4>{heading1}</h4>
     <p>{desc1}</p>
     <h4>{heading2}</h4>
     <p>{desc2}</p>
     <h4>{heading3}</h4>
     <p>{desc3}</p>
    </article>
   </div>
  </section>
 )
}

export default About
