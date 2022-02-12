import React from 'react'
import './Footer.css'

export default function Footer(props) {
    
    return (
        <>
        <div className='footer_main'>
            <div className="footer_sub1">
                <div className="content1">
                <h1 className='enjoy'>Enjoy on your TV.</h1>
                <h3 className='enjoy_sub'>Watch on smart TVs, PlayStation ,<br/> Xbox,Chromecast, Apple TV,Blu-ray players and more.</h3>
                </div>
               
                <span className="footer_video1">
                <img className="footer_img1" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
                <video className='vid1' autoPlay playsInline muted loop
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4">
                </video>
                </span>
                
            </div>
           
        </div>
      
        </>
        
    )
}
