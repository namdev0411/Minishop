import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart:(state,action)=>{
            const item = action.payload;
            const existItemId = state.findIndex(i=>i.id === item.id);
            if(state.length<1||existItemId< 0){
                item.quantity = 1;
                state.push(item);
            }else{
                state[existItemId].quantity+=1;
            }
        },
        removeFromCart: (state,action)=> {
            const id = action.payload;
            const index = state.findIndex(i=>i.id === id);
            state.splice(index,1);
        },
        clearCart:()=>{
            return [];
        },
        editCart:(state,action)=>{
            const {type,id} = action.payload;
            const index = state.findIndex(i=>i.id === id);
            if(type ==="-"){
                if(state[index].quantity>1)
                state[index].quantity-=1;
            }else{
                state[index].quantity+=1;
            }
        }
    }
});
const {actions,reducer} = cartSlice;
export const {addToCart,removeFromCart,clearCart,editCart} = actions;
export default reducer;