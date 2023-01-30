import { combineReducers, configureStore } from '@reduxjs/toolkit';
import russiaSlice  from './users/russia-slice';


const rootReducer = combineReducers({
  russiaSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
