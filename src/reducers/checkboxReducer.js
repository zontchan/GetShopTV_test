import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isChecked: false,
};


export const checkbox = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        setIsChecked: (state, action) => {
            state.isChecked = !state.isChecked;
        },
    }
});

export const {setIsChecked} = checkbox.actions;

export default checkbox.reducer;