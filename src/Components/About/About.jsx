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
                    <p>👋 Hi there! I am a Data Scientist with expertise in machine learning, deep learning, and data analytics. At JSimple Technosoft, I build AI-driven dashboards using AWS QuickSight and PostgreSQL, delivering predictive insights. I also fine-tune LLMs, enhancing HR chatbot accuracy by 35% with LLaMA 3.2. My expertise spans big data processing, cloud computing (AWS, GCP, Snowflake), and automation, enabling scalable AI solutions. I thrive on transforming raw data into actionable intelligence through end-to-end ML development and data-driven decision-making.</p>
                    <p>Beyond my professional work, I have built credit card fraud detection (99% accuracy), customer segmentation, and health insurance claim prediction models. My CNN-based crop disease detection model (97% accuracy) was published in IJISRT. I also develop interactive Power BI and Tableau dashboards, uncovering insights in sports analytics and airline performance. Always eager to innovate, I enjoy optimizing ML pipelines and diving into AI advancements. Let’s connect and explore the world of data together!</p>
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
                <h1> 1+ </h1>
                <p> YEARS OF INDUTRY EPERIENCE </p>
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
