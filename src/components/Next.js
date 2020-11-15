import React from 'react'
import styled from "styled-components"
import Dropdown from "./Dropdownn";
import Checkbox from "./Checkboxes";
import img1 from "../assets/Yoga.png";
import img2 from "../assets/Weight.png";
import img3 from "../assets/Body.png";
import img4 from "../assets/Physi.png";


const Next = () => {
    return (
        <Container>
        <rect2 />
        <h4>We need just a few more details to get started</h4>
        <Dropdown />
        <h5>What type of workouts do you design?</h5>
        <h6>Choose all categories that apply</h6>
        <Checkbox />
        <img1 />
        <img2 />
        <img3 />
        <img4 />
        </Container>
    )
}
const Container = styled.div`

position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;

background: rgba(0, 0, 0, 0.75);
rect2{
    position: absolute;
height: 531px;
left: 556px;
right: 556px;
top: 201px;

background: #FFFFFF;
/* card shadow */

box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
border-radius: 4px;}

h4{
    position: absolute;
    left: 33.73%;
    right: 33.68%;
    top: 25.11%;
    bottom: 68.13%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    
    color: #192A3E;;
}
h5{
    position: absolute;
left: 33.89%;
right: 47.23%;
top: 37%;
bottom: 50.86%;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.01em;

color: #192A3E;
}
h6{
    position: absolute;
height: 16px;
left: 650px;
right: 1051px;
top: 440px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.4px;

color: rgba(0, 0, 0, 0.4);
}
img1{
    position: absolute;
width: 24px;
height: 24px;
left: 700px;
top: 485px;

background: url(${img1});
border-radius: 500px;
}
img2{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 700px;
    top: 527px;

background: url(${img2});
border-radius: 500px;
}
img3{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 700px;
    top: 570px;
background: url(${img3});
border-radius: 500px;
}
img4{

    position: absolute;
    width: 24px;
    height: 24px;
    left: 700px;
    top: 613px;

background: url(${img4});
border-radius: 500px;
}
`;




export default Next
