import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector} from '@material-ui/lab';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import CakeIcon from '@material-ui/icons/Cake';
import GroupIcon from '@material-ui/icons/Group';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import HouseIcon from '@material-ui/icons/House';
import Image from '../images/bg-05.jpg';

const useStyle = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        height: "100%",
        width: "100%"
    },
    banner:{
        backgroundImage: `url(${Image})`, backgroundRepeat:'no-repeat', backgroundPosition:"center",
        backgroundSize: "cover",
        height: "50vh",
        width: "100%",
    },
    paper: {
        padding: '6px 60px',
      },
      secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
      },
}));
 const TimelinePage = () => {
    const classes = useStyle();
    return (
        <>
            <Grid container>
                <Grid item lg={12} className={classes.root}>
                    <Paper className={classes.banner} />
                </Grid>
            </Grid>
            <Grid containe style={{padding:"30px"}}>
                <Grid item lg={12} className={classes.root}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    2:45 pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <AirportShuttleIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Guests Arrival
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    3:00 pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <NotificationsActiveIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Door Close
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    3:05 pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <ApartmentIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Ceremony Begins
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    3:45PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <LocalBarIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Cocktail Hour
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    4:55PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <LocalDiningIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Ballroom Doors Open
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    5:10PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FavoriteIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        First Dance
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    5:20PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <ImportContactsIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Speech Time
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    6:00 PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FavoriteBorderIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Father-Daughter Dance
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    6:15 PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <TagFacesIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Mother-Son Dance
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    6:40 PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <CakeIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Cake Time
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    7:00 - 8:45 PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <GroupIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Party Time
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textPrimary">
                                    9:00 PM
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <NightsStayIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h7" component="h6">
                                        Farewell
                                    </Typography>
                                    <Typography>The hotel staff will check you in and guide you to your seat</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <HouseIcon />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </>
    )
};

export default TimelinePage;
