import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Filter from '../components/Filter'
import Projects from '../components/Projects';
import {allprojects} from '../data'

const ProjectPage = () => {
 const allCategories = ['all', ...new Set(allprojects.map((item)=>item.category))];
  const [project,setProject] = useState(allprojects)
  const [categories,setCategories] = useState(allCategories)
  const[value,setValue] = useState(0);
  const filterItem =(c,i)=>{
    console.log(c)
      if(c==='all'){
          setProject(allprojects)
          setValue(0);
      }
      else{
          let newPeojects = allprojects.filter((item)=>item.category === c)
          setProject(newPeojects)
          setValue(i);
      }
  }
 return (
  <Wrapper>
    <div className="upper">
      <h2>projects</h2>
      <div className="underline"></div>
      <Filter categories={categories} filterItem={filterItem} value={value}/>
    </div>
    <div className="react">
      <Link to ="/projects/react" ><button className='btn react-btn'>go to react projects</button></Link>
    </div>
  <Projects data={project}/>
  </Wrapper>
 )
}

export default ProjectPage

const Wrapper = styled.section `
  margin:3rem 0;
  
  .upper{
    h2{
      text-align:center;
      text-transform:uppercase;
      font-size:30px;
      margin-bottom:0;
    }
    
  }
  .react{
    display:flex;
    justify-content:center;
  }
  .react-btn{
    color:#222;
  }
  .projects{
    display:grid;
    gap:2rem;
    margin-top:5rem;

    @media (min-width:790px){
      grid-template-columns: auto auto;
    }
     @media (min-width:1180px){
      grid-template-columns: auto auto auto;
    }
  }
`