import { AppDispatch, RootState } from '@/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { formActions } from '@/store/formReducer';
import { mainActions } from '@/store/mainReducer';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ ...formActions, ...mainActions }, dispatch);
};
