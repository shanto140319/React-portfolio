import React from 'react'
import SingleProject from './SingleProject'

const Projects = ({data}) => {
 return (
  <div className="projects">
    
      {data.map((item)=>{
        
        return (
            <section>
              <SingleProject key={item.id} {...item}/>
            </section>
        )
        
      })}
    </div>
 )
}

export default Projects
