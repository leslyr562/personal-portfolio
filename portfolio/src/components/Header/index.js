import React from 'react';

function Header() {

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="hearts">  </span> Lesly Gonzalez 💕
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Project</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
