import { configureStore } from "@reduxjs/toolkit";
import { cardReducser } from "./cartSlice";
const store  = configureStore({
    reducer: {
        cartState: cardReducser,
        
    }
})
export default store;  