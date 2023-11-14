import {createSlice} from "@reduxjs/toolkit";
import {keyboardValues} from "../data/keyboardValues";
import {addNumber, deleteNumber} from "./phoneNumberReducer";

const initialState = {
    activeKey: keyboardValues[0],
    category: 'keyboard',
    isChecked: false,
};

export const phoneForm = createSlice({
    name: 'phoneForm',
    initialState,
    reducers: {
        setIsChecked: (state, action) => {
            state.isChecked = !state.isChecked;
        },
        setActiveKey: (state, action) => {
            state.activeKey = action.payload.activeKey;
            state.category = action.payload.category;
        },
        arrowUpAction: (state, action) => {
            if(state.category === 'keyboard'){
                const index = keyboardValues.findIndex(o => o === state.activeKey);
                if(state.activeKey === 'Remove' || state.activeKey === '0') {
                    state.activeKey = keyboardValues[index - 2];
                    return;
                }
                if(['1','2','3'].includes(state.activeKey)) return;
                state.activeKey = keyboardValues[index-3];
                return;
            }
            if(state.category === 'checkbox'){
                state.category = 'keyboard';
                state.activeKey = 'Remove';
                return;
            }
            if(state.category === 'confirm'){
                state.category = 'checkbox';
                state.activeKey = 'Checkbox';
            }
            if(state.category === 'close'){
                state.category = 'confirm';
                state.activeKey = 'ConfirmButton';
            }
        },
        arrowDownAction: (state, action) => {
            if(state.category === 'keyboard'){
                const index = keyboardValues.findIndex(o => o === state.activeKey);
                if(state.activeKey === 'Remove' || state.activeKey === '0'){
                    state.category = 'checkbox';
                    state.activeKey = 'Checkbox';
                    return;
                }
                if(state.activeKey === '7' || state.activeKey === '8'){
                    state.activeKey = 'Remove'
                    return;
                }
                if(state.activeKey === '9'){
                    state.activeKey = '0';
                    return;
                }
                state.activeKey = keyboardValues[index+3];
                return;
            }
            if(state.category === 'checkbox'){
                state.category = 'confirm';
                state.activeKey = 'ConfirmButton';
                return;
            }
            if(state.category === 'confirm'){
                state.category = 'close';
                state.activeKey = 'CloseButton';
            }
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
export const handleKeyDown = (props) => (dispatch, getState) => {
    const {phoneForm: {category, activeKey}, phoneNumber} = getState();
    const {key, code} = props;
    if(key === 'Enter'){
        if(category === 'keyboard') {
            if(activeKey === 'Remove') dispatch(deleteNumber());
            else {
                if (phoneNumber.length === 10) return;
                dispatch(addNumber(activeKey));
            }
        }
        if(category === 'checkbox'){
            dispatch(setIsChecked());
        }
    }
    if(key === 'Backspace'){
        dispatch(setActiveKey({activeKey: 'Remove', category: 'keyboard'}));
        dispatch(deleteNumber());
    }
    if(!isNaN(key) && code !== 'Space'){
        if(phoneNumber.length === 10) return;
        dispatch(setActiveKey({activeKey: key, category: 'keyboard'}))
        dispatch(addNumber(key));
    }
    if(key === 'ArrowUp') dispatch(arrowUpAction());
    if(key === 'ArrowDown') dispatch(arrowDownAction());
    if(key === 'ArrowRight') dispatch(arrowRightAction());
    if(key === 'ArrowLeft') dispatch(arrowLeftAction());
}
export const {setActiveKey, arrowUpAction, arrowDownAction, arrowRightAction, arrowLeftAction, setIsChecked} = phoneForm.actions;

export default phoneForm.reducer;