

import React, { useState, useEffect} from 'react';
import Form from '../form/Form'
import Forecast from '../forecast/Forecast';
import axios from 'axios';
import './Main.css'

const Main = ( { week, setWeek }) => {
  const [state, setState] = useState({});
  const [futureSales, setFutureSales] = useState([4, 5, 5, 6]);
  const [pastSales, setPastSales] = useState([0, 1, 2, 3]);

  const [predicted , setPredicted ] = useState(false)

  useEffect(() => {
    if (Object.keys(state).length > 0) {
        if (!predicted) handlePredict(state).then(() => handleNextWeek())
        else handleNextWeek() 
    }
   
  }, [week])

  
  useEffect(() => {
      axios.get('http://localhost:5000/first_week')
          .then(response => {
            console.log(response.data)
            const { state, past_sales, future_sales } = response.data;
            if (state) setState(state);
            if (past_sales) setPastSales(past_sales);
            if (future_sales) setFutureSales([]);
          })
          .catch(error => {
              console.error("There was an error!", error);
          });
  }, []);

  const handleNextWeek = async () => {
      axios.post('http://localhost:5000/next_week', {week})
          .then(response => {
              console.log(response.data)
              const { state } = response.data;
        
              if (state) setState(state) ; setPredicted(false)
              
          })
          .catch(error => {
              console.error("There was an error!", error);
          });
  };

  const handlePredict = async (state) => {
        const sendState = {...state};
        Object.entries(state).forEach(([k, v]) => sendState[k] = v.current_state)

      axios.post('http://localhost:5000/predict', {week , state: sendState})
          .then(response => {
            console.log(response.data)
            const { future_sales } = response.data;
            if (future_sales) setFutureSales(future_sales);
            setPredicted(true);
          })
          .catch(error => {
              console.error("There was an error!", error);
          });
  };

  return (
    <main>
        <Form state={state} setState={setState} handlePredict={handlePredict} />
        <div className='chart-container'><Forecast pastSales={pastSales} futureSales={futureSales}/></div>
    </main>
  )
}

export default Main
