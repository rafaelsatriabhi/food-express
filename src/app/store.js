import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import signInOut from '../features/signInOut'

export default configureStore({
    reducer: {
        counter: counterReducer,
        isLoggedIn: signInOut,
    },
})