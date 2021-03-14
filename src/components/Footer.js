import React from 'react'

const Footer = () => {
 var d = new Date();
 var n = d.getFullYear();
 return (
  <footer className='footer'>
   <h4>Copyright © {`${n}`} Jahidul Haque Shanto</h4>
  </footer>
 )
}

export default Footer
