import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaNodeJs,

} from "react-icons/fa";
import { SiHandlebarsdotjs, SiMongodb, SiMysql, SiExpress, SiApollographql } from "react-icons/si";


function skills() {

    return (
        <div id="skills">
            <h1 className='sectionName'>Skills</h1>

            <div>
                <div><a href={require(`../../assets/documents/Resume.pdf`)} className="resume-link">Resume Link</a></div>

                <div class="w3-container w3-pink strip">
                    <ul className='strip'> 
                        <li className='flist svg_icons'>
                            <FaHtml5 />
                        </li>
                        <li className='flist svg_icons'>
                            <FaCss3Alt />
                        </li>
                        <li className='flist svg_icons'>
                            <FaJs />
                        </li>
                        <li className='flist svg_icons'>
                            <FaBootstrap />
                        </li>
                        <li className='flist svg_icons'>
                            <SiHandlebarsdotjs />
                        </li>
                        <li className='flist svg_icons'>
                            <FaReact />
                        </li>
                        <li className='flist svg_icons'>
                            <FaNodeJs />
                        </li>
                        <li className='flist svg_icons'>
                            <SiMongodb />
                        </li>
                        <li className='flist svg_icons'>
                            <SiMysql />
                        </li>
                        <li className='flist svg_icons'>
                            <SiExpress />
                        </li>
                        <li className='flist svg_icons'>
                            <SiApollographql />
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    );
}

export default skills;