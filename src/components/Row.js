import React,{useState,useEffect} from 'react'
import "./Row.css"

function Row(props) {
  
    const[movie,setMovie]=useState([]);
   
    
    const base_url=`https://image.tmdb.org/t/p/original`;
  useEffect(()=>{
      fetch(props.url).then((res)=>res.json()).then((result)=>{setMovie(result.results)})
  },[]);
 
    return (
        <div className='row'>
   <h2 className="trending">{props.title}   
   <small className='sp'>View all</small>
   </h2>
   
  
    <div className={`row_img`}>
       {movie.map(temp => <img className={` ${props.isShort===true?"row_imgspecial":"img1"}`} key={temp.id} src={`${base_url}${temp.backdrop_path || temp.known_for.backdrop_path || temp.profile_path || temp.known_for[1].poster_path  }`} alt={temp.name}/>)}
       </div>

    </div>
    )   
}

export default Row
