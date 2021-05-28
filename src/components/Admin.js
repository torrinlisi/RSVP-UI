import React, { useState, useEffect } from 'react';
import { Typography, Grid, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { Tabs, Tab, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import {FilterList, Search, Clear, SaveAlt, ArrowDownward, FirstPage, LastPage, ChevronRight, ChevronLeft} from '@material-ui/icons';

const Admin = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [notAttendanceData, setNotAttendanceData] = useState([]);
    const [awaitingData, setAwaitingData] = useState([]);
    const [value, setValue] = useState('attendence');

    const tableIcons = {
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    }
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getAttendanceData = () => {
            setAttendanceData([]);
            let config = {
                headers: {
                    // 'x-api-key': 'FWebb2j6YN7vpHdNKIwkg4Pbt7sTRzEB6jfm9wsx'
                    //Yan's API Key
                    'x-api-key': '969jrQYjlh8D9psm47ix22kCMZx7C1QC3xBaXndh'
                }
            }
    
            // axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/admin?adminCondition=true`, config)
            //Yan's Endpoint
            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=true`, config)
                .then(async (res) => {
                    if(res.data.guestData.length > 0) {
                        await setAttendanceData(res.data.guestData);
                    }
                })
            
            // axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/admin?adminCondition=false`, config)    
            //Yan's Endpoint
            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=false`, config)
            .then(async (res) => {
                if(res.data.guestData.length > 0) {
                    await setNotAttendanceData(res.data.guestData);
                }
            })
            
            // axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/admin?adminCondition=awaiting`, config)    
            //Yan's Endpoint
            axios.get(`https://9jnxvfagb0.execute-api.us-east-1.amazonaws.com/yan/admin?adminCondition=awaiting`, config)
            .then(async (res) => {
                if(res.data.guestData.length > 0) {
                    await setAwaitingData(res.data.guestData);
                }
            })
        }
        getAttendanceData();

    }, []);
    const TabPanel = (props) => {
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
    
    const a11yProps = (index) => {
        return {
          id: `wrapped-tab-${index}`,
          'aria-controls': `wrapped-tabpanel-${index}`,
        };
      }

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
                            <Typography variant="h5" component="h2">{attendanceData.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} variant="outlined">
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Rejection Count</Typography>
                            <Typography variant="h5" component="h2">{notAttendanceData.length}</Typography>
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
                        <Tab label="Awaiting List" value="await" wrapped {...a11yProps('await')} />
                    </Tabs>
                    <TabPanel value={value} index="attendence">
                        <MaterialTable 
                            icons = {tableIcons}
                            title = "Attendance List"
                            columns = {[
                                {title: 'Name', field: 'name'},
                                {title: 'Covid Status', field: 'covid_status'},
                                {title: 'Meal Option', field: 'mealname'},
                                {title: 'Allergy', field: 'allergy'}
                            ]}
                            data = {attendanceData}
                            options = {{
                                exportButton: true,
                                exportAllData: true,
                                pageSize: 10,
                            }}

                        />
                    </TabPanel>
                    <TabPanel value={value} index="rejection">
                        <MaterialTable 
                            icons = {tableIcons}
                            title = "Rejection List"
                            columns = {[
                                {title: 'Name', field: 'name'},
                            ]}
                            data = {notAttendanceData}
                            options = {{
                                exportButton: true,
                                exportAllData: true,
                                pageSize: 10,
                            }}
                        />

                    </TabPanel>

                    <TabPanel value={value} index="await">
                        <MaterialTable
                            icons = {tableIcons}
                            title = "Awaiting List"
                            columns={[
                                {title: 'Name', field: 'name'},
                            ]}
                            data={awaitingData}
                            options={{
                                exportButton: true,
                                exportAllData: true,
                                pageSize: 10,
                            }}
                         />
                    </TabPanel>
                </Grid>
            </Grid>
        </div>

    );
}

export default Admin;