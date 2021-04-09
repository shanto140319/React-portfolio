import React from 'react'
import styled from 'styled-components'
import SingleProject from './SingleProject'

const Projects = ({ data }) => {
  return (
    <Wrapper className='section-center'>
      {data.map((item) => {
        return (
          <section>
            <SingleProject key={item.id} {...item} />
          </section>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 4rem;
  row-gap: 2rem;
  padding: 0 1rem;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export default Projects
