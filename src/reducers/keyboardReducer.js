import {createSlice} from "@reduxjs/toolkit";
import {keyboardValues} from "../data/keyboardValues";

const initialState = {
    activeKey: keyboardValues[0],
    category: 'keyboard'
};


export const keyboard = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {
        setActiveKey: (state, action) => {
            state.activeKey = action.payload.activeKey;
            state.category = action.payload.category;
        },
    }
});

export const {setActiveKey} = keyboard.actions;

export default keyboard.reducer;