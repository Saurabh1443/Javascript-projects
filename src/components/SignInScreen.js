import React ,{useState}from 'react'
import './SignInScreen.css';


function SignInScreen(props) {
    const [email , setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[Users,setUsers]=useState([]);
 
   const register=(event)=>{
    event.preventDefault();
    setUsers(prevItems=>[...prevItems,{user_handle:email,password:password}]);
    setEmail("");
    setPassword("");
    props.fun(true);
   }
   const toggle=()=>{
      document.getElementById('to_toggle').innerText="Sign Up";
      
       console.log("i am changed");
    //    console.log(elm);
   }

    return (
        <div className='SignInScreen'>
           <form className='form1'>
               <input className='input1'value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="xyz@example.com"/><br/>
               <input className='input2' value={password} onChange={(e=>setPassword(e.target.value))} type="password" placeholder='password'/><br></br>
               <button type="submit" onClick={register} id="to_toggle">Sign In</button>
               <hr style={{backgroundColor:"white"}}/>
           </form>

               <button className='create'  onClick={toggle} style={{backgroundColor:"black"}}>create an account</button>
               <div className="foot">
              
               </div>
        </div>
    )
}

export default SignInScreen
