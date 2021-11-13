import React from 'react'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Home Page</p>}></Route>
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </Router>
  )
}

export default HomePage
