import { configureStore } from '@reduxjs/toolkit';
import datareducer from './vacSlice';

export const store = configureStore({ reducer: { vacancy: datareducer } });