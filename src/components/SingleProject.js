import React from 'react'
import styled from 'styled-components'

const SingleProject = ({id,title,category,link,img}) => {

 return (
  <Wrapper>
    <a href={link} target="_blank" >
     <div className="img-container">
      <img src={img} alt={title}/>
     </div>
     <div>
     <h4>{category}</h4>
      <h4>{title}</h4>
     </div>
    </a>
  </Wrapper>
 )
}

export default SingleProject

const Wrapper = styled.section `
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
 .img-container{
 background: var(--primaryLightColor);
  height:280px;
  width:350px;
  border-radius:5px;
  border-bottom-left-radius:0px;
  border-bottom-right-radius:0px;
  padding:2rem;
  @media(max-width:320px){
    width:280px;
    height:240px;
    padding:1rem;
  }
}
 .img-container img{
  max-height:100%;
  max-width:100%;
  margin: 0 auto;
  border-radius:5px;
  object-fit:cover;
 }
 div{
  background:var(--offWhite);
  border:1px solid #ddd;
  border-top:none;
  padding:1rem;
 }
 div h4{
  text-transform:uppercase;
  text-align:center;
  margin:0;
 }
 a{
transition:.3s ease;
 }
 a:hover{
-webkit-box-shadow: -1px 14px 21px 0px rgba(0,0,0,0.23); 
box-shadow: -1px 14px 21px 0px rgba(0,0,0,0.23);
 transform: scale(1.04);
 }
`