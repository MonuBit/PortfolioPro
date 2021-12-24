import React from 'react'
import Blink from "react-blink-text";
import './Profile.css';

export default function Profile() {
    return (

        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/monu-kumar-singh-67363216b/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>

                        <a href='https://www.instagram.com/yours_dark_soul/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/yours_dark_soul'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>   
                    </div>

                <div className = "profile-details-name">
                    <span className = "primary-text">
                        {" "}
                        Hello , I m <span className = "highlighted-text">Monu</span>
                    </span>
                </div>
               
              <div className='profile-details-role'>
             
                <h1>
                    <Blink color='White' text='Ethusiastic Developer  🌏' fontSize='30px' fontstyle = 'bold'>
                        Ethusiastic Developer
                    </Blink> 
                 </h1>  
                <span className='profile-role-tagline'>
                
                    Knack of building applications with front and back end operations.
                </span>
                
                </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                        </button>
                            <a href='Monukumarsingh.pdf' download='Monu Monukumarsingh.pdf'>
                                <button className = 'btn highlighted-btn'>Get Resume</button>
                            </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>

            </div>
        </div>
    )
}