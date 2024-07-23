

import React from 'react';
import Input from '../input/Input';

import './Form.css'

const Form = ({ state, setState, handlePredict }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePredict(state)
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <div className="ranges">
            <Holiday currentState={state.is_holiday?.current_state} setState={setState}/>
        
            {Object.entries(state).map(([k, v], i) => <Input setState={setState} stateKey={k} stateValue={v} key={i}/>)}
        
        </div>
        <input type="submit" value="Predict" className="start-button"/>
        <p style={{display: 'inline-block'}}>Adjust the indicators and press predict to see the forecasted sales for the given week</p>
    </form>
  )
}

export default Form

const Holiday = ({ currentState, setState }) => {
    console.log(currentState)
    const holidays = {none: "None", super_bowl: "Super Bowl", christmas: "Christmas", labor_day: "Labor Day", thanksgiving: "Thanksgiving"}
    return (
        <div className="input">
            <label htmlFor="holiday">What holiday is there this week ?  </label>
            <select name="" id="" value={currentState} onChange={e => setState(prev => ({...prev, is_holiday: {current_state: e.target.value.toLowerCase()}}))}>
                { Object.entries(holidays).map(([k, v], i) => <option key={i} value={k}>{v}</option> ) }
            </select>
        </div>
    )
}