import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from 'redux-devtools-extension'

// Import your root reducer
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk)) // Apply redux-thunk middleware
// )
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)
