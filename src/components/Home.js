import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import axios from 'axios';

const Home = () => {
  const [rsvpCode, setRSVPCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);

  const [rsvpData, setRSVPData] = useState([]);
  const [meals, setMeals] = useState([]);

  const submitValue = () => {
    let config = {
      headers: {
        'x-api-key': '1HBb6jeAJX7n8X5bVsAjGaHwbSG8r4Jg3Afz8WVG'
      }
    }

    axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/rsvp?rsvpCode=${rsvpCode}`, config)
      .then(async (res) => {
        await setMeals(res.data.meals);
        await setRSVPData(res.data.rsvpData);
        setIsValidCode(true);
      })
  }

  const submitRSVP = () => {
    console.log('submitted')
  }

  const defaultView = () => {
    return (
      <Grid className="rsvp">
        <Grid container>
          <Grid item xs={12} className="textField">
            <TextField
              required
              id="rsvpCodeInput"
              label="RSVP Code"
              variant="filled"
              className="fullSizedField"
              value={rsvpCode}
              onChange={e => setRSVPCode(e.target.value)}
              InputLabelProps={{className:"rsvpInputText"}}
              InputProps={{className:"rsvpInputText"}}
            />
          </Grid>
          <Grid item xs={12} className="rsvpCodeInput submitButton" >
            <Button
              variant="contained"
              color="secondary"
              onClick={submitValue}
            >
              RSVP
            </Button> 
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const successfulCodeView = () => {
    return (
      <>
        <Grid className="rsvpForm">
          <Grid container spacing={3}>
            <Grid item xs={12} className="textField">
              <Typography variant="h5">RSVP</Typography>
            </Grid>
            {rsvpData.map((element, index) => (
              <>
                <Grid item xs={12} className="textField">
                  <TextField className="fullSizedField" label="Name" value={element.name} disabled/>
                </Grid>
                <Grid item xs={6} className="textField">
                  <Select required className="fullSizedField" defaultValue="-1">
                    <MenuItem value="-1" disabled>Select a Response</MenuItem>
                    <MenuItem value={true}>Accept With Pleasure</MenuItem>
                    <MenuItem value={false}>Regretfully Decline</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6} className="textField">
                  <Select required className="fullSizedField" defaultValue="-1">
                    <MenuItem value="-1" disabled>Select a Meal</MenuItem>
                    {meals.map((meal) => (
                      <MenuItem value={meal.id}>{meal.name}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} className="textField">
                  <TextField
                    label="Allergies"
                    className="fullSizedField"
                  />
                </Grid>
                {rsvpData.length > 1 && rsvpData.length !== index+1 && (
                  <Grid item xs={12} className="textField">
                    <Divider className="rsvpDivider"/>
                  </Grid>
                )}
              </>
            ))}
            <Grid item xs={12} className="textField submitButton">
              <Button
                  variant="contained"
                  color="secondary"
                  onClick={submitRSVP()}
                >
                  RSVP
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
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
