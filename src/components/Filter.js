import React,{useState} from 'react'
import styled from 'styled-components'

const Filter = ({categories,filterItem,value}) => {
  console.log(value);
 return (
  <Wrapper>
   <h4>Filter By Project</h4>
   <select name="filter" id="filter" onChange={filterItem}>
    {categories.map((category)=>{
        return(
          <option className="option" value={category}>{category}</option>
        )
      })}
   </select>
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
  select{
    height:2rem;
    width:10rem;
    cursor:pointer;
    text-transform:capitalize;
    text-align:center;
    border:2px solid var(--primaryLightColor);
    letter-spacing:.3rem;
    font-weight:600;
    border-radius:.3rem;
    padding:0 .5rem;
  }
  select:focus{
    outline:none;
  }
  .option{
    font-weight:600;
  }
 
`