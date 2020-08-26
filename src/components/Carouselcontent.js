import React from 'react'
import './Carouselcontent.css'
import img1 from './images/Carousel3.jpg'
import img2 from './images/Carousel2.jpg'
import img3 from './images/Carousel1.jpg'
import logo from './images/logoCog.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer.js";

class Agri extends React.Component {
  render() {
    return (
        <>
          <div className="top-container">
            <a href="https://www.facebook.com/" class="link" target="_blank"><b>EVENTS /&nbsp;</b></a>
            <a href="https://www.facebook.com/" class="link" target="_blank"><b>VODKA /&nbsp;</b></a>
            <a href="https://www.facebook.com/" class="link" target="_blank"><b>JAVASCRIPTS</b></a> 
            <img className="header-image" src={logo} alt="logo" /> 
          </div>
          <div>
          <Carousel>
          <Carousel.Item>
              <img src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
              <img src={img3} alt="Third slide" />
          </Carousel.Item>          
          </Carousel>
          </div>
          <div className="bottom-container">
            <center>INDUSTRY SPOTLIGHT</center>
          </div>
          <br></br>
          
    </>
    )
  }
}

export default Agri
export { Agri }
