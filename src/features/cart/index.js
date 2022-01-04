import { createSlice } from '@reduxjs/toolkit';


export const cart = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.value.push(action.payload)
        },
        removeItemFromCart: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cart.actions

export default cart.reducer