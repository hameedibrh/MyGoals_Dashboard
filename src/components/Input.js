import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

import {useForm} from 'react-hook-form'
import Next from './Next'



const useStyles = makeStyles((theme) => ({
    
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {

    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Container = styled.div`
position: absolute;

s1{
    position: absolute;
    width: 300px;

top: 290px;
left: 50px;
right: 10px;
@media (max-width: 768px){
  position: absolute;
  width: 300px;
  left: 30px;
right: 50.84px;
top: 200.85px;
bottom: 1068.02px;
}
}
s2{
    position: absolute;
    width: 295px;

top: 290px;
left: 390px;
right: 10px;
@media (max-width: 768px){
  position: absolute;
  width: 300px;
  left: 30px;
right: 50.84px;
top: 270.85px;
bottom: 1068.02px;
}

}
s3{
    position: absolute;
    width: 635px;

top: 360px;
left: 50px;
right: 10px;
@media (max-width: 768px){
  position: absolute;
  width: 300px;
  left: 30px;
right: 50.84px;
top: 340.85px;
bottom: 1068.02px;
}
}
s4{
    position: absolute;
    width: 635px;

top: 430px;
left: 50px;
right: 10px;
@media (max-width: 768px){
  position: absolute;
  width: 300px;
  left: 30px;
right: 50.84px;
top: 410.85px;
bottom: 1068.02px;
}
}
button{
    position: absolute;
width: 630px;
height: 40px;
left: 52px;
top: 510px;

background: #6095FF;
border-radius: 4px;
@media (max-width: 768px){
  width: 303px;
height: 38.51px;
left: 28px;
top: 480px;
}

}
r1{
    position: absolute;
    width: 239.31px;
    height: 24.21px;
    left: 246.79px;
    top: 543px;
    
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height, or 125% */
    
    
    color: #FFFFFF;
    @media (max-width: 768px){
    }
}
`;



export default function SignIn() {
  const classes = useStyles();
  const {register, handleSubmit, } = useForm()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

       
        <form className={classes.form} noValidate onSubmit={handleSubmit((data)=> alert(JSON.stringify(data)))}>
         <s1>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="text"
            label="First Name"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </s1>
          <s2>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="text"
            label="Last Name"
            name="email"
            autoComplete="email"
            autoFocus
          />
           </s2>
            <s3>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="text"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </s3>
         <s4>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          </s4>
          
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={Next()}>
              Create your account
            
          </button>
          
        </form>
        
      </div>
      
    </Container>
  );
}