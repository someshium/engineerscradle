import React from 'react'
import loginpic from "../assets/loginpic.png"
import { RiGoogleLine } from 'react-icons/ri';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiLinkedinBoxLine } from 'react-icons/ri';


function Loginpg() {
    return (
        <div className="login">
          
            
            <div className="leftlogin">
                <img src={loginpic} className="loginpic"/>
            </div>

            <div className="rightlogin">

            <div className="rlinner"> 

              <h1 style={{size:"48px",textAlign:"center" } }>Login to Engineer's Cradle</h1>


             <div className="loginmodes">
              <button className="btn"><RiGoogleLine /> Continue with Google</button>
              <button className="btn"><RiFacebookCircleLine/> Continue with Facebook</button>
              <button className="btn"><RiLinkedinBoxLine /> Continue with LinkedIn</button>
            </div>
            

            </div>
            <div className="underline">
                
            </div>
            
                
            </div>
            
        </div>
    )
}

export default Loginpg;
