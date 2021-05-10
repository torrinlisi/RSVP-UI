import React, { useState } from 'react';
import { Typography, Grid, TableContainer, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { width } from '@material-ui/system';

const Admin = () => {
    const [attendancesData, setAttendanceData] = useState([]);

    const getAttendanceData = () => {
        setAttendanceData([]);
        let config = {
            headers: {
                'x-api-key': '969jrQYjlh8D9psm47ix22kCMZx7C1QC3xBaXndh'
            }
        }

        axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin`, config)
            .then(async (res) => {
                if(res.data.attendancesData.length > 0) {
                    await setAttendanceData(res.data.attendancesData);
                }
                console.log(attendancesData.length)
                console.log(res.data.attendancesData[0].name)
            })
    }
    
    return(
        <>
        <div className="adminContainer">
            <Grid container>
                <Grid item lg={12}>
                    <Typography variant="h5" className="adminTitle">Attendance Information</Typography>
                    <Button
                        onClick={() => getAttendanceData()}
                    >
                        Get Attendance Information
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
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
                            {attendancesData.map((element, index) => (
                             <>
                                <TableRow>
                                        <TableCell>{attendancesData[index].name}</TableCell>
                                        <TableCell>{attendancesData[index].covid_status}</TableCell>
                                        <TableCell>{attendancesData[index].mealname}</TableCell>
                                        <TableCell className="tableCell">{attendancesData[index].allergy}</TableCell>
                                </TableRow>
                            </>
                            ))}
                            </TableBody>                     
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
        </>
    );
}

export default Admin;