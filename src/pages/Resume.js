import React, { useState } from 'react'
import styled from 'styled-components'

import { BsCircleFill } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import Cv from '../components/Cv';




const Resume = () => {
 const [show1,setshow1] =useState(true)
 const [show2,setshow2] =useState(false)
 const [show3,setshow3] =useState(false)
 return (
  <Wrapper>
   <div className="heading">
    <h2>Welcome To Resume Page</h2>
    <div className="underline"></div>
   </div>
   <section className="content">
    <div className="info">
     <h3>What I know about React</h3>
     <ul>
      <li> <h4><BsCircleFill/> Fundamentals</h4></li>
      <li><h4><BsCircleFill/>  React Hooks <button type="button" className='info-btn' onClick={()=>setshow1(!show1)}>{show1 === false ?<AiFillPlusCircle/>:<AiOutlineMinusCircle/>}</button></h4>
      <ul className={`sub ${show1 && 'shown'}`}>
         <li><h5><BsDash/> UseState </h5></li>
         <li><h5><BsDash/> useEffect  </h5></li>
         <li><h5><BsDash/> useReducer </h5></li>
         <li><h5><BsDash/> useRef</h5></li>
      </ul>
      </li>
      <li><h4><BsCircleFill/>  Context API <button type="button" className='info-btn' onClick={()=>setshow2(!show2)}>{show2 === false ?<AiFillPlusCircle/>:<AiOutlineMinusCircle/>}</button></h4>
          <ul className={`sub ${show2 && 'shown'}`}>
         <li><h5><BsDash/> useContext  </h5></li>
         </ul>
      </li>
      <li><h4> <BsCircleFill/>  React Router</h4></li>
      <li><h4><BsCircleFill/>  Custom Hooks  <button type="button" className='info-btn' onClick={()=>setshow3(!show3)}>{show3 === false ?<AiFillPlusCircle/>:<AiOutlineMinusCircle/>}</button></h4>
         <ul className={`sub ${show3 && 'shown'}`}>
         <li><h5><BsDash/>  useFetch   </h5></li> 
         </ul>
      </li>
      <li><h4> <BsCircleFill/>Styled components</h4></li>
     </ul>
    </div>
    <div className="resume">
       <Cv/>
    </div>
   </section>
  </Wrapper>
 )
}

export default Resume
 const Wrapper = styled.div `
 padding: 3rem auto;
 background:#d4d3cb;

 .heading h2{
    padding-top:3rem;
  text-align:center;
  text-transform:capitalize;
  @media(max-width:480px){
    font-size:1rem;
  }
 }
 .content{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  padding:1rem;
 }
 
 ul>li{
  margin:1.5rem 0;
 }
 ul.sub{
  margin-left:1.5rem;
  display:none;
  transition: all .3sec;
 }
 ul.shown{
   display:block;
 }
 li h4{
    display:flex;
    gap:1rem;
 }
 .info-btn{
    border:none;
    cursor:pointer;
    font-size:20px;
    background:transparent;
    
 }
 `