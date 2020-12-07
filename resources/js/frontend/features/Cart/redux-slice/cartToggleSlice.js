import {createSlice} from '@reduxjs/toolkit';

const cartToggleSlice = createSlice({
    name: 'cartToggle',
    initialState: false,
    reducers: {
      toggleClass:state=>!state
    }
  })
const {reducer,actions} = cartToggleSlice;
export const{toggleClass} = actions;
export default reducer;
