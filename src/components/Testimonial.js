import React from 'react';
import styled from "styled-components";
import roshan from "../assets/roshan.png";

const Testimonial = () => {
    return (
        <Container>
            <rectt />
            <h1>Using tread, you <b>can easily create and deliver visual workouts.</b> You can <b>save time by creating and assigning programs </b>to your clients. You can also improve client engagement by recieving frequent feedback from your clients. Tread helped me mange more clients and consequently <b>helped me generate more profits</b> from my digital fitness business.</h1>
           <poly />
            <img1 />
            <h2>Roshan Joseph</h2>
            <h3>Animal Flow Trainer</h3>

        </Container>
    );
};

const Container = styled.div`
position: absolute;
width: 735px;
height: 665px;
left: 1000px;
top: 200px;


background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(25, 42, 62, 0.3);
border-radius: 6px;
justify-content: center;
align-items: center;
@media (max-width: 768px){
    width: 360px;
    height: 640.3px;
    left: 25px;
    top: 820px;
}

h1{
position: absolute;
left: 20%;
right: 18%;
top: 25%;
bottom: 50.64%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
/* or 157% */

letter-spacing: 0.01em;

color: #525F6E;
@media (max-width: 768px){
    position: absolute;
    left: 16.55%;
    right: 15.82%;
    top: 8%;
    bottom: 26.45%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    /* or 157% */
    
    letter-spacing: 0.01em;
    
    color: #525F6E;
   
}
}
rectt{
position: absolute;
width: 550px;
height: 267px;
left: 100px;
top: 100px;

background: #F3F3F3;
border-radius: 5px;
@media (max-width: 768px){
    position: absolute;
    width: 320px;
    height: 350px;
    left: 20px;
    top: 26px;
    
    background: #F3F3F3;
    border-radius: 5px;
}
}

poly{
position: absolute;
width: 70px;
height: 70px;
left: 350px;
top: 320px;

background: #F3F3F3;
border-radius: 4px;
transform: rotate(45deg);
@media (max-width: 768px){
    position: absolute;
    width: 55px;
    height: 55px;
    left: 150px;
    top: 340px;
    
   
    transform: rotate(45deg);
}
}

img1{
    position: absolute;
width: 100px;
height: 100px;
left: 330px;
top: 450px;

background: url(${roshan});
@media (max-width: 768px){
    position: absolute;
    width: 100px;
    height: 100px;
    left: 130px;
    top: 410px;
    
}
}

h2{
    position: absolute;
left: 310px;
right: px;
top: 550px;
bottom: 19.21%;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.01em;

color: rgba(0, 0, 0, 0.87);
@media (max-width: 768px){
    position: absolute;
    left: 29%;
    right: 27.98%;
    top: 82%;
    bottom: 9.71%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.01em;
    
    color: rgba(0, 0, 0, 0.87);
}
}

h3{
    position: absolute;
    left: 320px;
    right: px;
    top: 575px;
bottom: 16.85%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
text-align: center;
letter-spacing: 0.01em;

color: #525F6E;
@media (max-width: 768px){
    position: absolute;
    left: 30%;
    right: 27.98%;
    top: 87%;
    bottom: 8.2%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    
    color: #525F6E;
}
}

`;

export default Testimonial;
