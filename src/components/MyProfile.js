import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react' ;

function MyProfile({data}) {

      const [toggle, setToggle] = useState("false");

  return (
    <div>
       <h2>{data.name}</h2>
       <p>{data.profilePic}</p>
      <button onClick={toggle? 
       <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
     >
    <TextField id="outlined-basic" label="Outlined" placeholder='ask your doubts here' variant="outlined" />
    </Box> : setToggle(!toggle)
    }
       />
       <p>{data}</p>
    </div>
  )
}

export default MyProfile