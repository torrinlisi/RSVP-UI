import React, { useState, useEffect } from 'react';
import { Typography, Grid, TableContainer, Table, TableRow, TableHead, TableCell, TableBody, CardContent, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const Admin = () => {
    const [attendancesData, setAttendancesData] = useState([]);
    const [notAttendancesData, setNotAttendancesData] = useState([]);
    const [awaitingData, setAwaitingData] = useState([]);

    useEffect(() => {
        const getAttendanceData = () => {
            setAttendancesData([]);
            let config = {
                headers: {
                    'x-api-key': '969jrQYjlh8D9psm47ix22kCMZx7C1QC3xBaXndh'
                }
            }
    
            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=true`, config)
                .then(async (res) => {
                    if(res.data.guestsData.length > 0) {
                        await setAttendancesData(res.data.guestsData);
                    }
                })
            
            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=false`, config)
            .then(async (res) => {
                if(res.data.guestsData.length > 0) {
                    await setNotAttendancesData(res.data.guestsData);
                }
            })

            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=awaiting`, config)
            .then(async (res) => {
                if(res.data.guestsData.length > 0) {
                    await setAwaitingData(res.data.guestsData);
                }
            })
        }
        getAttendanceData();

        
        // adminCondition = false
        // getAttendanceData(adminCondition);
        // adminCondition = 'no respond'
        // getAttendanceData(adminCondition);


    }, []);
    
    return(
        <div className="adminContainer">
            <Grid container>
                <Grid item lg={12}>
                    <Typography variant="h5" className="adminTitle">Attendance Information</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Total Attendance Count</Typography>
                            <Typography variant="h5" component="h2">{attendancesData.length}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Rejection Count</Typography>
                            <Typography variant="h5" component="h2">{notAttendancesData.length}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Await Count</Typography>
                            <Typography variant="h5" component="h2">{awaitingData.length}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            {/* <Grid container>
                <Grid item lg={12} className="adminBody">
                    <TableContainer>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Covid Status</TableCell>
                                    <TableCell>Meal Option</TableCell>
                                    <TableCell>Allergy</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {guestsData.map((element, index) => (
                                <TableRow>
                                        <TableCell>{guestsData[index].name}</TableCell>
                                        <TableCell>{guestsData[index].covid_status}</TableCell>
                                        <TableCell>{guestsData[index].mealname}</TableCell>
                                        <TableCell className="tableCell">{attendancesData[index].allergy}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>                     
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid> */}
        </div>

    );
}

export default Admin;