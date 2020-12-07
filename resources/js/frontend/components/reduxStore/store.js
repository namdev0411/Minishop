import {configureStore} from '@reduxjs/toolkit';
import cartToggleSlide from '../../features/Cart/redux-slice/cartToggleSlice';
import cartSlice from '../../features/Cart/redux-slice/cartSlide';
import productSlice from '../../features/Products/redux/productSlice';

const store = configureStore({
    reducer: {
        cartToggle : cartToggleSlide,
        cart: cartSlice,
        products: productSlice
    }
})
export default store;