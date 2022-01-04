import { configureStore } from '@reduxjs/toolkit'
import cart from '../features/cart'
import counterReducer from '../features/counter/counterSlice'
import signInOut from '../features/signInOut'

export default configureStore({
    reducer: {
        counter: counterReducer,
        isLoggedIn: signInOut,
        cart: cart
    },
})