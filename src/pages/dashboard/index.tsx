import { useState, useEffect, useReducer } from 'react'
import PlayerDetails from 'components/common/player-details';
import Controls from 'components/common/control';
import Card from 'components/common/card';
import { TApiResponse, useFetchApi } from 'hooks/useFetchApi';
import { ApiEndpoint, ConstantTypes, Player } from 'utils/constant';
import { initialState, reducer } from 'hooks/reducer';

const Dashboard = () => {
  const [player, setPlayer] = useState<Player>();
  const [state, dispatch] = useReducer(reducer, initialState);
  // let responseData: TApiResponse;
  // if(state.playerList.length) {
  //   responseData = useFetchApi(ApiEndpoint.getPlayerData);
  // }
  
  // if (!responseData.loading) {
  //   console.log(responseData);
  // } 
  useEffect(() => {
    const apiHandler = () => {
      fetch(ApiEndpoint.getPlayerData)
      .then(res => res.json())
       .then(data => {
        console.log(data)
         dispatch({type: ConstantTypes.Default, payload: { playerList: data  } });
       })
    }

    apiHandler();
    
  }, []) 

  // useEffect(() => {
  //   if(!responseData.loading) {
  //     dispatch({type: ConstantTypes.Default, payload: { playerList: responseData.data } });
  //   }
  // },[responseData])

  return (
      <div className='container-fluid d-flex flex-column  align-items-center'>
        <div className="d-flex flex-wrap ">
            <PlayerDetails player={player}></PlayerDetails>
            <Controls dispatch={dispatch} playerList={state.playerList}></Controls>
        </div>
        <div className="list">
          <h6 className="display-6 ms-3">Player List</h6>
          <div className='d-flex flex-wrap'>
            {state?.playerList?.map((p: any, i: number) => {
              return <div key={i}><Card  playerData={p} setPlayer={setPlayer}></Card></div>
            })}
              
          </div>
        </div>
      </div>
  )
}

export default Dashboard
