import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Users({user}) {

    const [vote, setVote]= useState(0);

//     const user = {
//     id: "100",
//     name: "RRR",
//     profilePic:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     place: "India",
//     question:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     tags: ["js","java"]
//   }
  return <div className='user-container'>
      
                <img src={user.profilePic} alt = "user profilePic" className='user-profilePic'/>
            <div className='user-contents'>
                <p className='user-name'>{user.name}</p>
                <p className='user-place'>{user.place}</p>
                <Button onClick={()=>setVote(vote+1)} variant="Outlined" color="primary" endIcon={<ThumbUpOffAltIcon/>}>
                    {vote}
                </Button>
            </div>
        </div>
}

export default Users