import React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe'

const Contact = () => {
 return (
  <Wrapper>
   <div className="heading">
    <h2>Contact me</h2>
   </div>
   <div className="contact">
   <ContactMe/>
   <div className="form">
    <form action="https://formspree.io/f/xqkgrdla" method="POST" >
     <label htmlFor="name"> Name : </label>
     <input type="text" name="name" id="name"/>
      <label htmlFor="email">Email : </label>
     <input type="email" name="_replyto" id="email"/>
     <label htmlFor="message">Message : </label>
     <textarea name="message" id="message" cols="35" rows="5"></textarea>
     <button type="submit" className="btn submit-btn">Submit</button>
    </form>
    </div>
   </div>
  </Wrapper>
 )
}

export default Contact

const Wrapper = styled.section `
margin-bottom:3rem;

 .heading{
  border:2px solid var(--primaryLightColor);
  padding:2rem;
 margin:2rem auto;
 text-align:center;
 max-width:350px;
 }
 .heading h2{
  margin:0;
  padding:0;
  text-transform:capitalize;
 }
 .contact{
  display:grid;
  gap:2rem;
  margin:.5rem;
  align-items:center;
  
  @media (min-width:890px){
   grid-template-columns:auto auto;
   justify-items:center;
  }
    @media (min-width:490px){
   justify-items:center;
  }
 }
 .form{
  width:70%;
  padding:1rem;
   @media (min-width:890px){
  width:90%;
  }
  margin:1rem 0;
  label{
    text-transform:uppercase;
    display:block;
  }
  input{
   display:block;
   margin-top:.3rem;
   margin-bottom: 1rem ;
   padding:.5rem;
   width:250px;
   border: 2px solid  var(--primaryLightColor);
  }
  input:focus{
   outline:none;
  }
  textarea{
   border: 2px solid  var(--primaryLightColor);
   padding:.5rem;
   display:block;
  }
   textarea:focus{
   outline:none;
  }
  .submit-btn{
   color:#222;
   margin:1rem 0;
  }
 }


`