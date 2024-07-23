

import React, { useState } from 'react';
import './Prediction.css';

import Main from '../main/Main';

import { useNavigate } from 'react-router-dom';

const Prediction = () => {
  const [week, setWeek] = useState(0)

  return (
    <div className='Prediction'>
      <Header week={week} setWeek={setWeek}/>
      <Main week={week} setWeek={setWeek} />
    </div>
  )
}

export default Prediction

const Header = ({week, setWeek}) => {
    const navigate = useNavigate();
    return (
        <header>
            <h1 className="description" onClick={() => navigate('..')}>Sales Forecasting</h1>
            <p><span onClick={() => setWeek(prev => prev - 1)}>{week > 0 && '<<'}</span> Week {week} <span onClick={() => setWeek(prev => prev+1)}>{'>>'}</span></p>
        </header>
    )
}
