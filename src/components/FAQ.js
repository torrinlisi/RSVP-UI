import React from 'react';
import { Grid, Paper, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Image from '../images/ring.jpg';

const FAQ = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12} className="root">
                    <Paper className="banner" style={{backgroundImage:`url(${Image})`}} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12}>
                    <Typography variant="h4" className="heading">General Questions</Typography>
                    <Grid container className="faq">
                        <Grid item lg={12} className="body">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"                  
                                >
                                    <Typography variant="h6">When is the wedding day?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        June 19th, 2021
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">When does the ceremony start?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The doors close at 3:10pm
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">When does the reception start?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The doors open at 4:55pm
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Where is the ceremony located?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Hilton Garden Inn at College Town - 30 Celebration Dr, Rochester, NY 14620
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Is there any kind of Dress Code?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        For Men, preferably no sneakers or shorts. For Women, nothing white!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Is there a room discount?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    Yes, call Hilton Garden Inn at College Town and book a room under our last name.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Is it a cash bar?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nope, it's an open bar for a total of 4 hours. Just remember to bring your ID. Please check the Covid-19 page for the new restrictions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Can I order food other than what is provided?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        No, we are unfortunately stuck to the meals you will choose when RSVPing. (unless you have food allergies)
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className= "acordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panella-header"
                                >
                                    <Typography variant="h6">Can I have a plus one?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Due to limited space, unless indicated on your invitation otherwise, we will not be providing a plus one.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </>
    )
};

export default FAQ;