import logo from './images/logoCog.png'
import slide1 from './images/Carousel1.jpg'
import slide2 from './images/Carousel2.png'
import slide3 from './images/Carousel3.png'
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';

import React from 'react'

class Carouse extends React.Component {
  render() {
    return (
      <>
      
        <div className="top-container">
          <a href="https://www.facebook.com/" className="link" rel="noopener noreferrer"><b>EVENTS /&nbsp;</b></a>
          <a href="https://www.facebook.com/" className="link" rel="noopener noreferrer"><b>VODKA /&nbsp;</b></a>
          <a href="https://www.facebook.com/" className="link" rel="noopener noreferrer"><b>JAVASCRIPTS</b></a> 
          <img className="header-image" src={logo} alt="logo" /> 
        </div>
          <div className="al">
        <Carousel>
        <Carousel.Item>
            <img src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide3} alt="Third slide" />
        </Carousel.Item>          
        </Carousel>
        </div>
        <div className="bottom-container">
          <center>INDUSTRY SPOTLIGHT</center>
        </div>  
        {/* </div>     */}
  </>
    )
  }
}

export default Carouse
export { Carouse }
