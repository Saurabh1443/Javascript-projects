import React ,{useState}from 'react'
import './LoginScreen.css';
import SignInScreen from './SignInScreen.js'


function LoginScreen(props) {
    const[signin,setSignin]=useState(false);
   
    
       
        return(
        <div className='loginscreen'>
            <div className="only_bg">
            <img className='loginscreen_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <button className='loginscren_signin' onClick={e=>setSignin(true)}>Sign in</button>
            </div>
            <div className="loginscreen_background">
            
           
            
            <div className="loginscreen_gradient">
                </div>
                {
                    signin?(
                        <SignInScreen fun={props.fun} />
                    ): (
                        <div className="main">
                            <div className="content">
                         <h1 style={{fontSize:"3rem"}} >Unlimited movies, TV shows <br></br> and more.</h1>
                         <span style={{color:"blue",backgroundColor:"white"}}>Watch anywhere. Cancel anytime.</span>
                         <button className='started' >Get Started --</button>
                         
                        </div>
                        
                        </div>
                      
                    )
                }
               
           
            </div>
        </div>
        )
        
        
}

export default LoginScreen
