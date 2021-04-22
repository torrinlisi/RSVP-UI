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
        <>
        <div className = "home">
            <Grid 
                container
                spacing={3}
                justify="center"
            >
                <Grid item xs className="textField">
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
                            style: { color: "#d98695" },
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
