import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ManageLoans from './ManageLoans';

const ManageAllLoans = () => {
    const [loans, setLoans] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://sheltered-depths-76360.herokuapp.com/allLoanRequest?status=Processing')
        .then(res => res.json())
        .then(data =>{
            setLoans(data);
            console.log(data);
        })
    }, [])


    return (
        <div>
            <Grid container md={12} sm={12} sx={12}>
            {
                loans.map(loan => <ManageLoans
                key={loan._id}
                loan={loan}
                ></ManageLoans>)
            }
            </Grid>
        </div>
       
    );
};

export default ManageAllLoans;