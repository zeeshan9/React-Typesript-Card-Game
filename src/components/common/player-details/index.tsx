import React from 'react'

const PlayerDetails = ({player}: any) => {
  return (
    <div className='card shadow'>
      <h3 className='display-6'>Player Details</h3>
      <ul>
        <li>{player?.first_name}</li>
        <li>{player?.player_name}</li>
        <li>{player?.asset}</li>
      </ul>
    </div>
  )
}

export default PlayerDetails;
