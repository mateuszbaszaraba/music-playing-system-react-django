import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import CreateRoomPage from './CreateRoomPage';

const Room: React.FC<{ leaveRoomCallBack: Function }> = (props) => {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
  const [song, setSong] = useState({
    title: '',
    artist: '',
    duration: '',
    time: '',
    image_url: '',
    is_playing: false,
    votes: 0,
    id: '',
  });

  const { roomCode } = useParams();

  let navigate = useNavigate();

  const getRoomDetails = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/api/get-room?code=' + roomCode
    );
    console.log('fetched get-room');
    if (!response.ok) {
      console.log('response is not ok');
      props.leaveRoomCallBack();
      navigate('/');
    }
    const jsonFeedBack = await response.json();

    setVotesToSkip(jsonFeedBack.votes_to_skip);
    setGuestCanPause(jsonFeedBack.guest_can_pause);
    console.log('setishost' + jsonFeedBack.is_host);
    setIsHost(jsonFeedBack.is_host);
  };

  const authenticateSpotify = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/spotify/is-authenticated'
    );
    console.log('fetched is authenticared');
    const responseJson = await response.json();
    setSpotifyAuthenticated(responseJson.status);
    console.log('spotify response' + responseJson.status);
    if (!responseJson.status) {
      const response = await fetch(
        'http://127.0.0.1:8000/spotify/get-auth-url'
      );
      console.log('spotify response not ok');

      const responseJson = await response.json();
      window.location.replace(responseJson.url);
    }
  };

  const getCurrentSong = async () => {
    const response = await fetch('http://127.0.0.1:8000/spotify/current-song');
    console.log(response);
    if (!response.ok) {
      console.log('response not ok');
      return {};
    } else {
      console.log('response ok');
      const responseJson = await response.json();
      setSong(responseJson);
      console.log(responseJson);
    }
  };

  const leaveRoomHandler = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    await fetch('http://127.0.0.1:8000/api/leave-room', requestOptions);
    props.leaveRoomCallBack();
    navigate('/');
  };

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
    );
  };

  useEffect(() => {
    console.log('get room details');
    getRoomDetails();
  });

  useEffect(() => {
    console.log('checking if host...');
    authenticateSpotify();
  }, [isHost]);

  useEffect(() => {
    if (spotifyAuthenticated) {
      const interval = setInterval(getCurrentSong, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

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
            roomCodeProp={roomCode!}
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
    );
  };

  if (showSettings) {
    return renderSettings();
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
      {song.title}
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
  );
};

export default Room;
