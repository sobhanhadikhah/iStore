import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartList: [],
        total:0
    },
    reducers: {
        add(state,action){
            const updateCard = state.cartList.concat(action.payload);
            const totalItems = state.total + action.payload.price;
            return {...state,cartList:updateCard,total:totalItems};
            
        },
        remove(){
            
        },
    }
}); 
export const {add,remove} = cartSlice.actions;
export const cardReducser = cartSlice.reducer;