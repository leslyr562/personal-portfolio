import React, { useState } from 'react';
import Navigator from '../Navigator';
import About from '../About';
import Portfolio from '../Project'
import Contact from '../Contact'
import Resume from '../Resume'


function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const pagesSelected = () => {

        switch(currentPage) {

            case "About": return (<About />);
            case "Portfolio": return (<Portfolio />);
            case "Resume": return (<Resume />);
            case "Contact": return (<Contact />);
            default: return (<About />)
        }
    };


    return (
        <section id="main">
             <header className="header">
            <h2>
                <a id='myName' href="/">
                    <span role="img" aria-label="hearts">  </span> Lesly Gonzalez 💕
                </a>
            </h2>
            <div>
                <Navigator currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            </header>
            <div>
                    {
                        pagesSelected()
                    }
                </div>
       
        </section>
       
    );
}


export default Header;
