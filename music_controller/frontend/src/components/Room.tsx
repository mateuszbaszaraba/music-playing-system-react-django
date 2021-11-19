import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Room = props => {
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [isHost, setIsHost] = useState(false)

  const { roomCode } = useParams()

  const getRoomDetails = async () => {
    const feedBack = await fetch('/api/get-room' + '?code=' + roomCode)
    const jsonFeedBack = await feedBack.json()

    setVotesToSkip(jsonFeedBack.votes_to_skip)
    setGuestCanPause(jsonFeedBack.guest_can_pause)
    setIsHost(jsonFeedBack.is_host)

    // fetch('/api/get-room' + '?code=' + roomCode)
    //   .then(response => response.json())
    //   .then(data => {
    //     setVotesToSkip(data.votes_to_skip)
    //     setGuestCanPause(data.guest_can_pause)
    //     setIsHost(data.is_host)
    //   })
  }

  useEffect(() => {
    getRoomDetails()
  }, [])

  return (
    <div>
      <h3>Room Code: {roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause.toString()}</p>
      <p>Host: {isHost.toString()}</p>
    </div>
  )
}

export default Room