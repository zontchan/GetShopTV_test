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
        arrowUpAction: (state, action) => {

        },
        arrowDownAction: (state, action) => {

        },
        arrowLeftAction: (state, action) => {

        },
        arrowRightAction: (state, action) => {
        },

    },
});

export const {setActiveKey, arrowUpAction, arrowDownAction, arrowRightAction, arrowLeftAction} = keyboard.actions;

export default keyboard.reducer;