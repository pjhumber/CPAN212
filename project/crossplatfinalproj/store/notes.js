import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../supabase';

export const fetchnotes = createAsyncThunk('notes/fetch', async () => {
  const { data } = await supabase.from('notes').select('*').eq('deleted', false);
  return data;
});

export const fetchdeleted = createAsyncThunk('notes/fetchDeleted', async () => {
  const { data } = await supabase.from('notes').select('*').eq('deleted', true);
  return data;
});

export const softdeletenote = createAsyncThunk('notes/delete', async (id) => {
  await supabase.from('notes').update({ deleted: true }).eq('id', id);
  return id;
});

const notesslice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    deleted: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchnotes.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchdeleted.fulfilled, (state, action) => {
        state.deleted = action.payload;
      })
      .addCase(softdeletenote.fulfilled, (state, action) => {
        state.items = state.items.filter(note => note.id !== action.payload);
      });
  }
});

export default notesslice.reducer;