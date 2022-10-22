import React from 'react'

// playerList inside props is used as alias in place of playerData
const Card = ({ playerData: playerList, setPlayer }: any) => {
  return (
      <div className="card shadow pl-0 card-size" onClick={() => setPlayer(playerList)}>
          <ul className="list-group list-unstyled">
            <li className="text-truncate">{playerList.first_name}</li>
            <li className="text-truncate">{playerList.player_name}</li>
            <li className="text-truncate">{playerList.asset}</li>
          </ul>
      </div>
  )
}

export default Card;
