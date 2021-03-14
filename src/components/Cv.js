import React from 'react'
import styled from 'styled-components'

const Cv = () => {
 return (
  <Wrapper>
 
            <div class="cv">
               <div className='flex'>
                   <h1>CV</h1>
                <a href="./cv/Jahidul_Haque_Santo_CV_React.pdf" download><button className='btn cv-btn'>Download</button></a>
               </div>
                <embed src="./cv/Jahidul_Haque_Santo_CV_React.pdf" width="100%" height="400px" 
 type="application/pdf"/>
            </div>

         
  </Wrapper>
 )
}

export default Cv
 
const Wrapper = styled.div `
.cv{
 margin:3rem 0;
}
 .cv-btn{
  color:#222;
 }
 .flex{
  display:flex;
  justify-content:space-between;
 }
`