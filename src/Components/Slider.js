import React from 'react';
import { Carousel } from 'react-bootstrap';
import fon from '../img/fon.png';
import fon1 from '../img/12698.jpg';
import fon2 from '../img/fon2.webp';

let Slider = () => {
    return(  
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={fon}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Don't disturb!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={fon1}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Don't disturb!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={fon2}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Don't disturb!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )}

    export default Slider;
