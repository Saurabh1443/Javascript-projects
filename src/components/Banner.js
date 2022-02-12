import React ,{useState,useEffect}from 'react'
import './Banner.css'
import request from './Temp.js'

function Banner() {
    
const truncate=(string)=>{

    let truncated ="";
 
     if(string.length>100)truncated+=string.substring(0,100);
     truncated+='.....'
     
     return truncated;
}
const Perform=(res)=>{
  
        setContent(res.results[Math.floor(Math.random()* res.results.length-1)])
   
}

const[content,setContent]=useState([]);
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`).then((response)=>response.json()).then((res)=>{console.log(res);Perform(res)
  } )
  
  },[])
  const[check,setCheck]=useState(false);
  const play=()=>{
      setCheck(true);
    
  }

     
          
           if(!check)  { 
               return(
          <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${content.backdrop_path}')`,
            
            backgroundPosition:"center center",
            objectFit:"contain"
           
           
           
        }}>
            <div className="banner_contents">
            <h1 className="title">{content.original_title ||content.title || content.name }</h1>
            <div className="buttons">
                <button className='btn1' onClick={play} id="player" >play</button>
                <button className='btn1'>My List</button>
            </div>
            <h1 className="description">{truncate(`${content.overview}`)}</h1>
            </div>
              
               <div className="fade_bottom"></div>   
            
          </header>
               )
           }
           else{
               return(
                   <div >
              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/WgzHR0cN0II?controls=0&autoplay=1" frameborder="0" 

allowfullscreen></iframe>
                     
                      

                   </div>
               )
           }
   
           
        
   
}

export default Banner
