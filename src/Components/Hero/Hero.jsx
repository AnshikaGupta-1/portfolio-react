import React, { useState, useEffect } from 'react';
import './Hero.css'
import profile_img from '../../assets/me.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume_Anshika_Gupta.pdf'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState('');
  const words = ['B.Tech CSE', 'Data Science', 'Data Analytics', 'Python', 'Machine Learning','Deep Learning','Big-Data','Power BI','Tableau','Frontend Developer'];
  const typingSpeed = 150;
  const deleteSpeed = 100;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentFullWord = words[wordIndex];

      if (!isDeleting && letterIndex <= currentFullWord.length) {
        // Typing letters
        setCurrentWord(currentFullWord.slice(0, letterIndex + 1));
        letterIndex++;
      } else if (isDeleting && letterIndex > 0) {
        // Deleting letters
        setCurrentWord(currentFullWord.slice(0, letterIndex - 1));
        letterIndex--;
      }

      // Switch to deleting after word is fully typed
      if (letterIndex === currentFullWord.length && !isDeleting) {
        timeout = setTimeout(() => {
          isDeleting = true;
        }, delayBetweenWords);
      }

      // Switch to typing after word is fully deleted
      if (letterIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
      }

      // Set timeout for the next character
      timeout = setTimeout(type, isDeleting ? deleteSpeed : typingSpeed);
    };

    // Start typing effect
    type();

    // Cleanup on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id ='home' className = 'hero'>
        <img src={profile_img} alt="" />
        <h1>I'm <span> Anshika Gupta,</span> a Data Science enthusiast.</h1>
        <p>{currentWord}<span className="cursor">|</span></p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#work'>See My Projects</AnchorLink></div>
            <div className="hero-resume"><a href={resume} download="Anshika_Gupta_Resume.pdf">Download Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
