//create folder as MyWork, with  this file as Mywork.jsx
import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
// mount in app.jsx just like you did with services 
//use <Mywork/>
const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                // <div key={index} className="work-item">
                //     <img src={work.w_img} alt="" />
                //     <a href={work.shared_drive_link} target="_blank" rel="noopener noreferrer">
                //     <button>Open Project</button>
                //     </a>
                // </div>
                <div key={index} className="work-item">
                <a href={work.shared_drive_link} target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={work.w_img} alt="" />
                        <div className="view-project-text">View Project</div>
                    </div>
                </a>
            </div>
                );
            })}
                {/* {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })} */}
            </div>
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
}

export default MyWork