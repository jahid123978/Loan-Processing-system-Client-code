import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loan = ({loan}) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/loanDetails/${loan._id}`)
    }
    return (
        <div>
             <Grid item xs={12} sm={12} md={4}>
             <Card sx={{width:'380px', margin: '10px 10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={loan.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {loan.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Max loan: ${loan.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Years: {loan.time}
          </Typography>
            <Button onClick={handleDetails} style={{marginLeft: '250px'}}><Icon color="primary">add_circle</Icon></Button>
        </CardContent>
      </CardActionArea>
    </Card>
             </Grid>
        </div>
    );
};

export default Loan;