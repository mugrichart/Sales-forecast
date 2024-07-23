

import React from 'react';
import './Home.css';

import { useNavigate } from 'react-router-dom';
import screenShot from '../../assets/screenShot.png'

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="Home">
        <h1>Welcome to Our Sales Forecasting App</h1>
        <p>This app leverages a sophisticated LSTM (Long Short Term Memory) model that was meticulously trained on comprehensive sales data from Walmart, spanning the period between 2010 and 2012. Designed to provide accurate sales forecasts, our application incorporates a variety of key indicators to predict future sales with precision.</p>
        <button className="start-button" onClick={() => navigate('prediction')}>Start Forecasting</button><hr />
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Advanced LSTM Model:</strong> Utilizes Long Short Term Memory networks for high accuracy in forecasting.</li>
            <li><strong>Comprehensive Data Training:</strong> The model's training is based on extensive Walmart sales data February 2010 and January 2012.</li>
            <li><strong>Diverse Indicators:</strong> Forecasts consider various factors including temperature, fuel prices, holiday occurrences, CPI (Consumer Price Index), and unemployment rates, alongside temporal details like week of the month and month of the year.</li>
        </ul>

        <h3>Data Utilization:</h3>
        <p>The data used to train the model extends up to December, 2011. For forecasting purposes, we simulate future events using data from January to Octorber 2012. Users are presented with historical indicator values that reflect "future events" (January - October 2012), but the values can be adjusted to model different scenarios.</p>
        
        <h3>Usage Session:</h3>
        <ol>
            <li>Below the instructions, you will find a prediction chart. Initially, it plots "future" actual sales in blue against the predicted sale values in red.</li>
            <li>The red line illustrates the model's proficiency in predicting future sales, serving as a benchmark for accuracy.</li>
            <li>To predict sales for the upcoming week, you may select your indicators. It's optional to adjust these indicators as they are set to reflect the actual conditions of the time.</li>
            <li>After making predictions for a week, you have the option to proceed to the next week by clicking on the "Next Week" button, allowing you to forecast sales for that week.</li>
            <li>This process can be repeated week by week, enabling a continuous forecasting experience.</li>
        </ol>
        <h2>You can follow a Demo <a href="https://youtu.be/fxvBxFPFMOM" target="_blank">Here</a></h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fxvBxFPFMOM?si=4wDpMEYRzhtFywJu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        
        <h3>Prediction Chart:</h3>
        <img src={screenShot} alt="Sales Forecasting Chart"></img>

    </div>
  )
}

export default Home
