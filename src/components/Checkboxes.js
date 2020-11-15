import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components"

const Container = styled.div`

position: absolute;
left: 34%;
right: 65.17%;
top: 49%;
bottom: 46.24%;

h7{
    position: absolute;
left: 600%;
right: 50.42%;
top: 25%;
bottom: 46.24%;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
/* identical to box height */

letter-spacing: 0.01em;

color: #323C47;
}

h8{
    position: absolute;
left: 600%;

top: 120%;



font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
/* identical to box height */

letter-spacing: 0.01em;

color: #323C47;
}

h9{
    position: absolute;
left: 600%;
right: 50.42%;
top: 210%;
bottom: 38.73%;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
/* identical to box height */

letter-spacing: 0.01em;

color: #323C47;
}

h10 {
    position: absolute;
left: 600%;
right: 50.42%;
top: 300%;
bottom: 34.87%;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
/* identical to box height */

letter-spacing: 0.01em;

color: #323C47;
}
submit{
    position: absolute;
width: 630px;
height: 40px;

top: 190px;

background: #6095FF;
border-radius: 4px;

}
submittext{
    position: absolute;
    width: 234.75px;
    height: 24.21px;
    left: 200px;
    top: 200px;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height, or 125% */
    
    
    color: #FFFFFF;
}

`;

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  }
  ;

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
       <Container>
       <h7>Yoga</h7>
       <h8>Weight Training</h8>
       <h9>Bodyweight Training</h9>
       <h10>Physiotherapy</h10>
        <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
          color="primary"
          ></Checkbox>
        <Checkbox
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="uncheckedB"
          color="primary"
        />
        <Checkbox
          checked={this.state.checkedC}
          onChange={this.handleChange('checkedC')}
          value="checkedC"
          color="primary"
        />
        <Checkbox
          checked={this.state.checkedD}
          onChange={this.handleChange('checkedD')}
          value="checkedD"
          color="primary"
        />
        <submit />
        <submittext>Create your account</submittext>
        </Container>
      </div>
    );
  }
}

export default Checkboxes;