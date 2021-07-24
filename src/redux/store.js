import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import middleware from "./middleware";

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);

export default store;
