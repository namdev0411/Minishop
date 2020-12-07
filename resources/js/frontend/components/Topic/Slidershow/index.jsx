import React from 'react';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bg from './img/slider-img.png';
import bg2 from './img/categorie-page-top.png';
import bg3 from './img/bg3.png'; 

const Slidershow = props => {
    const properties = {
        duration: 3000  
    }
    return (
        <div className="slide-container">
            <Slide {...properties}>
            <div className="each-slide">
                <div style={{backgroundImage: `url(${bg})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{backgroundImage: `url(${bg2})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{backgroundImage: `url(${bg3})`}}>
                </div>
            </div>
            </Slide>
      </div>
    );
};

export default Slidershow;