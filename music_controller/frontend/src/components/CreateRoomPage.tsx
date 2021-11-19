import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@material-ui/core'

const CreateRoomPage = () => {
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(true)

  let navigate = useNavigate()

  const handleVotesChange = event => {
    setVotesToSkip(event.target.value)
  }

  const handleGuestCanPause = event => {
    setGuestCanPause(event.target.value === 'true' ? true : false)
  }

  const handleRoomButtonPressed = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    }

    const feedBack = await fetch('/api/create-room', requestOptions)
    const jsonFeedBack = await feedBack.json()
    console.log(jsonFeedBack)

    navigate(`/room/${jsonFeedBack.code}`)
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} justify="center">
        <Typography component="h4" variant="h4">
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center">
        <FormControl component="fieldset">
          <FormHelperText component="div">
            <p>Guest Control of Playback State</p>
          </FormHelperText>
          <RadioGroup row defaultValue="true" onChange={handleGuestCanPause}>
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} justify="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            onChange={handleVotesChange}
            defaultValue={votesToSkip}
            inputProps={{ min: 1, style: { textAlign: 'center' } }}
          />
          <FormHelperText component="div">
            <p>Votes Required to Skip Song</p>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} justify="center">
        <Button
          color="secondary"
          variant="contained"
          onClick={handleRoomButtonPressed}
        >
          Create A Room
        </Button>
      </Grid>
      <Grid item xs={12} justify="center">
        <Button color="primary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  )
}

export default CreateRoomPage
