import {createSlice} from "@reduxjs/toolkit";

export const phoneValidity = createSlice({
    name: 'phoneValidity',
    initialState: {
      isValid: null,
      error: null,
    },
    reducers: {
        clearValidityData: (state, action) => {
            state.isValid = null;
            state.error = null;
        },
        setIsValid: (state, action) => {
            state.error = null;
            state.isValid = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const getPhoneValidity = (phone) => async (dispatch) => {
    try{
      const response = await fetch(`http://apilayer.net/api/validate?access_key=0b20ce13fbc2618ea70e15299bfd5ce6&number=${phone}&country_code=RU&format=1`);
        if (response.status !== 200) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        if(data.error) dispatch(setError(data.error.info));
        else dispatch(setIsValid(data.valid));
    }
    catch (e){
      dispatch(setError(e.message));
    }

}

export const {clearValidityData, setIsValid, setError} = phoneValidity.actions;
export default phoneValidity.reducer;