import React, { useState, useEffect } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { Button, Grid, Typography, ButtonGroup } from '@mui/material';

const HomePage = () => {
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    checkIfInRoom();
  }, []);

  const checkIfInRoom = async () => {
    const feedBack = await fetch('http://127.0.0.1:8000/api/user-in-room');
    const jsonFeedBack = await feedBack.json();
    setRoomCode(jsonFeedBack.code);
  };

  const HomePageComponent = () => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            Music Listening With Friends
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  const clearRoomCode = () => {
    setRoomCode(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            roomCode ? (
              <Navigate to={`/room/${roomCode}`} />
            ) : (
              <HomePageComponent />
            )
          }
        />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route
          path="/create"
          element={
            <CreateRoomPage
              votesToSkipProp={2}
              guestCanPauseProp={true}
              updateProp={false}
              roomCodeProp={''}
              updateCallBackProp={() => {}}
            />
          }
        />
        <Route
          path="/room/:roomCode"
          element={<Room leaveRoomCallBack={clearRoomCode} />}
        />
      </Routes>
    </Router>
  );
};

export default HomePage;
