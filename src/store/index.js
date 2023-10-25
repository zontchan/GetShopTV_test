
import { configureStore } from '@reduxjs/toolkit'
import phoneNumberReducer from "../reducers/phoneNumberReducer";
import keyboardReducer from "../reducers/keyboardReducer";
import checkboxReducer from "../reducers/checkboxReducer";

const store = configureStore({
    reducer: {
        phoneNumber:phoneNumberReducer,
        keyboard: keyboardReducer,
        checkbox: checkboxReducer,
    },
})

export default store;
