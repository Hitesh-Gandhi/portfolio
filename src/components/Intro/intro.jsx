import React from 'react';
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="Intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Hitesh</span> <br/>Front End Developer</span>
                <p className="introPara">I am A Skilled Android and Front End Developer with experience in creating <br/> visually appealing and user friendly Websites and Applications.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    );
}

export default Intro;
