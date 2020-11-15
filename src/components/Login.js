import styled from "styled-components"
import React from 'react'
import Testimonial from "./Testimonial";
import Signup from "./Signup";
import Glyph from "../assets/FaviconDark1.png";
import Wordmark from "../assets/LogoTransparentWhite1.png";
import Glyphm from "../assets/FaviconDark1.png";
import Wordmarkm from "../assets/LogoTransparentWhite1.png";
import Next from "./Next";


function login() {
    return (
        <Container>
            <Glyphh />
           
            <Wordmarkk />
            <Signup />
            <Testimonial />
            
            
            

        </Container>
    );
}

const Container = styled.div`
background: #6095ff;
position: absolute;
top:0;
left:0;
bottom:0;
right: 0;
@media (max-width: 768px){
    position: absolute;
width: 300%;
height: 300%;

}

rect {
    position: absolute;
left: 48%;
right: 51%;
top: 10%;
bottom: 89.5%;

background: #FFFFFF;
border-radius: 1px;
@media (max-width: 768px){
    position: absolute;
    left: 36.42%;
    right: 60.66%;
    top: 4.5%;
    bottom: 95.25%;
}
`;

const Glyphh = styled.div`
position: absolute;
width: 75px;
height: 75px;
left: 818px;
top: 55px;

background: url(${Glyph});
@media (max-width: 768px){
    position: absolute;
   
  
left: 60px;
top: 30px;
background: url(${Glyphm});
}
}
`;
const Wordmarkk = styled.div`
position: absolute;
width: 300px;
height: 157.89px;
left: 893px;
top: 15px;

background: url(${Wordmark});
@media (max-width: 768px){
    position: absolute;

left: 120px;
top: -10px;
background: url(${Wordmarkm});
}
}
`;





export default login