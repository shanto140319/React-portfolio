import React from 'react'
import styled from 'styled-components'
import {reactbasic,reactAdvance} from '../react'
import Projects from '../components/Projects';
const ReactProjects = () => {
 return (
  <Wrapper>
   <div className="header">
    <h2>All React Projects</h2>
    <div className="underline"></div>
   </div>
   <main className="main">
    <div className="bascis-projects">
     <h2>Basic Projects</h2>
     <div className="underline"></div>
      <Projects data={reactbasic}/>
    </div>
        <div className="advance-projects">
     <h2>Advance Projects</h2>
     <div className="underline"></div>
        <Projects data={reactAdvance}/>
    </div>
    
   </main>
  </Wrapper>
 )
}

export default ReactProjects

const Wrapper = styled.div `
 margin:3rem 0;
 h2{
  text-align:center;
  text-transform:capitalize;
  font-size:2.5rem;
 }
 .projects{
  display:grid;
   grid-row-gap:4rem;
   @media (min-width:790px){
      grid-template-columns: auto auto;
    }
     @media (min-width:1180px){
      grid-template-columns: auto auto auto;
    }
 }
 .advance-projects{
   margin:6rem 0;
 }
`