import React , {useState} from 'react'
import {data} from '../data'
const About = () => {
  const[value,setValue] = useState(0);
   const{heading1,desc1,heading2,desc2,heading3,desc3} = data[value];
 return (
  <section className="about">
   <div className="about-img">
    <img src="./images/me.png" alt="my-image"/>
   </div>
   <div className="about-content">
    <div className="about-me">
     <h2>About Me</h2>
     <p>Hello! I’m Jahidul Haque Shanto. I am expert in Frontend Development - React. I have completed my B.sc degree from Daffodil International University in Computer Science and Engineering. I have programming knowledge . My first programming language was 'C'. Now I am working with React which I like so much.</p>
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
