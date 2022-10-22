import {useState} from "react";
import { ConstantTypes } from 'utils/constant';

const Controls = ({dispatch, playerList}: any) => {
  const [type, setType] = useState('');
  return (
    <div className='card shadow'>
      <h3 className='display-6'>Controls</h3>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-wrap gap-3">
          <button type="button" className={'btn btn-outline-secondary ' + (type === ConstantTypes.ASC ? 'active' : 'inactive')} onClick={() => setType(ConstantTypes.ASC) }>Sort Acs</button>
          <button type="button" className={'btn btn-outline-secondary ' + (type === ConstantTypes.DESC ? 'active' : 'inactive')} onClick={() => setType(ConstantTypes.DESC) }>Sort Desc</button>
        </div>
        <button type="submit" className='btn btn-outline-primary' onClick={() => dispatch({type: type, payload: playerList })}>Sort Player</button>
      </div>

    </div>
  )
}

export default Controls;
