const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers:{
        allProducts(state,action){
            return action.payload;
        }
    }
})
const {reducer,actions} = productSlice;
export const {allProducts} = actions;
export default reducer;