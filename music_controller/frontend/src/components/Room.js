import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Room = props => {
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [isHost, setIsHost] = useState(false)

  const { roomCode } = useParams()

  return (
    <div>
      <h3>Room Code: {roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause}</p>
      <p>Host: {isHost}</p>
    </div>
  )
}

export default Room
