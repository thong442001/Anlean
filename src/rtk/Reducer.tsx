import { createSlice } from "@reduxjs/toolkit";
import { getDataPage } from "./API";
import { PostInforUser } from "./API";

interface AppState {
    index: number;
    dataURL: object;
    indexPage2: number;
    arrPage2: boolean[];
}

const initialState: AppState = {
    index: 1,
    dataURL: {},
    indexPage2: 0,
    arrPage2: [],
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataPage.pending, (state, action) => {
            console.log("...Pending");
            state.dataURL = {};
        });
        builder.addCase(getDataPage.fulfilled, (state, action) => {
            console.log("...fulfilled");
            state.dataURL = action.payload;
            console.log(action.payload);
        });
        builder.addCase(getDataPage.rejected, (state, action) => {
            console.log("...Rejected");
            state.dataURL = {};
        });
        //send infor user
        builder.addCase(PostInforUser.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(PostInforUser.fulfilled, (state, action) => {
            console.log("...fulfilled");
            //console.log(action.payload);
            // reset 
            state.indexPage2 = 0;
            state.arrPage2.length = 0;
            // chuyển page
            state.index = state.index + 1;
        });
        builder.addCase(PostInforUser.rejected, (state, action) => {
            console.log("...Rejected");
        });
    }
});

export const { changeIndex, backHome, changeIndexPage2, resetIndexPage2, addArrPage2 } = appSlice.actions;
export default appSlice.reducer;




