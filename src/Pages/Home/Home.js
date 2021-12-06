import { Button, Grid } from '@mui/material';
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleExploreLoans = () => {
        navigate('/loans')
    }
    return (
        <div>
           <img className="home-picture" src="data:image/jpeg;base64,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" alt="" />
           <Button className="button"onClick={handleExploreLoans} variant="contained">Explore Loans</Button>
           <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} sm={12} md={6}>
                <div className="first-image">
                   <img className="picture" src="https://www.loandisk.com/assets/images/figures/view_loan_details.png" alt="" />
               </div>
            </Grid>
           <Grid item xs={12} sm={12} md={6}>
                <div className="contains-1">
                    <h2>Loan Management</h2>
                    <p>View loan details including repayments, loan terms, loan schedule, collateral, files, and comments. You can also print
                         loan statements and schedule for your borrowers. Set loan fees, grace period, and penalties.
                       See a snapshop of the loan on one page. You can even Send SMS to the borrower.</p>
                </div>
            </Grid>
            </Grid>
            <hr style={{margin: '15px', color: 'silver'}} />
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} sm={12} md={6}>
                <div className="contains-1">
                   <h2>Savings Accounts</h2>
                   <p>Create savings account for your borrowers and add transactions such as deposits and withdrawals. 
                       You can also print savings statement and give this to the borrower.
                     The system will automatically add interest to the savings account depending on your savings product.</p>
               </div>
            </Grid>
           <Grid item xs={12} sm={12} md={6}>
                 <div className="pirctue-2">
                    <img className="picture" src="https://www.loandisk.com/assets/images/figures/view_savings_account.png" alt="" />
                </div>     
            </Grid>
            </Grid>
            <hr style={{margin: '15px'}} />
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} sm={12} md={6}>
                <div>
                   <img className="picture-4" src="https://www.loandisk.com/assets/images/figures/home_branch.png" alt="" />
               </div>
            </Grid>
           <Grid item xs={12} sm={12} md={6}>
                 <div className="contains-1">
                    <h2>Charts and Reports</h2>
                    <p>View detailed charts and see how your loan released and collections are changing month to month.
                         You can also view cash flow reports and profit/loss statements.
                      This will allow you to instantly see your business performance through graphic charts and take informed decisions.</p>
                </div>

            </Grid>
           </Grid>
           <div style={{backgroundColor: '#dcdcdc', color: 'black', marginTop: '15px', padding: '10px'}}>
           <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} sm={12} md={4}>
           <img style={{ marginTop: '15px'}} src="https://www.loandisk.com/assets/images/people/profile-m-1.png" alt="" />
           </Grid>
           <Grid item xs={12} sm={12} md={8}>
           <h1>What are people saying about Loandisk?</h1>
               <p>We run a microfinance company in the Philippines. We have been using Loandisk for past 2 years and the experience has been great. Now we don't have to deal with endless paperwork. I know exactly what's happening in all my branches. 
                Everything is more organized and secure. We are also able to achieve higher customer satisfaction rates.</p>
           </Grid>
               </Grid>
                 
           </div>
        </div>
    );
};

export default Home;