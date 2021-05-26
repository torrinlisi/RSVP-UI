import React, { useState, useEffect } from 'react';
import { Typography, Grid, TableContainer, Table, TableRow, TableHead, TableCell, TableBody, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { Tabs, Tab, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

function TabPanel(props){
    const { children, value, index, ...other } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`wrapped-tabpanel-${index}`}
          aria-labelledby={`wrapped-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

const Admin = () => {
    const [attendancesData, setAttendancesData] = useState([]);
    const [notAttendancesData, setNotAttendancesData] = useState([]);
    const [awaitingData, setAwaitingData] = useState([]);
    const [value, setValue] = useState('attendence');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getAttendanceData = () => {
            setAttendancesData([]);
            let config = {
                headers: {
                    'x-api-key': 'FWebb2j6YN7vpHdNKIwkg4Pbt7sTRzEB6jfm9wsx'
                }
            }
    
            axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/admin?adminCondition=true`, config)
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
                    </Card>
                </Grid>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Rejection Count</Typography>
                            <Typography variant="h5" component="h2">{notAttendancesData.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Awaiting Count</Typography>
                            <Typography variant="h5" component="h2">{awaitingData.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className="adminBody">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Attendence Information" value="attendence" wrapped {...a11yProps('attendence')} />
                        <Tab label="Rejection Information" value="rejection" wrapped {...a11yProps('rejection')} />
                        <Tab label="Await List" value="await" wrapped {...a11yProps('await')} />
                    </Tabs>
                    <TabPanel value={value} index="attendence">
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
                    </TabPanel>
                    <TabPanel value={value} index="rejection">
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableCell>Name</TableCell>
                                </TableHead>
                                <TableBody>
                                    {notAttendancesData.map((element, index) => (
                                        <TableRow>
                                            <TableCell>{notAttendancesData[index].name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel value={value} index="await">
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableCell>Name</TableCell>
                                </TableHead>
                                <TableBody>
                                    {awaitingData.map((element, index) => (
                                        <TableRow>
                                            <TableCell>{awaitingData[index].name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </Grid>
            </Grid>
        </div>

    );
}

export default Admin;