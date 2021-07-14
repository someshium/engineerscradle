import React from 'react'
import signuppic from '../assets/signuppic.png'
import student from '../assets/student.png'
import professional from '../assets/professional.png'
import logo from '../assets/logo.png'

import { RiGoogleLine } from 'react-icons/ri';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiLinkedinBoxLine } from 'react-icons/ri';



function Signup() {
    return (
        <div className="signup">
            
                <div className="leftsignup">
                    <img className="signuppic" src={signuppic} alt=""  />
                    <img className="signuppic-sm" src={logo} alt=""  />
                </div>
                <div className="rightsignup">
                    <div className="innerrightsignup">
                    <h1>Welcome to Engineer's Cradle</h1>

                    <h3>Register as</h3>
                    <div className="registeroption">

                        <div className="regitem">
                            <img className="regimg" src={student} alt="" />

                        </div>

                        <div className="regitem">
                          <img className="regimg" src={professional} alt="" /> 

                        </div>

                       
                    </div>
                    
                        <button className="btn"><RiGoogleLine /> Signup with Google</button>
                        <button className="btn"><RiFacebookCircleLine/> Signup with Facebook</button>
                        <button className="btn"><RiLinkedinBoxLine /> Signup with Linkedin</button>

                    

                    {/* line */}
                    <div className="underline">

                    </div>

                    <p>Already a member of Engineer's Cradle? <a style={{textDecoration:"none", color:"#1684F8"}} href="#">Login</a></p>

                    </div>
                    
                </div>


                


            
            
            
        </div>
    )
}

export default Signup
