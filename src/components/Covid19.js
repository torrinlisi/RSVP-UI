import React from 'react';
import { Grid, Paper, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Image from '../images/yangyan-torrin-engagment-4.jpg';

const COVID = () => {
    return (
        <>
        <Grid container>
            <Grid item lg={12} className="root">
                <Paper className="banner" style={{backgroundImage:`url(${Image})`}} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} className="heading">
                <Typography variant="h4" style={{paddingBottom:"20px"}}>COVID-19 Wedding</Typography>
                <Typography display="block" className="body">We believe the safty of our guests are the most important thing at the wedding. 
                We want our guests to have a great time at the wedding and also follow the Health and Safety
                Protocol NYS announces. Please review the rules below and <a href="mailto:torrinlisi@gmail.com" target="_top">contact us</a> if you have any questions.
                </Typography>
                <Grid item lg={12} className="body" style={{marginTop:"20px"}}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Do you require a proof of immunization(fully vaccinated) or a negative Covid test result?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. Based on the current NYS rules, all attendees(over the age of 2) must have proof of recent negative test result or proof of immunization prior to the event.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Do I require to provide contact information to your venue?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. Sign-in with contact information required to assist with potential contact tracing.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">How many people have you invited?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Due to COVID-19, we have cut down our guest list to 75 people. We have checked with our venue
                                and the amount of people we invited are under 50% of their capacity.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Do I need to wear a mask during the wedding?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. Masks will be required at all times except when seated and eating or drinking.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Do we allow to dance at the wedding?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. Socially-distanced dancing allowed in designated areas. 
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Do you provide masks?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. If you forget or lose your mask, please check out our Welcome table. we will provide
                                extra masks to each guest.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panella-header"                  
                        >
                            <Typography variant="h6">Can I request a song from DJ at the reception?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes. Please keep social distancing and ask if you need microphone.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>


        </Grid>
        </>
    );
};

export default COVID;