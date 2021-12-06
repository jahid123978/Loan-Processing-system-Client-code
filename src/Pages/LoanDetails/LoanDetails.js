import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from './../Context/useAuth';
import { useForm } from 'react-hook-form';
import './LoanDetails.css';


const LoanDetails = () => {
    // const [loans, setLoans] = useState([]);
    const [appliedLoan, setAppliedLoan] = useState([]);
    const {loanId} = useParams();
    const {loans, user} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    useEffect(()=>{
        const findResult = loans.find(loan => loan._id == loanId);
        setAppliedLoan(findResult);
    }, [loans])
    console.log(appliedLoan);

    const onSubmit = data => {
         const usersDetails = {status: "Processing", loanName: appliedLoan.name, image: appliedLoan.image, time: appliedLoan.time, price: appliedLoan.price, 
         description: appliedLoan.description, name: data.name, email: data.email, panNum: data.number, address: data.address,
         years: data.years, amount: data.amount};

         fetch('https://sheltered-depths-76360.herokuapp.com/loanRequest', {
             method: 'POST',
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(usersDetails)
         })
         .then(res => res.json())
         .then(result =>{
             alert("Inserted Details Successfully");
             reset();
         })
         navigate('/users')
    }
    return (
        <div className="container">
            {/* <h1>{appliedLoan.name}</h1> */}
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
                <img style={{width: '600px', height: '400px', marginTop: '20px'}} src={appliedLoan.image} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
           <div style={{margin: '10px 20px', textAlign: 'left'}}>
           <h1>Loan name: {appliedLoan.name}</h1>
            <h2>Years limit: {appliedLoan.time}</h2>
            <h2>Max loan: {appliedLoan.price}</h2>
            <p>Description: {appliedLoan.description}</p>
           </div>
            </Grid>
            </Grid>
              <h1>Provide Your Details</h1>
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
            <div style={{textAlign: 'left', marginLeft: '140px'}}>
            <div style={{marginTop:'10px', marginBottom: '1px'}}>
            <label className="name">Name: </label>
            <input style={{padding: '10px', borderRadius: '20px', marginLeft: '45px', width: '250px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
            </div>
             <br />
             <div style={{marginBottom: '1px'}}>
             <label className="phone">PAN Number: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="PAN Number" type="number" {...register("number", )} />
             </div>
              <br />
             <div>
             <label className="address" htmlFor="">Address: </label>
             <input style={{padding: '10px', borderRadius: '20px', marginLeft: '30px', width: '250px'}} placeholder="Address" {...register("address")} />
             </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
             <div style={{textAlign: 'left'}}>
             <div style={{marginTop: '10px', marginBottom: '1px'}}>
             <label className="email">Email: </label>
            <input style={{padding: '10px', borderRadius: '20px', marginLeft: '45px', width: '250px'}} defaultValue={user.email} {...register("email")} />
             </div>
              <br />
            <div>
            <label className="city" htmlFor="">Tenure years: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="Years" {...register("years")} />
            </div>
            <br />
            <label className="city" htmlFor="">Loan amount: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="Amount" {...register("amount")} />
             </div>
            </Grid>
            </Grid>
           <br />
         <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default LoanDetails;