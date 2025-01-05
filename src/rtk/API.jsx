import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

export const login = createAsyncThunk(
    "users/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/login", data);
            console.log(response);
            if (response.status == true) {
                return response.user;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/register", data);
            console.log(response);
            if (response.status == true) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

