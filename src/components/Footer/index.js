import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function Footer () {
    return(
     <footer> 
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