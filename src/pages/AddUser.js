import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AddUser = () => {
const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
});

const { name, email, contact, address } = state;

  return (

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 120}}>
        
      <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
        >
           


        <div>
            <h2>ADD USER</h2>
        </div>
        
        <TextField id="standard-basic" variant="standard" label="Name" value={name} type="text" /><br />
        <TextField id="standard-basic" variant="standard" label="email" value={email} type="text" /><br />
        <TextField id="standard-basic" variant="standard" label="contact" value={contact} type="text" /><br />
        <TextField id="standard-basic" variant="standard" label="address" value={address} type="text" /><br />

        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', marginRight:"20px"}}>
                <Link to="/" style={{ textDecoration: 'none'}}>
                <Button variant='contained' color = "secondary">Go Back</Button>
                </Link>
            </div>
            <div style={{display: 'flex',  justifyContent:'right', alignItems:'right'}}>
            <Button style={{width: "100px"}} variant='contained' color = "primary" type='submit'>Submit</Button>
            </div>
        </div>
      </Box>
    </div>
  )
}

export default AddUser
