import React from "react";


function Navigator(props) {
    const tabs = [ 'About', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <div className="header">
       
        <ul>
          {tabs.map((tab) => (
            <li key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.setCurrentPage(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  
  
  
  }
  
  export default Navigator;