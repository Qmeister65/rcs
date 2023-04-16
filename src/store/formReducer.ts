import { CardProps } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

interface FormState {
  cardList: CardProps[];
}

const initialState: FormState = {
  cardList: [],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addFormCard: (state, action) => {
      state.cardList.push(action.payload);
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;

export const selectFormCards = (state: RootState) => state.formReducer.cardList;
