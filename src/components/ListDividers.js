import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



export default function ListDividers() {

    const navigate = useNavigate();
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button onClick={()=>navigate('/')}>
        <ListItemText primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button onClick={()=>navigate('/questions')}>
        <ListItemText primary="Questions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={()=>navigate('/users')} divider>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={()=>navigate('/companies')}>
        <ListItemText primary="Companies" />
      </ListItem>
      <Divider light />
      <ListItem button onClick={()=>navigate('/users/myprofile')}>
        <ListItemText primary="My profile" />
      </ListItem>
    </List>
  );
}