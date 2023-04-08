import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from '../slices/WeatherSlices'
const rootReducer = combineReducers(
  {
    // Add your reducers here
    weather:weatherReducer
  }
)


export default rootReducer;
