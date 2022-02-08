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
                        <li>
                            <a href="#About">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#Skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#Portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#Contact">
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
