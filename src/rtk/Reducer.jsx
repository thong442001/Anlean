import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    index: 0,
    aKTco: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        changeIndex: (state, action) => {
            state.index = state.index + action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    },
});

export const { changeIndex } = appSlice.actions;
export default appSlice.reducer;




