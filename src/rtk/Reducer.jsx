import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./API";

const initialState = {
    user: null, // thông tin user đăng nhập
    cart: [], // {_id, name, price, quantity, images}
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        addItemToCart: (state, action) => {
        },
        changeQuantity: (state, action) => {

        },
        logout: (state, action) => {
            state.user = null;
        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.user = null;
        });
    }
});

export const { addItemToCart, logout, clearCart, changeQuantity } = appSlice.actions;
export default appSlice.reducer;




