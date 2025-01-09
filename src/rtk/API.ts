// import { createAsyncThunk } from '@reduxjs/toolkit'
// // firebase
// import firestore from '@react-native-firebase/firestore';

// export const getData = createAsyncThunk(
//     "firestore/test",
//     async () => {
//         const fb = await firestore().collection('test');
//         await fb.onSnapshot(querySnapshot => {
//             const temp: any = [];
//             querySnapshot.forEach((doc) => {
//                 temp.push({
//                     id: doc.id,
//                     img: doc.data()?.img,
//                     name: doc.data()?.name,
//                     old: doc.data()?.old,
//                 });
//             });

//         });
//     }
// );
// export const login = createAsyncThunk(
//     "tai_khoan/Login",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await AxiosHelper()
//                 .post("/tai_khoan/Login", data);
//             //console.log(response);
//             if (response.status == true) {
//                 return response;
//             }
//         } catch (error) {
//             console.log(error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );
