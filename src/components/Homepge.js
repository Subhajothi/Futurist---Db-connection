import React, { Component } from "react";
import NavbarCSS from "../components/style.css";
import Footer from "../components/Footer"
import Agri from "../components/Carouselcontent";
import {NavDropdown} from "react-bootstrap"

export default class Homepage extends Component {

    render() {
        return ( 
            <html>
<head>
    <title> Homepage </title>
    <link rel="stylesheet" href="style.css"/>
</head>

<body>
    

    <select name="Home" id="Home">
        
       <option value="value1">Home</option>
       <option value="value2">option2</option>
       <option value="value3">option3</option>
    </select>
    
    <select name="Events" id="Events">
       <option value="value1">Events</option>
       <option value="value2">option2</option>
       <option value="value3">option3</option>
    </select> 
    <select name="Community" id="Community">
       <option value="value1">Community</option>
       <option value="value2">option2</option>
       <option value="value3">option3</option>
    </select> 
    <select name="About" id="About">
       <option value="value1">About</option>
       <option value="value2">option2</option>
       <option value="value3">option3</option>
    </select> 
    
    <div>
        <Agri/>
    </div>
    <div>
    <Footer/> 
    </div>
      

       
</body>

</html>
        );
    }
}