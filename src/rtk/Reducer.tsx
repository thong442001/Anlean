import { createSlice } from "@reduxjs/toolkit";
import { PostInforUser } from "./API";

interface AppState {
    index: number;
    indexPage2: number;
    arrPage2: boolean[];
    color: string
}

const initialState: AppState = {
    index: 1,
    indexPage2: 0,
    arrPage2: [],
    color: "",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        changeIndex: (state, action) => {
            state.index = state.index + action.payload;
        },
        backHome: (state) => {
            state.index = 1;
        },
        changeIndexPage2: (state, action) => {
            state.indexPage2 = state.indexPage2 + action.payload;
        },
        resetIndexPage2: (state) => {
            state.indexPage2 = 0;
            state.arrPage2.length = 0;
        },
        addArrPage2: (state, action) => {
            const result = action.payload;
            const index = state.indexPage2;
            if (index == state.arrPage2.length) {
                // thêm kết quả kiểm tra
                state.arrPage2.push(result);
            } else {
                //thay đổi kết quả kiểm tra
                state.arrPage2[index] = result;
            }
            console.log(state.indexPage2);
            console.log(state.arrPage2);
        },
        changeColor: (state) => {
            //state.indexPage2 = state.indexPage2 + action.payload;
            let countF: number = 0;
            state.arrPage2.map((item: boolean) => {
                item == false && countF++;
            })
            if (countF >= 3) {
                state.color = "Grey";
            } else if (countF >= 1) {
                state.color = "Yellow";
            } else {
                state.color = "Green";
            }
            console.log(state.color);
        },
    },
    extraReducers: (builder) => {
        //send infor user
        builder.addCase(PostInforUser.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(PostInforUser.fulfilled, (state, action) => {
            console.log("...fulfilled");
            //console.log(action.payload);
        });
        builder.addCase(PostInforUser.rejected, (state, action) => {
            console.log("...Rejected");
        });
    }
});

export const { changeIndex, backHome, changeIndexPage2, resetIndexPage2, addArrPage2, changeColor } = appSlice.actions;
export default appSlice.reducer;




