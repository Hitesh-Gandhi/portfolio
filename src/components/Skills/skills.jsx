import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a skilled and passionate Android and Front End Developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding in design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React JS and Kotlin.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" src={UIDesign} alt="UIDesign" />
                    <div className="skillBarText">
                        <h2>Content Design</h2>
                        <p>Desinging Different posts for Socia Media Handles.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img className="skillBarImg" src={WebDesign} alt="WebDesign" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Developed Amazing Websites using HTML, CSS, Javascript and React JS.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img className="skillBarImg" src={AppDesign} alt="AppDesign" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Developed Different Working Applications in Android using Kotlin</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
