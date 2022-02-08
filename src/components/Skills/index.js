import React from "react";

function skills() {

    return(
        <div id="resume">
            <h2 className="title">Resume</h2>
            <div>
                <div>
                    <div><a href={require(`../../assets/documents/Resume.pdf`)} className="resume-link">Resume Link</a></div>
                    <div className="language">
                        <h3>Front-End Proficiencies</h3>
                        <ul className="front-end">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Handlebars</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="language">
                        <h3>Back-End Proficiencies</h3>
                        <ul className="back-end">
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;