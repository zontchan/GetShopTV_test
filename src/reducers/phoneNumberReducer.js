import {createSlice} from "@reduxjs/toolkit";

const initialState = [];


export const phoneNumber = createSlice({
    name: 'phoneNumber',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.push(action.payload);
        },
        deleteNumber: (state,action) => {
            state.pop();
        },
    },
});

export const {addNumber, deleteNumber} = phoneNumber.actions;

export default phoneNumber.reducer;