import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useParams, useNavigate } from 'react-router-dom'
import CreateRoomPage from './CreateRoomPage'

const Room = props => {
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [isHost, setIsHost] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false)

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

  const authenticateSpotify = async () => {
    const response = await fetch('/spotify/is-authenticated')
    const responseJson = await response.json()
    setSpotifyAuthenticated(responseJson.status)
    console.log(responseJson.status)

    if (!responseJson.status) {
      const response = await fetch('/spotify/get-auth-url')
      const responseJson = await response.json()
      window.location.replace(responseJson.url)
    }
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

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    )
  }

  const renderSettings = () => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <CreateRoomPage
            updateProp={true}
            votesToSkipProp={votesToSkip}
            guestCanPauseProp={guestCanPause}
            roomCodeProp={roomCode}
            updateCallBackProp={getRoomDetails}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setShowSettings(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    )
  }

  useEffect(() => {
    getRoomDetails()
  }, [])

  useEffect(() => {
    console.log('checking if host...')
    authenticateSpotify()
  }, [isHost])

  if (showSettings) {
    return renderSettings()
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
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Votes: {votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Guest Can Pause: {guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Host: {isHost.toString()}
        </Typography>
      </Grid>
      {isHost ? renderSettingsButton() : null}
      <Grid item xs={12}>
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
