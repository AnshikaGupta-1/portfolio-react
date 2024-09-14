import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/drawing3.svg'
const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>👋 Hi there!  I am a Data Science and Machine Learning enthusiast with a knack for turning data into actionable insights. My journey in tech has equipped me with hands-on experience in building and deploying machine learning and deep learning models, building end-to-end projects, creating impactful data visualizations, and leveraging analytics for business intelligence.  My professional experiences include internships where I’ve applied my skills to real-world challenges.</p>
                    <p>At Mazars India, I streamlined audit processes and enhanced data visualization efforts, while at Upskillz, I gained valuable experience in optimizing machine learning models and working on cutting-edge projects. Whether it's through exploring new technologies or refining my existing skills, I believe there's always room to grow. If you share similar interests, feel free to connect with me. Let’s explore the world of data and technology together!</p>
                </div>
                {/* <div className="about-skills">
                    <div className="about-skill"><p>Machine Learning</p><hr style = {{width: "90%"}}/></div>
                    <div className="about-skill"><p>Machine Learning</p><hr style = {{width: "95%"}}/></div>
                    <div className="about-skill"><p>Machine Learning</p><hr style = {{width: "100%"}}/></div>
                    <div className="about-skill"><p>Machine Learning</p><hr style = {{width: "80%"}}/></div>
                </div> */}
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
                <h1> 20+ </h1>
                <p> PROJECTS COMPLETED </p>
            </div>
            <hr/>
           <div className="about-achievement">
                <h1> 3 </h1>
                <p> YEARS OF DATA SCIENCE SPECIALIZATION </p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1> 1 </h1>
                <p> RESEARCH PAPER ACCEPTED </p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1> 8.75 </h1>
                <p> CGPA </p>
            </div>
        </div>
    </div>
  )
}
export default About