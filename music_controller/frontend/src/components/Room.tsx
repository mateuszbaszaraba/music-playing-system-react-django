import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useParams, useNavigate } from 'react-router-dom'

const Room = props => {
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [isHost, setIsHost] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const { roomCode } = useParams()

  let navigate = useNavigate()

  const getRoomDetails = async () => {
    const response = await fetch('/api/get-room' + '?code=' + roomCode)
    if (!response.ok) {
      props.leaveRoomCallBack()
      navigate('/')
    }
    const jsonFeedBack = await response.json()

    setVotesToSkip(jsonFeedBack.votes_to_skip)
    setGuestCanPause(jsonFeedBack.guest_can_pause)
    setIsHost(jsonFeedBack.is_host)
  }

  const leaveRoomHandler = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }
    await fetch('/api/leave-room', requestOptions)
    props.leaveRoomCallBack()
    navigate('/')
  }

  const updateShowSetting = value => {
    setShowSettings(value)
  }

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateShowSetting(true)}
        >
          Settings
        </Button>
      </Grid>
    )
  }

  useEffect(() => {
    getRoomDetails()
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} justifyContent="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography variant="h6" component="h6">
          Votes: {votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography variant="h6" component="h6">
          Host: {isHost.toString()}
        </Typography>
      </Grid>
      {isHost ? renderSettingsButton() : null}
      <Grid item xs={12} justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={leaveRoomHandler}
        >
          Leave Room
        </Button>
      </Grid>
    </Grid>
  )
}

export default Room
