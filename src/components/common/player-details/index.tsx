import Toaster from 'components/ui/toaster';
import React, { useEffect, useState } from 'react'

const PlayerDetails = ({player}: any) => {

  const [response, setResponse] = useState('');
  const [ishidden, setIshidden] = useState(false);
   // Simple POST request with a JSON body using fetch
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player)
  };

  const submitHandler = () => {
    if (player) {
      fetch('https://mockapi-player.free.beeceptor.com', requestOptions)
          .then((response: any) => {
            setIshidden(true)
            console.log(response.body)
            setResponse('Player Data Save Successfully');
            setTimeout(() => {
              setIshidden(false)
            }, 2000)
          })
    }
  };
  return (
    <div className="d-flex flex-column">
    <div className='card shadow min-heigth'>
      <h3 className='display-6'>Player Details</h3>
      {player ? (
        <>
        <ul>
          <li>{player?.first_name}</li>
          <li>{player?.player_name}</li>
          <li>{player?.asset}</li>
        </ul>

        <button type="submit" className='btn btn-outline-primary' onClick={() => submitHandler()}>Submit</button>
      </>
      ) : (
        <figcaption className="blockquote-footer mt-2">select player to views details</figcaption>
      )}
    </div>
      {ishidden &&  <Toaster text={response}></Toaster> }
    </div>
  )
}

export default PlayerDetails;
