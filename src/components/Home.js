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
  const [isNoRSVPFound, setIsNoRSVPFound] = useState(false);
  const [clickRSVP, setClickRSVP] = useState(false)
  const [clickRSVPForm, setClickRSVPForm] = useState(false)

  const [rsvpData, setRSVPData] = useState([]);
  const [meals, setMeals] = useState([]);

  const resetPage = () => {
    setRSVPCode("");
    setIsValidCode(false);
    setRSVPData([])
  }

  const getRSVPInfo = () => {
    let config = {
      headers: {
        'x-api-key': '1HBb6jeAJX7n8X5bVsAjGaHwbSG8r4Jg3Afz8WVG'
      }
    }

    axios.get(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/rsvp?rsvpCode=${rsvpCode}`, config)
      .then(async (res) => {
        if(res.data.rsvpData.length > 0) {
          setIsNoRSVPFound(false);
          await setMeals(res.data.meals);
          await setRSVPData(res.data.rsvpData);
          setIsValidCode(true);
          console.log(res.data.meals)
        } else {
          setIsNoRSVPFound(true);
        }
      })
  }

  const submitRSVP = () => {
    //check errors
    let isError = false;
    rsvpData.forEach((element) => {
      if(element.is_attending === null)
        isError = true;
      else if(element.is_attending === true && element.meal_id === null)
        isError = true;
    })

    if(isError) {
      alert("Please complete required fields");
      return;
    }

    let config = {
      headers: {
        'x-api-key': '1HBb6jeAJX7n8X5bVsAjGaHwbSG8r4Jg3Afz8WVG'
      }
    }

    axios.post(`https://9ddaq8z128.execute-api.us-east-1.amazonaws.com/dev/rsvp`,
      {
        "people": rsvpData.map(person => ({
          allergies: person.allergy,
          mealID: person.meal_id,
          isAttending: person.is_attending,
          rsvpPersonID: person.id
        })),
        "rsvpID": rsvpData[0].rsvp_id
      },config)
      .then(async (res) => {
        setIsValidCode(false);
        setRSVPData([]);
        setRSVPCode("");
      })
  }

  const handleChange = async (i, key, event) => {
    let data = [...rsvpData];
    data[i][key] = event;

    await setRSVPData(data);
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
              error={isNoRSVPFound}
              value={rsvpCode}
              onChange={e => setRSVPCode(e.target.value)}
              InputLabelProps={{className:"rsvpInputText"}}
              InputProps={{className:"rsvpInputText"}}
            />
          </Grid>
          <Grid item xs={12} className="rsvpCodeInput actionButton" >
            <Button
              variant="contained"
              color="secondary"
              disabled={clickRSVP}
              onClick={() => getRSVPInfo()}
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
                    <Select 
                      required 
                      disabled ={rsvpData[0].responded}
                      className="fullSizedField"
                      value={rsvpData[index].is_attending === null ? "-1" :rsvpData[index].is_attending } 
                      onChange={(value) => {
                        handleChange(index, 'is_attending', value.target.value)
                      }}>
                      <MenuItem key="select" value='-1' disabled>Select a Response</MenuItem>
                      <MenuItem key="accept" value={true}>Accept With Pleasure</MenuItem>
                      <MenuItem key="decline" value={false}>Regretfully Decline</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6} className="textField">
                    <Select 
                      required 
                      className="fullSizedField"
                      disabled={
                        rsvpData[0].responded || 
                        !rsvpData[index].is_attending
                      }
                      value={rsvpData[index].meal_id || '-1'} 
                      onChange={(value) => handleChange(index, 'meal_id', value.target.value)}>
                      <MenuItem value='-1' disabled>Select a Meal</MenuItem>
                      {rsvpData[index].age > '12' && meals.map((meal) => {
                          if(meal.id !== 4) 
                            return <MenuItem key={index + "-" + meal.id} value={meal.id}>{meal.name}</MenuItem>
                      })}
                      {rsvpData[index].age <= '12' && (
                        <MenuItem key={index + "-" + meals[3].id} value={meals[3].id}>{meals[3].name}</MenuItem>
                      )}
                    </Select>
                  </Grid>
                  <Grid item xs={12} className="textField">
                    <TextField
                      label="Allergies"
                      className="fullSizedField"
                      disabled={rsvpData[0].responded || rsvpData[index].is_attending !== true}
                      value={rsvpData[index].allergy || ''}
                      onChange={(value) => handleChange(index, 'allergy', value.target.value)}
                    />
                  </Grid>
                  {rsvpData.length > 1 && rsvpData.length !== index+1 && (
                    <Grid item xs={12} className="textField">
                      <Divider className="rsvpDivider"/>
                    </Grid>
                  )}
                </>
              ))}
              <Grid item xs={12} className="textField">
                <Button
                  variant="contained"

                  onClick={resetPage}
                  className="actionReturnButton"
                >
                  Return
                </Button>      
                  {!rsvpData[0].responded && (       
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={clickRSVPForm}
                        onClick={() => submitRSVP()}
                        className="actionButton"
                      >
                        RSVP
                    </Button>
                  )} 
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
