import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import ScrollTop from '../ScrollTop'

function Footer () {
    return(
     <footer> 
       <ScrollTop />
          <a className="flist" href="https://github.com/leslyr562" target="blank">
            <li>
              <FaGithub/>
            </li>
          </a>

          <a className='flist' href="https://www.linkedin.com/in/lesly-gonzalez-61237b218/" target="blank">
            <li>
              <FaLinkedinIn />
            </li>
          </a>

          <a className='flist' href="https://stackoverflow.com/users/16604290/lesly-gonzalez?tab=profile" target="blank">
            <li>
              <FaStackOverflow/>
            </li>
          </a>
          
       </footer> 
    )
}

export default Footer;