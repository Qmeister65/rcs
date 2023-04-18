import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

interface SearchBarState {
  value: string;
}

const initialState: SearchBarState = {
  value: '',
};

const searchBarSlice = createSlice({
  name: 'searchBarSlice',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;
export default searchBarSlice.reducer;

export const selectValue = (state: RootState) => state.searchBarReducer.value;
