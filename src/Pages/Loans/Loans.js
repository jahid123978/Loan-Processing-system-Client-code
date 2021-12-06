import { Grid } from '@mui/material';
import React from 'react';
import Loan from '../Loan/Loan';
import useAuth from './../Context/useAuth';

const Loans = () => {
    const {loans} = useAuth();
    return (
        <div>
            <h1>Our Loan services</h1>
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    loans.map(loan => <Loan
                    key={loan._id}
                    loan ={loan}
                    ></Loan>)
                }

            </Grid>
        </div>
    );
};

export default Loans;