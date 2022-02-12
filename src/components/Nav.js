import React,{useEffect,useState} from 'react'
import './Nav.css'


function Nav() {
    const[show,setShow]=useState(false);
  
    const toggle=()=>{
        if(window.scrollY > 200){
            setShow(true);
        }else{
            setShow(false);
        }
        
    };
    useEffect(()=>{
        window.addEventListener("scroll", toggle);

        return ()=> window.removeEventListener("scroll",toggle);
    },[])

    return <div className={`Nav ${show && "Nav_change"}`} >
        <div className="Nav_content">
 <img className='Nav_avatar' src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt="avatar" />
       
 
        <img className='Nav_avatar' src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt="avatar" />
        </div>
    </div>
}

export default Nav
