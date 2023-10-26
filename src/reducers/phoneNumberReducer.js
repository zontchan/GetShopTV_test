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
        clearPhone: (state, action) => {
            state.splice(0, state.length);
        }
    },
});

export const {addNumber, deleteNumber, clearPhone} = phoneNumber.actions;

export default phoneNumber.reducer;