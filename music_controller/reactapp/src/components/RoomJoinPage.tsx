import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Grid, Typography, TextField } from '@mui/material'
const RoomJoinPage = () => {
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState('')

  let navigate = useNavigate()

  const handleTextFieldChange = (event: any) => {
    setRoomCode(event.target.value)
  }

  const roomButtonPressed = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: roomCode,
      }),
    }

    const feedBack = await fetch('/api/join-room', requestOptions)
    if (feedBack.status == 200) {
      navigate(`/room/${roomCode}`)
    } else {
      setError('Room not found')
    }
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          onClick={roomButtonPressed}
        >
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  )
}

export default RoomJoinPage
