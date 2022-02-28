import React from 'react';
import hero from '../../assets/images/computer.png'


function Header() {


    return (
        <section id="main">
            <header className="header">
                <h2>
                    <a id='myName' href="/">
                        <span role="img" aria-label="hearts">  </span> Lesly Gonzalez 💕
                    </a>
                </h2>
                <nav> 
                    <ul className="header">
                        <li className='li'>
                            <a className='navText' href="#about">
                                About me
                            </a>
                        </li>
                        <li className='li'>
                            <a className='navText' href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className='li'>
                            <a className='navText' href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className='li'>
                            <a className='navText' href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div>
                <img className='hero' src={hero} alt="computer" />
            </div>


        </section>

    );
}


export default Header;
