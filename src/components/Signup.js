import React from 'react';
import styled from "styled-components";
import signupgoogle from "../assets/google.png";
import signupgooglem from "../assets/googlem.png";
import Input from "./Input"


const Signup = () => {
    return (
        <Container>
            <h1>Start your free 30-day trial</h1>
            <h2>No card required · Create your digital fitness program today</h2>
            <Google />
            <divider1 />
            <divider2 />
            <h3>or</h3>
            <Input />
           <h4>Already have an account? <b>Sign in</b></h4>
            <divider3 />
           
        </Container>
 
        
    );
};

const Container = styled.div`
position: absolute;
width: 735px;
height: 665px;
left: 150px;
top: 200px;
@media (max-width: 768px){
    position: absolute;
    width: 360px;
    height: 640.3px;
    left: 26px;
    top: 140px;
}

background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(25, 42, 62, 0.3);
border-radius: 6px;
justify-content: center;
align-items: center;

h1{
    position: absolute;
left: 19%;
right: 5.03%;
top: 6.92%;
bottom: 86.47%;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #192A3E;
@media (max-width: 768px){
    position: absolute;
left: 6.9%;

top: 2.46%;
bottom: 88.57%;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #192A3E;
}
}
h2{
    position: absolute;
left: 16%;
right: 11.43%;
top: 15.04%;
bottom: 80.15%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #192A3E;
@media (max-width: 768px){
    position: absolute;
left: 6.33%;
right: 6.08%;
top: 9.71%;
bottom: 87.37%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #192A3E;

}

}
h3{
    position: absolute;
left: 24.76%;
right: 24.86%;
top: 40.6%;
bottom: 56.54%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.01em;

color: #88898A;
@media (max-width: 768px){
    position: absolute;
    left: 28.47%;
    right: 28.47%;
    top: 25%;
    bottom: 79.28%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
    
    color: #88898A;
}
}

h4 {
    position: absolute;
left: 24%;
right: 24.86%;
top: 93.53%;
bottom: 3.61%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.01em;

color: #88898A;
@media (max-width: 768px){
    position: absolute;
    left: 16.55%;
    right: 16.3%;
    top: 93%;
    bottom: 51.23%;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    
    color: #88898A;
}
}



t1{
    position: absolute;
height: 24px;
left: 69px;
right: 513px;
top: 343px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: 0.15px;

color: rgba(0, 0, 0, 0.87);
@media (max-width: 768px){

}
}




divider3{
    position: absolute;
height: 1px;
left: 52px;
right: 53px;
top: 604px;

background: #C3C6CD;
transform: matrix(1, 0, 0, -1, 0, 0);
@media (max-width: 768px){
    position: absolute;
    height: 0.96px;
    left: 53px;
    right: 55px;
    top: 580px;
    
    background: #C3C6CD;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
}
divider1 {
position: absolute;
height: 1px;
left: 52px;
right: 413px;
top: 283px;

background: #C3C6CD;
transform: matrix(1, 0, 0, -1, 0, 0);
@media (max-width: 768px){
    position: absolute;
height: 0.96px;
left: 30px;
right:200px;
top: 173px;

background: #C3C6CD;
transform: matrix(1, 0, 0, -1, 0, 0);
}
}
divider2 {
position: absolute;
height: 1px;
left: 412px;
right: 53px;
top: 283px;

background: #C3C6CD;
transform: matrix(1, 0, 0, -1, 0, 0);
@media (max-width: 768px){
    position: absolute;
height: 0.96px;
left: 200px;
right: 40px;
top: 173px;

background: #C3C6CD;
transform: matrix(1, 0, 0, -1, 0, 0);
}
}
`;

const Google = styled.div`
position: absolute;
width: 650px;
height: 65.2px;
left: 42px;
top: 184px;

background: url(${signupgoogle});
@media (max-width: 768px){
    position: absolute;
    width: 314px;
    height: 51.03px;
    left: 20px;
    top: 100px;
    
    background: url(${signupgooglem});
}

`;



export default Signup;
