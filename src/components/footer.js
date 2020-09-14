import React from 'react'
import './footer-style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
  
class Footer extends React.Component {
    render(){
        return(
             <>
             <div className="footer-container"> 
             <br></br>
             <p className="alignleft">                       
                <a href="https://www.linkedin.com/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://www.twitter.com/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.facebook.com/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>                
                <a href="https://www.instagram.com/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.youtube.com/"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />                    
                </a>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/" rel="noopener noreferrer"><b>Sitemap |&nbsp;</b></a>
                <a href="https://www.facebook.com/" rel="noopener noreferrer"><b>Terms &amp; Privacy Notice |&nbsp;</b></a>
                <a href="https://www.facebook.com/" rel="noopener noreferrer"><b>Cookie Notice &nbsp;</b></a>            
                <p className="alignright">&copy; 2020 Cognizant, All Rights Reserved &nbsp; </p>   
                <br></br>
            </div>
            
            </>
      )
    }
}
export default Footer
export{ Footer }