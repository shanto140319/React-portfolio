import React from 'react'
import styled from 'styled-components'
import { reactbasic, reactAdvance, reactlarge } from '../react'
import Projects from '../components/Projects'
const ReactProjects = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h2>All React Projects</h2>
        <div className='underline'></div>
      </div>
      <main className='main'>
        <div className='bascis-projects'>
          <h2>Basic Projects</h2>
          <div className='underline'></div>
          <Projects data={reactbasic} />
        </div>
        <div className='advance-projects'>
          <h2>Advance Projects</h2>
          <div className='underline'></div>
          <Projects data={reactAdvance} />
        </div>
        <div className='large-projects'>
          <h2>Large Scale Projects</h2>
          <div className='underline'></div>
          <Projects data={reactlarge} />
        </div>
      </main>
    </Wrapper>
  )
}

export default ReactProjects

const Wrapper = styled.div`
  margin: 3rem 0;
  h2 {
    text-align: center;
    text-transform: capitalize;
    font-size: 2.5rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  .advance-projects {
    margin: 6rem 0;
  }
`
