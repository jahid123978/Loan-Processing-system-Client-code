import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e =>{
            setEmail(e.target.value);
    }
    const handleAdmin = e =>{
        const user = {email}
        fetch('https://sheltered-depths-76360.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setSuccess(true);
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>This is admin side</h1>
            <form onSubmit={handleAdmin}>
                <TextField variant="standard"
                 id="standard-basic" 
                 label="Email"
                 type="email"
                 onBlur={handleOnBlur}
                 ></TextField>
                 <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Success made admin</Alert>}
        </div>
    );
};

export default MakeAdmin;