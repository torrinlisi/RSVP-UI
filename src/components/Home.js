import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Home = () => {
    const [rsvpID, setRSVPID] = useState("");
    const submitValue = () => {
        alert("RSVP Code: " + rsvpID);
        console.log(rsvpID);
    }
    return(
        //indentation + please make the spacing 2 instead of 4 so the indentation is cleaner
        <>
        <div className = "home">
            <Grid 
                container
                spacing={3}
                justify="center"
            >
                <Grid item xs className="textField">
                    {/* This input field is not controlled, look up the difference between uncontrolled and controlled */}
                    <TextField
                        required
                        id="filled-required"
                        label="RSVP Code"
                        variant="filled"
                        onChange={e => setRSVPID(e.target.value)}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                        }}
                        InputLabelProps={{
                            style: { color: "#d98695" }, //if the hex colors are used in multiple places have them in a constant file
                          }}
                        InputProps={{
                            style: { color: "#203344", height: "44px"}
                        }}
                    />
                </Grid>
                <Grid item xl className="rsvpCodeInput" >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={submitValue}
                    >
                        RSVP
                    </Button> 
                </Grid>
            </Grid>
        </div>
        </>
    )    
};
  
export default Home;
