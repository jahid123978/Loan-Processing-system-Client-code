import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const UserInformation = ({accepted, handleWithdraw}) => {
    const amount = parseInt(accepted.amount);
    const period = parseInt(accepted.years);
    const interestRate = 8.9/100;
    const EMI = (amount*interestRate*Math.pow((1+interestRate), period))/Math.pow((1+interestRate), period-1);
    const EMIAmount = parseInt(EMI)
    const totalInterest = amount*interestRate*period;
    const totalInterestAmount = parseInt(totalInterest);
    const totalAmount = amount + totalInterest;
    const total = parseInt(totalAmount);
    return (
        <div>
            <Grid item xs={12} sm={12} md={6}>
             <Card sx={{width: '450px', margin: '10px 65px', textAlign: 'left'}}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        Name: {accepted.name}
        </Typography>
        <Typography variant="h6" component="div">
        Email: {accepted.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Your address: {accepted.address}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Years: {accepted.years}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Max loan: ${accepted.price}
        </Typography>
        <Typography variant="h6">
        Loans amount: ${accepted.amount}
        </Typography>
        <Typography variant="h6">
        Monthly EMI: ${EMIAmount}
        </Typography>
        <Typography variant="h6">
        Total interest: ${totalInterestAmount}
        </Typography>
        <Typography variant="h6">
        Total amount: ${total}
        </Typography>
        <input defaultValue={accepted.status} type="text" />
      </CardContent>
      <CardActions>
        <Button style={{marginLeft: '10px'}} onClick={()=>handleWithdraw(accepted._id)} variant="contained">Withdraw</Button>
      </CardActions>
    </Card>
            </Grid>
        </div>
    );
};

export default UserInformation;