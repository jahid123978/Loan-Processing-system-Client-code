import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [updateStatus, setUpdateStatus] = useState([]);
    // console.log(RequestId);

    const handleNameChange = (e) => {
        const statusUpdate = e.target.value;
        const changeStatus = { status: statusUpdate };
        setUpdateStatus(changeStatus);
    };
    const handleUpdateStatus = () => {
        fetch(`https://sheltered-depths-76360.herokuapp.com/allLoanRequest/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Status Changed Successfully!");
                    setUpdateStatus({});
                }
            });
    };

    useEffect(() => {
        fetch(`https://sheltered-depths-76360.herokuapp.com/allLoanRequest/${id}`)
            .then((res) => res.json())
            .then((data) => setUpdateStatus(data));
    }, []);
    return (
        <div style={{marginTop: '50px', marginBottom: '200px'}}>
        <Container>
            <input
                style={{width: '30%', height: '40px', border: '1px solid black', borderRadius: '5px'}}
                type="text"
                value={updateStatus.status}
                className="me-3"
                onChange={handleNameChange}
            ></input>
            
            <Button variant="contained" onClick={handleUpdateStatus}>
                Update Status
            </Button>{" "}
           
        </Container>
    </div>
    );
};

export default Update;