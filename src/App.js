
import './App.css';
import React ,{useState,useEffect} from 'react';
import Row from './components/Row.js';
import Banner from './components/Banner.js';
import Nav from "./components/Nav.js";
import LoginScreen from'./components/LoginScreen.js'
import Footer from'./components/Footer.js'


export default function App() {
  const[user,setUser]=useState(false)
  

  return(
  
    <div className="App">
      {
      !user?(
        <>
        <LoginScreen fun={setUser} />
   <Footer />
        </>
   
      ):(
        <>
        <Nav />
        <Banner />
 
         <Row
         url={`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`} 
         title ='NETFLIX ORIGINALS'
         isShort={false}
         />
           <Row
         url={`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`} 
         title ='TRENDING'
         isShort={false}
         />
           <Row
         url={`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`} 
         title ='TV SEASONS'
         isShort={false}
         />
           <Row
         url={`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`} 
         title ='TV SHOWS'
         isShort={false}
         />
           <Row
         url={`https://api.themoviedb.org/3/trending/all/day?api_key=0df5265eaebddc791784f6d32ae2872c`} 
         title ='PERSONS'
         isShort={true}
         /></>
      )
      }
       

    </div>
   

  )
}



