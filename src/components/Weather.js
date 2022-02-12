import React,{useEffect,useState} from 'react';

function Weather() {
   const[city , setNum]=useState("mumbai");
   const[data,setData] = useState([])
    
   useEffect(()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=a9ebd4cbb21ab5695d6526af8fdcdd1e`).then(res=>res.json()).then(response=>console.log(response)).catch(err=>console.log(err))
   },[])
      
    return (
        <div>
            {/* <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/> */}
           
           {/* {
            data.map((res,index)=>{
               return (<div key={res.name}>
                   <h1 key={index}>{res.name}</h1>
                  <h3 key = {res.url}>{res.url}</h3>
               </div>
               )
            })

           } */}
           <input type="text" value={city} onChange={e=>setNum(e.target.value)} />
            
          
        </div>
    )
}

export default Weather
