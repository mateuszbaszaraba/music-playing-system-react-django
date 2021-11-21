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
  Collapse,
} from '@material-ui/core'

const CreateRoomPage = ({
  votesToSkipProp = 2,
  guestCanPauseProp = true,
  updateProp = false,
  roomCodeProp = null,
  updateCallBackProp = () => {},
}) => {
  const [votesToSkip, setVotesToSkip] = useState(votesToSkipProp)
  const [guestCanPause, setGuestCanPause] = useState(guestCanPauseProp)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

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

  const handleUpdateButtonPressed = async () => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
        code: roomCodeProp,
      }),
    }

    const feedBack = await fetch('/api/update-room', requestOptions)
    const jsonFeedBack = await feedBack.json()
    console.log(jsonFeedBack)
    if (feedBack.ok) {
      setSuccessMsg('Room updated successfully')
    } else {
      setErrorMsg('Error updating room...')
    }
    updateCallBackProp()
  }

  const renderCreateButtons = () => {
    return (
      <Grid container spacing={1}>
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

  const renderUpdateButtons = () => {
    return (
      <Grid item xs={12} justify="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleUpdateButtonPressed}
        >
          Update Room
        </Button>
      </Grid>
    )
  }

  const title = updateProp ? 'Update Room' : 'Create a Room'

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} justify="center">
        <Typography component="h4" variant="h4">
          <Collapse in={errorMsg != '' || successMsg != ''}>
            {successMsg}
          </Collapse>
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center">
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center">
        <FormControl component="fieldset">
          <FormHelperText component="div">
            <p>Guest Control of Playback State</p>
          </FormHelperText>
          <RadioGroup
            row
            defaultValue={guestCanPauseProp.toString()}
            onChange={handleGuestCanPause}
          >
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
      {updateProp ? renderUpdateButtons() : renderCreateButtons()}
    </Grid>
  )
}

export default CreateRoomPage
