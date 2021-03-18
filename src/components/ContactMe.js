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
    <p>Nabinogir 8, Mohammadpur, Dhaka 1207
</p>
    </div>
     <div>
     <h4><FaPhone/> Phone : </h4>
    <p>01795307435, 01580899662 </p>
    </div>
     <div>
     <h4><AiOutlineMail/> Email : </h4>
    <p>jahidul-15-9141@diu.edu.bd, shanto140318@gmail.com</p>
    </div>
   
  </Wrapper>
 )
}

export default ContactMe
 const Wrapper = styled.section `
width:95%;
 @media (min-width:890px){
   padding:3rem;
}
 }
 margin: 0 auto;
background:var(--primaryLightColor);
padding:3rem .8rem;
-webkit-box-shadow: 1px 4px 15px -1px #000000; 
box-shadow: 1px 4px 15px -1px #000000;
div{
 margin:2rem 0;
}
div h4{
  margin:.5rem 0;
}
div p{
 letter-spacing:.2rem;
  font-size:.8rem;
  line-height:2rem;
   @media (min-width:890px){
   font-size:1rem;
}
}
 `