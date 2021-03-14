import React from 'react'
import styled from 'styled-components'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const ContactMe = () => {
 return (
  <Wrapper>
    <div>
     <h4><FaLocationArrow/> Address : </h4>
    <p>Nabinogir 8, Mohammadpur Housing,<br/> Mohammadpur, Dhaka 1207
</p>
    </div>
     <div>
     <h4><FaPhone/> Phone : </h4>
    <p>01795307435 , </p>
    </div>
     <div>
     <h4><AiOutlineMail/> Email : </h4>
    <p>jahidul-15-9141@diu.edu.bd</p>
    </div>
   
  </Wrapper>
 )
}

export default ContactMe
 const Wrapper = styled.section `
 width:90%;
 @media (min-width:890px){
   width:60%;
 }
 display:flex;
 flex-direction: column;
 justify-content:center;
 margin: 0 auto;
background:var(--primaryLightColor);
padding:3rem 1rem;
     -webkit-box-shadow: 1px 4px 15px -1px #000000; 
box-shadow: 1px 4px 15px -1px #000000;
div{
 display:flex;
 align-items:center;
 justify-content:space-between;
 color:#fff;
 margin:1rem 0;
 flex-wrap:wrap;
}
div p{
 letter-spacing:.1rem;
}
 `