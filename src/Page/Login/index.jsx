import React from 'react';
import { Redirect } from 'react-router-dom'
import './login.css';

class Login extends React.Component {
    render() {
        return (
             
            <html>
    <head>
        <title> TAKE THE FIRST STEP </title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    
    <body>
        <div id="Topcontent">
            <h1>TAKE THE FIRST STEP</h1>
            <p id="line1">Serving community by looking forward as well as back is a big picture, but the power of today's new digital capabilities is vast and growing</p>
            <p id="line2">Let's talk about how you can be part of the community...</p>
        </div>
        <div id="form">
            <form>
                <div class="row">
                    <div class="field">
                        <input type="text" id="name" placeholder="NAME*"/>
                    </div>
                    <div class="field">
                        <input type="text" id="email" placeholder="EMAIL*"/>
                    </div>
                    <div class="field">
                        <input type="text" id="account" placeholder="ACCOUNT*"/>
                    </div>
                    <div class="field">
                        <input type="text" id="contactNumber" placeholder="CONTACT NUMBER*"/>
                    </div>
                    <div class="field">
                        <input type="text" id="region" placeholder="REGION*"/>
                    </div>
                    <div class="field">
                        <input type="text" id="inquiryType" placeholder="INQUIRY TYPE*"/>
                    </div>
                </div>
                <div id="submit">
                    <input type="submit" value="SUBMIT"/>
                </div>
                <div class="clear">
    
                </div>
            </form>
        </div>
    
    </body>
    
    </html>
            );
    }
}
export default Login
export { Login }