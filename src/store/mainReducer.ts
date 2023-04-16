import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

interface MainState {
  query: string;
}

const initialState: MainState = {
  query: '',
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;

export const selectQuery = (state: RootState) => state.mainReducer.query;
