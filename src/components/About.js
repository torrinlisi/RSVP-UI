import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from '../images/bg-03.jpg';
import Typography from "@material-ui/core/Typography";


const About = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12} className="root">
                    <Paper className="banner" style={{backgroundImage:`url(${Image})`}}></Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} className="heading">
                    <Typography variant="h4">About Torrin &amp; Yan</Typography>
                    <Typography display="block" className="body" style={{paddingBottom:"20px"}}>Torrin and Yan met at the College at Brockport while working for WebTek (the college website team). At the beginning they didn't really like each other all that much, however they eventually realized they are very similar. They both can be stubborn, competitive, and reserved.</Typography>
                    <Typography display="block" className="body" style={{paddingBottom:"20px"}}>Throughout the years, Torrin helped Yan fix her bad diet habits by “accidentally” breaking her giant (9.5 x 9.5 x 3.5 in) noodle bowl, helped her change her night time schedule so she could get enough sleep, and encouraged her to exercise when she was having issues sitting at her desk for work. To this day, we still don’t know how Torrin could successfully support Yan in changing her bad habits that her parents have been trying to for years and years. Maybe that is love.</Typography>
                    <Typography display="block" className="body" style={{paddingBottom:"20px"}}>When Yan was a kid, she had a German Shepherd for a short period of time, and since then she has always wanted to have her own dog. Fortunately, Yan and Torrin were able to find the perfect puppy. Mr. Bean the Corgi joined their family two years ago, and in that time, he’s brought a lot of love and joy into their lives. He's helped Yan and Torrin through a tough time when they lost Yan’s families dog, Clancy. Mr. Bean is sweet and cute but also shares the “stubborn gene” like his parents! Yan and Torrin bring Mr. Bean everywhere they can such as Portland, Maine (Yan’s favorite city), where they got engaged. Torrin wanted Bean to witness this important moment, however Bean didn’t seem to care much. In fact, he slid out of his collar and jumped into the ocean. That was a scary moment for both of them but made the proposal even more memorable!</Typography>
                    <Typography display="block" className="body">These are just a few stories about Torrin and Yan. Please join them as they celebrate their wedding as they may share more fun and sweet stories about their relationship!</Typography>
                </Grid>
            </Grid>
        </>
    )
};

export default About;
