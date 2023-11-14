import { configureStore } from '@reduxjs/toolkit'
import phoneNumberReducer from "../reducers/phoneNumberReducer";
import phoneValidityReducer from "../reducers/phoneValidityReducer";
import phoneFormReducer from "../reducers/phoneFormReducer";

const store = configureStore({
    reducer: {
        phoneNumber:phoneNumberReducer,
        phoneForm: phoneFormReducer,
        validNumber: phoneValidityReducer,
    },
})

export default store;
