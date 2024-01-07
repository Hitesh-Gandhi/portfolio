import React from 'react';
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to smallest detail and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <a href='https://github.com/Hitesh-Gandhi/Drawing-App'><img src={Portfolio1} alt="" className="worksImg"/></a>
                <a href='https://github.com/Hitesh-Gandhi/7-Min-Workout-App'><img src={Portfolio2} alt="" className="worksImg"/></a>
                <a href='https://github.com/Hitesh-Gandhi/Basic-Calculator'><img src={Portfolio3} alt="" className="worksImg"/></a>
                {/* <a href='https://github.com/Hitesh-Gandhi/Sticky-Notes-App'><img src={Portfolio4} alt="" className="worksImg"/></a>
                <a href='https://github.com/Hitesh-Gandhi/Appointment-App'><img src={Portfolio5} alt="" className="worksImg"/></a>
                <a href='https://github.com/Hitesh-Gandhi/Friends_Social'><img src={Portfolio6} alt="" className="worksImg"/></a> */}
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;
