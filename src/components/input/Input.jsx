

import React from 'react'

const Input = ( { setState, stateKey, stateValue } ) => {
    if (['week', 'is_holiday'].includes(stateKey)) return
  return (
    <div className='input'>
        <label htmlFor="temperature">{stateKey} ({stateValue.min.toFixed(1)} - {stateValue.max.toFixed(1)}) :</label>
        <input onChange={(e) => setState(prev => ({...prev, [stateKey] : { ...prev[stateKey], current_state : Number(e.target.value)}}))} type="range" step="0.00000000000000001" id={stateKey} name={stateKey} min = {stateValue.min} max={stateValue.max} value={stateValue.current_state}></input>
        <span id="temperature_value">{stateValue.current_state.toFixed(1)}</span>
    </div>
  )
}

export default Input
