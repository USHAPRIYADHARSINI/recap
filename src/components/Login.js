import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import {Navigate, useParams} from 'react-router-dom';
import MyProfile from './MyProfile';
import { useNavigate } from 'react-router-dom';
import * as dotenv from 'dotenv';

function Login() {
    let { id } = useParams();
    const navigate = useNavigate();
    const API = process.env.API

    const formik = useFormik({
        initialValues:{
            username : "",
            password : "",
        },
        onSubmit : (values) =>{

          let result = fetch(`${API}/users/login`,{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":'application/json'
            },
            body: JSON.stringify(values)
          });
          result = result.json();
          {result.map((result, index)=> (
            <MyProfile key = {index} data ={result} id ={index}/>) )}
            navigate('/users/myprofile')
      }
    }
    )
    
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setEmail(event.target.value);
    // };

  return (
    <div className='loginpage'>
    <form className='login-form' onSubmit={formik.handleSubmit}>
        <h1>Login form</h1>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        name = "username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <TextField
        id="outlined-name"
        name = "password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
    </Box>
    <Button type="submit" variant="contained">login</Button>
    </form>
    </div>
  )
}

export default Login