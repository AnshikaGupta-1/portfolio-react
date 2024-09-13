//create folder as Contact, with  this file as Contact.jsx
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import link from '../../assets/link.svg'
import git from '../../assets/git1.svg'
// mount in app.jsx just like you did with services, 
//use <Contact/>
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Check if the email field is empty
        if (!formData.get("email").trim()) {
            alert("Type your email to send the e-mail");
            return; // Prevent form submission
        }

        if (!formData.get("message").trim()) {
            alert("Message cannot be empty.");
            return; // Prevent form submission
        }

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          event.target.reset();
          alert("Email sent successfully!");
        } else {
          console.log("Error", data);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Feel free to connect with me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p><a href="mailto:anshikagupta379@gmail.com">anshikagupta379@gmail.com</a></p>
                        </div>
                        {/* <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91 8824623961</p>
                        </div> */}
                        <div className="contact-detail">
                            <img src={link} alt="" /><p><a href="https://www.linkedin.com/in/anshika-gupta-01972b27a/" target="_blank" rel="noopener noreferrer">LinkedIn-Connect</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={git} alt="" /><p><a href="https://github.com/AnshikaGupta-1" target="_blank" rel="noopener noreferrer">Git-Hub</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Gurugram, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your mesage'></textarea>
                <button type = 'submit' className="contact-submit">Submit now</button>
            </form>
        </div>
        </div >
     )
}

export default Contact