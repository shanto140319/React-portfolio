import React,{useState} from 'react'
import styled from 'styled-components'

const Filter = ({categories,filterItem,value}) => {
  console.log(value);
 return (
  <Wrapper>
   <h4>Filter By Course</h4>
   <div className="btn-container">
      {categories.map((category,index)=>{
        return(
          <button key={index} type="button" className={`btn filter-btn ${index===value && 'active-btn'}`} onClick={()=>filterItem(category,index)}>
            {category}
          </button>
        )
      })}
    </div>
  </Wrapper>
 )
}

export default Filter

const Wrapper = styled.div `
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  margin-bottom:2rem;

.btn-container{
 justify-content:center;
  align-items:center;
 display:flex;
 flex-wrap:wrap;
  gap:1rem;

  .filter-btn{
    color:#222;
  }
}
  
`