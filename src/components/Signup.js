import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

function Signup({ users, setUsers }) {
        const navigate = useNavigate();
        

        const formik = useFormik({
        initialValues:{
          "place": "",
          "name": "",
          "profilePic": "",
          "email": "",
          "password": "",
          "id": ""
         },
         onSubmit: (values)=>{
          console.log(values)
          const newUser = values
          console.log(users)
          console.log(newUser)
          setUsers([...users, newUser])
          navigate('/users')
        }
    })
  return (
    <div className='loginpage'>
    <form className='login-form' onSubmit={formik.handleSubmit}>
        <h1>Signup to create a new user</h1>
        <h3>Continue for signup </h3> 
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="text"
        id="outlined-name"
        name = "name"
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        type="email"
        id="outlined-name"
        name = "email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        type="password"
        id="outlined-name"
        name = "password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <TextField
        type="text"
        id="outlined-name"
        name = "tags"
        label="Tag Your Intrest"
        value={formik.values.tags}
        onChange={formik.handleChange}
      />
       <TextField
        type="place"
        id="outlined-name"
        name = "place"
        label="location"
        value={formik.values.place}
        onChange={formik.handleChange}
      />
       <TextField
        type="img"
        id="outlined-name"
        name = "profilepic"
        label="profile picture"
        value={formik.values.profilepic}
        onChange={formik.handleChange}
      />
    
    </Box>
    <Button type="submit" variant="contained">Signup</Button>
    </form>
    </div>
  )
}

export default Signup