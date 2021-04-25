import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios';

const Home = () => {
  const [rsvpCode, setRSVPCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);

  const submitValue = () => {
    // alert("RSVP Code: " + rsvpCode);
    console.log(rsvpCode);

    setIsValidCode(true)

    // axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/rsvp?rsvpCod${rsvpCode}`)
    //   .then(res => {
    //     // const persons = res.data;
    //     // this.setState({ persons });
    //     setIsValidCode(true)
    //   })
  }

  const defaultView = () => {
    return (
      <Grid 
        container
        // spacing={3}
        justify="center"
      >
        <Grid item xs className="textField">
          <TextField
            required
            id="filled-required"
            label="RSVP Code"
            variant="filled"
            value={rsvpCode}
            onChange={e => setRSVPCode(e.target.value)}
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
    )
  }

  const successfulCodeView = () => {
    return (
      <Grid 
        container
        // spacing={3}
        justify="center"
      >
        <Grid item xs={6} className="textField">
          <Select>
            <MenuItem value={1}>Test1</MenuItem>
            <MenuItem value={2}>Test2</MenuItem>
            <MenuItem value={3}>Test3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6} className="textField">
          <TextField
            required
            label="Allergies"
            variant="filled"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            InputLabelProps={{
              style: { color: "#d98695" }
            }}
            InputProps={{
              style: { color: "#203344", height: "44px"}
            }}
          />
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <div className = "home"></div>
      {!isValidCode && defaultView() }
      {isValidCode && successfulCodeView() }
    </>
  )    
};
  
export default Home;
