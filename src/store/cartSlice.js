import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartList: [],
        total:0,
        
    },
    reducers: {
        add(state,action){
            const updateCard = state.cartList.concat(action.payload);
            let totalItems = state.total + action.payload.price;
            return {...state,cartList:updateCard,total:totalItems};
            
        },
        remove(state,action){
            const removeItem = state.cartList.filter(item=> item.id !== action.payload.id);
            const totalItems = state.total - action.payload.price;
            return {...state,total:totalItems,cartList:removeItem}

        },
    }
}); 
export const {add,remove} = cartSlice.actions;
export const cardReducser = cartSlice.reducer;