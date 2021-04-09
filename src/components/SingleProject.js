import React from 'react'
import styled from 'styled-components'

const SingleProject = ({ title, category, link, img }) => {
  return (
    <Wrapper>
      <a href={link} target='_blank'>
        <div className='img-container'>
          <img src={img} alt={title} />
        </div>
        <div className='desc'>
          <h4>{category}</h4>
          <h4>{title}</h4>
        </div>
      </a>
    </Wrapper>
  )
}

export default SingleProject

const Wrapper = styled.section`
  width: 350px;
  height: 350px;
  ${'' /* border: 1px solid #ddd; */}
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.56);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.56);
  @media (max-width: 420px) {
    width: 280px;
    height: 280px;
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 280px;
    @media (max-width: 420px) {
      height: 210px;
    }
  }
  .img-container img {
    height: 95%;
    width: 95%;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
  .desc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70px;
    background: var(--primaryLightColor);
    padding: 1rem;
  }
  .desc h4 {
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }
  transition: var(--mainTransition);
  :hover {
    transform: scale(1.05);
  }
`
