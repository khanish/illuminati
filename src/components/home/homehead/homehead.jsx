//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from '../../../assests/images/landing1.jpg';
import slide2 from '../../../assests/images/landing2.jpeg';
import slide3 from '../../../assests/images/landing3.jpg';
import slide4 from '../../../assests/images/landing4.webp';
import slide6 from '../../../assests/images/landing6.jpg';
import slide5 from '../../../assests/images/landing5.jpg';
import slide7 from '../../../assests/images/landing7.jpg';
import slide8 from '../../../assests/images/landing8.jpg';






//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col",
    main: "flex8 white",
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide6, slide2, slide4, slide8, slide5, slide3,  slide7,];

//===========================================
// APP COMPONENT
//===========================================
class HomeHead extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
            </div>
        );
    }
}

export default HomeHead;
