import React from 'react'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import Room from './Room'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button, Grid, Typography, ButtonGroup } from '@material-ui/core'

const HomePage = () => {
  const homePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center"></Grid>
      </Grid>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Home Page</p>}></Route>
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  )
}

export default HomePage
