import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
 const [isOpen,setIsOpen] = useState(false)

const closeSidebar =()=>{
  setIsOpen(false)
}
 return (
  <nav className="navbar">
    <div className="nav-left">
     <button className="bars btn-white" onClick={()=>setIsOpen(true)}><FaBars/></button>
     <ul className={`${isOpen ?'nav-links show':'nav-links'}`}>
          <li><button className='bars btn-white' onClick={closeSidebar}><GrClose/></button></li>
          <li>
            <Link to="/" onClick={closeSidebar}>Home</Link>
          </li>
           <li>
            <Link to="/projects" onClick={closeSidebar}>Projects</Link>
          </li>
          <li>
            <Link to="/projects/react" onClick={closeSidebar}>React</Link>
          </li>
          
          <li>
            <Link to="/contact" onClick={closeSidebar}>Contact</Link>
          </li>
          <li>
            <Link to="/resume" onClick={closeSidebar}>Resume</Link>
          </li>
     </ul>
     </div>
     <div>
      <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/shanto5555" target="_blank" rel="noreferrer"><FaFacebookF/></a>
          </li>
           <li>
            <a href="https://github.com/shanto140319" target="_blank" rel="noreferrer"><FiGithub/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jahidul-shanto-2a593915b/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
          </li>
          <li>
            <a href="https://twitter.com/shanto_haque" target='_blank' rel="noreferrer"><FaTwitter/></a>
          </li>
     </ul>
     </div>
  </nav>
 )
}

export default Navbar
