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
            if(state.category === 'checkbox'){
                state.category = 'keyboard';
                state.activeKey = '0';
                return;
            }
            if(state.category === 'confirm'){
                state.category = 'checkbox';
                state.activeKey = 'Checkbox';
                return;
            }
            if(state.category === 'close'){
                state.category = 'confirm';
                state.activeKey = 'ConfirmButton';
            }
            else {
                if(state.activeKey === '1') return;
                const index = keyboardValues.findIndex(o => o === state.activeKey);
                state.activeKey = keyboardValues[index - 1];
            }
        },
        arrowRightAction: (state, action) => {
            if(state.category === 'checkbox'){
                state.category = 'confirm';
                state.activeKey = 'ConfirmButton';
                return;
            }
            if(state.activeKey === '0'){
                state.category = 'checkbox';
                state.activeKey = 'Checkbox';
                return;
            }
            if(state.category === 'confirm'){
                state.category = 'close';
                state.activeKey = 'CloseButton';
            }
            else{
                const index = keyboardValues.findIndex(o => o === state.activeKey);
                state.activeKey = keyboardValues[index+1];
                state.category = 'keyboard';
            }
        },

    },
});

export const {setActiveKey, arrowUpAction, arrowDownAction, arrowRightAction, arrowLeftAction} = keyboard.actions;

export default keyboard.reducer;