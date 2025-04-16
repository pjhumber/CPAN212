import { configureStore } from '@reduxjs/toolkit';
import notesslice from './notes';

export default configureStore({
  reducer: {
    notes: notesslice
  }
});