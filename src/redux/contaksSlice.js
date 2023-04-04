import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setAddContact,
  setDeleteContacts,
} from './operations';

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchAllContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchAllContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [setAddContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [setAddContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [setAddContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [setDeleteContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [setDeleteContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [setDeleteContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
