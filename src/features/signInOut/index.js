import { createSlice } from '@reduxjs/toolkit';


export const signInOut = createSlice({
    name: 'signInOut',
    initialState: {
        status: false,
    },
    reducers: {
        signIn: (state) => {
            state.status = true
        },
        signOut: (state) => {
            state.status = false
        }
    }
})

export const { signIn, signOut } = signInOut.actions

export default signInOut.reducer