import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount ++
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload)
            cartItem.amount --
        },
        calcTotals: (state, action) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((element)=> {
                amount += element.amount
                total += element.amount * element.price
            })
            state.amount = amount;
            state.total = total;
        }
    }
})

export const { clearCart, removeItem, increase, decrease, calcTotals } = cartSlice.actions
export default cartSlice.reducer