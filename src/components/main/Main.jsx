

import React, { useState, useEffect} from 'react';
import Form from '../form/Form'
import Forecast from '../forecast/Forecast';
import axios from 'axios';
import './Main.css'

const Main = ( { week, setWeek }) => {
  const [state, setState] = useState({});
  const [futureSales, setFutureSales] = useState([]);
  const [pastSales, setPastSales] = useState([]);

  const [predicted , setPredicted ] = useState(false)

  const baseUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const handleWeek = async () => {
      if (Object.keys(state).length > 0) {
        if (!predicted) handlePredict(state).then(() => handleNextWeek())
        else handleNextWeek() 
      }
    }

    handleWeek()
   
  }, [week])

  
  useEffect(() => {
      axios.get(`${baseUrl}/first_week`)
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
      axios.post(`${baseUrl}/next_week`, {week})
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

      axios.post(`${baseUrl}/predict`, {week , state: sendState})
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
