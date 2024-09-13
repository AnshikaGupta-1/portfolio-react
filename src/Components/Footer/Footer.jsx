//create folder as Footer, with  this file as Footer.jsx
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/plsss.svg'
import mywork_data from '../../assets/mywork_data'
import user_icon from '../../assets/user_icon.svg'
import link from '../../assets/link.svg'
import git from '../../assets/git1.svg'
// mount in app.jsx just like you did with services 
//use <Footer/>
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={footer_logo} alt=""/>
                <p></p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />  
                        <input type="email" placeholder='Enter your email'/>  
                    </div>
                    <div className="footer-subscribe">Subsribe</div>
                </div>              */}
            </div>
            <hr /> 
            <div className="footer-bottom">
                <p className="footer-bottom-left">0 2024 Anshika Gupta all rights</p>
                <div className="footer-bottom-right">
                    <p>Connect with me</p>
                    <p><a href="https://www.linkedin.com/in/anshika-gupta-01972b27a/" target="_blank" rel="noopener noreferrer"><img src={link} alt="" /></a></p>
                    <p><a href="https://github.com/AnshikaGupta-1" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer