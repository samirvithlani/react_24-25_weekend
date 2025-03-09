import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/CartSlice"
import bankSlice from "./redux/BankSlice"
import themeSlice from "./redux/ThemeSlice"
import  studentSlice from "./redux/StudentRecordSlice"
import contentSlice  from "./redux/ContentSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer,persistStore } from "redux-persist"
import { PURGE } from "redux-persist";


// export const store = configureStore({
//     reducer:{
//         cart:cartSlice,
//         bank:bankSlice,
//         theme:themeSlice,
//         student:studentSlice,
//         content:contentSlice
//     }
// })

//persist config...

//combine reducers...
const rootReducer = combineReducers({
    cart:cartSlice,
    bank:bankSlice,
    theme:themeSlice,
    student:studentSlice,
    content:contentSlice
})


const persistConfig = {
    key:"root",
    storage,
    whitelist:["theme"]
}

export const store = configureStore({
    reducer: persistReducer(persistConfig,rootReducer),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE],
      },
    }),

})

export const persistor = persistStore(store)



