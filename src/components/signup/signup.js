import React from  "react";
import './signup.css';

export default function SignUp() {
    return (
        <div className="">
            <div className="main__logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <a href="/"><i class="fas fa-chevron-left"></i></a>
                <form className="fields">
                    <input type="text" placeholder=" Name" className="input-fields"/>
                    <input type="tel" placeholder=" Phone Number" className="input-fields"/>
                    <input type="email" placeholder=" Email" className="input-fields"/>
                    <input type="text" placeholder=" Username" className="input-fields"/>
                    <input type="password" placeholder=" Password" className="input-fields"/>
                    <input type="submit" value="SIGN UP" class="signup-button" />
                </form>
            </div>
            
        </div>
    )
}