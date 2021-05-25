import React, { useState, useEffect } from 'react';
import { Typography, Grid, TableContainer, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';


const Admin = () => {
    const [attendancesData, setAttendanceData] = useState([]);

    useEffect(() => {
        const getAttendanceData = () => {
            setAttendanceData([]);
            let config = {
                headers: {
                    'x-api-key': 'FWebb2j6YN7vpHdNKIwkg4Pbt7sTRzEB6jfm9wsx'
                }
            }
    
            axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/admin`, config)
                .then(async (res) => {
                    if(res.data.attendancesData.length > 0) {
                        await setAttendanceData(res.data.attendancesData);
                    }
                })
        }

        getAttendanceData();
    }, []);
    
    return(
        <div className="adminContainer">
            <Grid container>
                <Grid item lg={12}>
                    <Typography variant="h5" className="adminTitle">Attendance Information</Typography>
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
                                <TableRow>
                                        <TableCell>{attendancesData[index].name}</TableCell>
                                        <TableCell>{attendancesData[index].covid_status}</TableCell>
                                        <TableCell>{attendancesData[index].mealname}</TableCell>
                                        <TableCell className="tableCell">{attendancesData[index].allergy}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>                     
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>

    );
}

export default Admin;