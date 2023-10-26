
import { configureStore } from '@reduxjs/toolkit'
import phoneNumberReducer from "../reducers/phoneNumberReducer";
import keyboardReducer from "../reducers/keyboardReducer";
import checkboxReducer from "../reducers/checkboxReducer";
import phoneValidityReducer from "../reducers/phoneValidityReducer";

const store = configureStore({
    reducer: {
        phoneNumber:phoneNumberReducer,
        keyboard: keyboardReducer,
        checkbox: checkboxReducer,
        validNumber: phoneValidityReducer,
    },
})

export default store;
