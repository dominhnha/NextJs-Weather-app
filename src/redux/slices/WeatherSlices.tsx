import {
  Action,
  configureStore,
  ThunkAction,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import weatherApi from '../../apis/weather.api';

export interface Weather {
  cityName: string;
}

interface WeatherState {
  listWeathers: Weather[];
  listHistory: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WeatherState = {
  listWeathers: [],
  listHistory: [],
  status: 'idle',
};

export const addWeatherUserThunkAction = createAsyncThunk(
  'weathers/add',
  async ({ cityName }: Weather, thunkAPI) => {
    try {
      const res = await weatherApi.weatherCityName(cityName);
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const weatherSlice = createSlice({
  name: 'weathers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWeatherUserThunkAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addWeatherUserThunkAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.listWeathers.push(action.payload);
          state.status = 'idle';
        }
      })
      .addCase(addWeatherUserThunkAction.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const { actions: weatherActions } = weatherSlice;
export default weatherSlice.reducer;