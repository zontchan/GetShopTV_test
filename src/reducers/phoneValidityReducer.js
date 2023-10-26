import {createSlice} from "@reduxjs/toolkit";

export const phoneValidity = createSlice({
    name: 'phoneValidity',
    initialState: {
      isValid: null,
    },
    reducers: {
        clearValidityData: (state, action) => {
            state.isValid = null;
        },
        setIsValid: (state, action) => {
            state.isValid = action.payload;
        }
    }
});

export const getPhoneValidity = (phone) => async (dispatch) => {
    const response = await fetch(`http://apilayer.net/api/validate?access_key=0b20ce13fbc2618ea70e15299bfd5ce6&number=${phone}&country_code=RU&format=1`);
    const data = await response.json();
    dispatch(setIsValid(data.valid));
}

export const {clearValidityData, setIsValid} = phoneValidity.actions;
export default phoneValidity.reducer;