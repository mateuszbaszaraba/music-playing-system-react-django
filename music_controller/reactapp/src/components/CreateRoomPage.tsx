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
  FormLabel,
} from '@mui/material'

const CreateRoomPage = ({
  votesToSkipProp = 2,
  guestCanPauseProp = true,
  updateProp = false,
  roomCodeProp = '',
  updateCallBackProp = () => {},
}) => {
  const [votesToSkip, setVotesToSkip] = useState(votesToSkipProp)
  const [guestCanPause, setGuestCanPause] = useState(guestCanPauseProp)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  let navigate = useNavigate()

  const handleVotesChange = (event: any) => {
    setVotesToSkip(event.target.value)
  }

  const handleGuestCanPause = (event: any) => {
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
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleRoomButtonPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    )
  }

  const renderUpdateButtons = () => {
    return (
      <Grid item xs={12}>
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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          <Collapse in={errorMsg != '' || successMsg != ''}>
            {successMsg}
          </Collapse>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h3" variant="h3">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Guest Control of Playback State
          </FormLabel>
          <RadioGroup
            row
            defaultValue={guestCanPauseProp.toString()}
            onChange={handleGuestCanPause}
            aria-label="Guest Control of Playback State"
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
      <Grid item xs={12}>
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
