import React from 'react';
import useAuth from '../Context/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import UserInformation from '../UserInformation/UserInformation';
import { Grid } from '@mui/material';

const UserLoans = () => {
    const {user} = useAuth();
    const [acceptedLoan, setAcceptedLoan] = useState([]);

    useEffect(() => {
        fetch(`https://sheltered-depths-76360.herokuapp.com/loanRequest?email=${user.email}`)
        .then(res => res.json())
        .then(result =>{
            setAcceptedLoan(result);
        })
    }, [user.email])

    const handleWithdraw = id =>{
        const proceed = window.confirm('Are you sure you want to withdraw');
        if(proceed){
            const url = `https://sheltered-depths-76360.herokuapp.com/allLoanRequest/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("Successfully Withdraw");
                    const remaining =acceptedLoan.filter(loan => loan._id !== id);
                    setAcceptedLoan(remaining);
                }
            })
        }
    }

    return (
        <div>
            <Grid container md={12} sm={12} sx={12}>
            {
                acceptedLoan.map(accepted => <UserInformation
                key={accepted._id}
                accepted ={accepted}
                handleWithdraw={handleWithdraw}
                ></UserInformation> )
            }
             </Grid>
        </div>
    );
};

export default UserLoans;