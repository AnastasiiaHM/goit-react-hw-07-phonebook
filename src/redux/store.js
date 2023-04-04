import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contaksSlice';
import { filterReducer } from '../redux/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['contacts/fetchContacts/fulfilled'],
      },
    }),
});
