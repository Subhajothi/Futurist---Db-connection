import React from 'react'
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';

class Carouse extends React.Component {
  render() {
    return (
      <>
      <div></div>
        <div className="top-container">
          <a href="https://www.facebook.com/" className="link" target="_blank"><b>EVENTS /&nbsp;</b></a>
          <a href="https://www.facebook.com/" className="link" target="_blank"><b>VODKA /&nbsp;</b></a>
          <a href="https://www.facebook.com/" className="link" target="_blank"><b>JAVASCRIPTS</b></a> 
          <img className="header-image" src='../../src/images/logoCog.png' alt="logo" /> 
        </div>
        <div>
        <Carousel>
        <Carousel.Item>
            <img src='../../src/images/Carousel1.jpg' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img src='../../src/images/Carousel2.png' alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img src='../../src/images/Carousel3.png' alt="Third slide" />
        </Carousel.Item>          
        </Carousel>
        </div>
        <div className="bottom-container">
          <center>INDUSTRY SPOTLIGHT</center>
        </div>      
  </>
    )
  }
}

export default Carouse
export { Carouse }
